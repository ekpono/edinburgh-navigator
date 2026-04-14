export const runtime = 'edge';

import { NextResponse } from "next/server";
import { fetchCouncilNews } from "@/lib/news";

export async function GET() {
  const items = await fetchCouncilNews();
  return NextResponse.json(
    { items, source: "https://www.edinburgh.gov.uk/news" },
    {
      headers: {
        "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
      },
    }
  );
}
