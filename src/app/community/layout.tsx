import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Hub",
  description:
    "Find your community in Edinburgh — local groups, events, faith communities, and an interactive map of key services across the city.",
  openGraph: {
    title: "Community Hub | Edinburgh Navigator",
    description:
      "Local groups, events, faith communities, and an interactive map of Edinburgh services.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
