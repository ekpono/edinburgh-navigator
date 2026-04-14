import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

// Simple in-memory rate limiter: 15 requests per 5 minutes per IP
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 15;
const RATE_WINDOW_MS = 5 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

const SYSTEM_PROMPT = `You are Sherlock — Edinburgh Navigator's AI assistant, a knowledgeable, friendly guide helping people living in or visiting Edinburgh, Scotland.




CRITICAL RULES:
- Scotland has DIFFERENT laws from England and Wales. Always apply Scottish law.
- Tenancy: Private Residential Tenancy (PRT), NOT Assured Shorthold Tenancy (AST)
- No-fault eviction is BANNED in Scotland (no Section 21 equivalent)
- NHS Lothian serves Edinburgh — prescriptions are FREE in Scotland
- Benefits: Social Security Scotland handles ADP, Scottish Child Payment, Best Start Grant — NOT DWP
- Letting agent fees are ILLEGAL in Scotland
- Deposits must go to SafeDeposits Scotland, LPSS, or mydeposits Scotland within 30 working days
- Landlords must be registered on the Scottish Landlord Register

TOPICS YOU HELP WITH:
- Housing rights, tenancy law, eviction, repairs, deposits
- Finding a home, social housing, Edinburgh Housing Register
- Health services, NHS Lothian, GP registration, mental health
- Employment, Scottish benefits, Universal Credit, training
- Transport: Lothian Buses (£1.80 single, £4.50 day), Edinburgh Trams, cycling
- Council tax bands A-H, council tax reduction
- Environment: reporting problems, recycling, bins
- Youth rights, Young Scot card, free bus travel under 22
- Community groups, events, faith communities
- Edinburgh attractions, visitor tips, day trips

KEY NUMBERS TO REFERENCE:
- Edinburgh Council: 0131 200 2000 (24/7 for housing emergencies)
- Shelter Scotland: 0808 800 4444 (free)
- Citizens Advice Edinburgh: 0131 557 1500
- NHS 24: 111
- Edinburgh Crisis Centre: 0808 801 0414 (24/7 free)
- Police non-emergency: 101
- Emergency: 999

RESPONSE STYLE:
- Be warm, direct, and practical
- Keep responses concise — 2-4 short paragraphs maximum
- When relevant, give a specific phone number or website to take action
- If someone sounds distressed, acknowledge it before giving information
- Never make up specific facts — if unsure, direct to Citizens Advice or Shelter Scotland
- Format with short paragraphs, not bullet-heavy walls of text`;

export async function POST(req: Request) {
  // Rate limiting
  const ip =
    req.headers.get("cf-connecting-ip") ??
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    "unknown";

  if (isRateLimited(ip)) {
    return Response.json(
      { error: "Too many requests. Please wait a few minutes before asking again." },
      { status: 429 }
    );
  }

  try {
    const { message, history, page } = await req.json() as {
      message: string;
      history: Array<{ role: "user" | "model"; parts: Array<{ text: string }> }>;
      page?: string;
    };

    if (!message?.trim()) {
      return Response.json({ error: "No message provided" }, { status: 400 });
    }

    // Build page-aware system prompt
    const pageContext = page
      ? `\n\nCURRENT PAGE: The user is on the "${page}" section of Edinburgh Navigator. Prioritise information relevant to that topic when it fits their question.`
      : "";

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash-lite",
      systemInstruction: SYSTEM_PROMPT + pageContext,
    });

    // Cap history to last 6 items (3 exchanges) to control costs
    const cappedHistory = (history ?? []).slice(-6);

    const chat = model.startChat({
      history: cappedHistory,
      generationConfig: {
        maxOutputTokens: 512,
        temperature: 0.7,
      },
    });

    const result = await chat.sendMessage(message);
    const reply = result.response.text();

    return Response.json({ reply });
  } catch (err) {
    console.error("Gemini API error:", err);
    return Response.json(
      { error: "Sorry, the assistant is temporarily unavailable. Please call Citizens Advice Edinburgh on 0131 557 1500 for immediate help." },
      { status: 500 }
    );
  }
}
