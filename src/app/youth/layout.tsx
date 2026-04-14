import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Youth & Rights",
  description:
    "Rights and support for young people in Edinburgh — free bus travel under 22, Young Scot card, Education Maintenance Allowance, CAMHS, and youth services.",
  openGraph: {
    title: "Youth & Rights | Edinburgh Navigator",
    description:
      "Free bus travel under 22, Young Scot card, EMA, and mental health support for young people in Edinburgh.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
