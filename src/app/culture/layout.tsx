import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scottish Culture & Glossary | Edinburgh Navigator",
  description:
    "Scottish phrases, customs, cultural calendar, Hogmanay, Burns Night, and key differences between Scottish and English law, NHS, and daily life.",
  openGraph: {
    title: "Scottish Culture & Glossary | Edinburgh Navigator",
    description:
      "Scots language glossary, cultural events, customs, and what to know before moving to or visiting Edinburgh.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
