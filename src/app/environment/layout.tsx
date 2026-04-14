import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clean Edinburgh — Bins & Recycling",
  description:
    "Report fly-tipping, potholes, and graffiti in Edinburgh. Bin collection days, recycling centres, bulky item collection, and Edinburgh's green spaces.",
  openGraph: {
    title: "Clean Edinburgh | Edinburgh Navigator",
    description:
      "Report problems, check bin collection days, find recycling centres, and explore Edinburgh's parks and green spaces.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
