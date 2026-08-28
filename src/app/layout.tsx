import type { Metadata } from "next";
import { Bricolage_Grotesque, Literata, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import Sherlock from "@/components/sherlock";

// Bricolage Grotesque: a display grotesque with real quirks in it — the
// headline face. Narrowed via `wdth` so it reads like painted fascia lettering.
const display = Bricolage_Grotesque({
  variable: "--font-display-face",
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
});
// Literata: a serif drawn for screen reading. Prose face — this app is read
// by people working out whether they can be evicted, not skimmed.
const body = Literata({ variable: "--font-body", subsets: ["latin"] });
// IBM Plex Mono: labels, and the numbers people dial under pressure.
const mono = IBM_Plex_Mono({
  variable: "--font-mono-face",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const BASE_URL = "https://edinburghnavigator.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Edinburgh Navigator",
    template: "%s | Edinburgh Navigator",
  },
  description:
    "Your guide to Edinburgh, Scotland — housing rights, NHS Lothian, Scottish benefits, transport, council services, and more. Free help for residents and visitors.",
  keywords: [
    "Edinburgh",
    "Edinburgh housing",
    "NHS Lothian",
    "Scottish benefits",
    "Edinburgh council",
    "Edinburgh transport",
    "Private Residential Tenancy",
    "Social Security Scotland",
    "Edinburgh Navigator",
  ],
  authors: [{ name: "Edinburgh Navigator" }],
  creator: "Edinburgh Navigator",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: BASE_URL,
    siteName: "Edinburgh Navigator",
    title: "Edinburgh Navigator — Your guide to Scotland's capital",
    description:
      "Housing rights, NHS Lothian, Scottish benefits, transport, and city services for Edinburgh residents and visitors.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Edinburgh Navigator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Edinburgh Navigator — Your guide to Scotland's capital",
    description:
      "Housing rights, NHS Lothian, Scottish benefits, transport, and city services for Edinburgh residents and visitors.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Edinburgh Navigator",
  url: BASE_URL,
  description:
    "Your guide to Edinburgh, Scotland — housing rights, NHS Lothian, Scottish benefits, transport, and council services.",
  potentialAction: {
    "@type": "SearchAction",
    target: `${BASE_URL}/faqs?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${display.variable} ${body.variable} ${mono.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="h-full antialiased bg-slate-50">
        <div className="flex h-full">
          <Sidebar />
          <main className="flex-1 overflow-y-auto min-h-full pt-14 md:pt-0">
            {children}
            <Sherlock />
            <footer className="band band-ink">
              <div className="band-inner py-10">
                <div className="split">
                  <div className="split-label">
                    <span className="eyebrow eyebrow-dark">Edinburgh Navigator</span>
                  </div>
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                    <p className="text-sm text-slate-200 max-w-sm leading-relaxed">
                      Practical help for Edinburgh residents and visitors. Every
                      listing carries the date it was last checked.
                    </p>
                    <div className="font-mono text-xs text-slate-400 leading-relaxed sm:text-right">
                      <div>© 2026 — present</div>
                      <div className="mt-1">
                        Built by{" "}
                        <a
                          href="https://github.com/ekpono/"
                          target="_blank"
                          rel="noreferrer"
                          className="text-amber-400 hover:underline"
                        >
                          Ambrose
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </main>
        </div>
      </body>
    </html>
  );
}
