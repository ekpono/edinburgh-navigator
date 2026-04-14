import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edinburgh Visitor Guide",
  description:
    "Complete visitor guide to Edinburgh — top free and paid attractions, getting around, day trips to Stirling and Loch Lomond, food and drink, and practical tips.",
  openGraph: {
    title: "Edinburgh Visitor Guide | Edinburgh Navigator",
    description:
      "Top attractions, transport tips, day trips, food and drink, and everything you need to visit Edinburgh.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
