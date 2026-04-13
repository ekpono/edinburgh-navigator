import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Edinburgh Navigator",
  description:
    "Bridging the gap between 530,680 Edinburgh residents and essential services — housing, health, benefits, employment, and more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="h-full antialiased bg-slate-100">
        <div className="flex h-full">
          <Sidebar />
          {/* Main content — offset on mobile for hamburger button */}
          <main className="flex-1 overflow-y-auto min-h-full pt-14 md:pt-0">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
