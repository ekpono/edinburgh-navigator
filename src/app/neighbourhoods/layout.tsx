import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edinburgh Neighbourhoods",
  description:
    "Compare Edinburgh neighbourhoods — rents, transport, lifestyle, and what it's like to live in Leith, Marchmont, Stockbridge, Newington, and 20 more areas.",
  openGraph: {
    title: "Edinburgh Neighbourhoods | Edinburgh Navigator",
    description:
      "Compare rents, transport, and lifestyle across Edinburgh's neighbourhoods — Leith, Marchmont, Stockbridge, and more.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
