import { MetadataRoute } from "next";

const BASE_URL = "https://edinburghnavigator.com";


export default function sitemap(): MetadataRoute.Sitemap {
  console.log("Generating sitemap...");
  const routes = [
    { url: "/",              priority: 1.0,  changeFrequency: "weekly" as const },
    { url: "/crisis",        priority: 0.9,  changeFrequency: "monthly" as const },
    { url: "/housing",       priority: 0.9,  changeFrequency: "monthly" as const },
    { url: "/health",        priority: 0.9,  changeFrequency: "monthly" as const },
    { url: "/transport",     priority: 0.8,  changeFrequency: "monthly" as const },
    { url: "/weather",       priority: 0.8,  changeFrequency: "daily" as const },
    { url: "/employment",    priority: 0.8,  changeFrequency: "monthly" as const },
    { url: "/neighbourhoods",priority: 0.8,  changeFrequency: "monthly" as const },
    { url: "/environment",   priority: 0.7,  changeFrequency: "monthly" as const },
    { url: "/community",     priority: 0.7,  changeFrequency: "monthly" as const },
    { url: "/youth",         priority: 0.7,  changeFrequency: "monthly" as const },
    { url: "/budget",        priority: 0.7,  changeFrequency: "monthly" as const },
    { url: "/faqs",          priority: 0.8,  changeFrequency: "monthly" as const },
    { url: "/visitor",       priority: 0.8,  changeFrequency: "monthly" as const },
    { url: "/entertainment",  priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/schools",        priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/culture",        priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/childcare",      priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/cost-of-living",     priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/visitor-essentials", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/resident",           priority: 0.8, changeFrequency: "monthly" as const },
  ];

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE_URL}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
