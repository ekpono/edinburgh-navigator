import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import Sherlock from "@/components/sherlock";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const BASE_URL = "https://edinburgh-navigator.vercel.app";

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
    <html lang="en-GB" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="h-full antialiased bg-slate-100">
        <div className="flex h-full">
          <Sidebar />
          <main className="flex-1 overflow-y-auto min-h-full pt-14 md:pt-0">
            {children}
            <Sherlock />
            <footer className="mt-10 border-t border-slate-200 bg-white">
              <div className="px-5 py-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Edinburgh Navigator</div>
                    <div className="text-xs text-slate-500 mt-1">Practical help for Edinburgh residents and visitors.</div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                    <span>© 2026- Present</span>
                    <span className="text-slate-300">•</span>
                    <span>Supporting the community</span>
                    <span className="text-slate-300">•</span>
                    <span>Made with ❤️ by <a href="https://github.com/ekpono/" target="_blank" rel="noreferrer" className="font-semibold hover:underline">Ambrose</a></span>
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
