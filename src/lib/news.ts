import type { NewsItem } from "@/lib/edinburgh-data";

const NEWS_URL = "https://www.edinburgh.gov.uk/news";

function decodeHtml(value: string) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&ndash;/g, "–")
    .replace(/&rsquo;/g, "’")
    .replace(/&lsquo;/g, "‘")
    .replace(/&rdquo;/g, "”")
    .replace(/&ldquo;/g, "“");
}

export function parseCouncilNews(html: string) {
  const items: NewsItem[] = [];
  const anchorRegex = /<a class="listing__link" href="([^"]+)">([^<]+)<\/a>/g;
  let match: RegExpExecArray | null;

  while ((match = anchorRegex.exec(html)) !== null) {
    const href = match[1];
    if (!href.startsWith("/news/article/")) continue;
    const url = `https://www.edinburgh.gov.uk${href}`;
    const title = decodeHtml(match[2].trim());
    const slice = html.slice(match.index, match.index + 1200);
    const publishedMatch = /Published:<\/strong>\s*([^<]+)/.exec(slice);
    const published = publishedMatch ? decodeHtml(publishedMatch[1].trim()) : "";

    if (!items.find((item) => item.url === url)) {
      items.push({ title, url, published });
    }
    if (items.length >= 10) break;
  }
  return items;
}

export async function fetchCouncilNews() {
  const response = await fetch(NEWS_URL, {
    next: { revalidate: 3600 },
    headers: {
      "User-Agent": "Mozilla/5.0 (compatible; EdinburghNavigator/1.0)",
      "Accept-Language": "en-GB,en;q=0.9",
    },
  });
  if (!response.ok) return [] as NewsItem[];
  const html = await response.text();
  return parseCouncilNews(html);
}
