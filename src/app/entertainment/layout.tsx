import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entertainment | Edinburgh Navigator",
  description:
    "Pubs, restaurants, ice skating, and fun & games in Edinburgh — your guide to the best entertainment the city has to offer.",
  openGraph: {
    title: "Entertainment | Edinburgh Navigator",
    description:
      "Pubs, restaurants, ice skating, and fun & games in Edinburgh.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
