import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Council Tax & Budget",
  description:
    "Edinburgh council tax bands A–H, exemptions, discounts, and financial help. Council Tax Reduction, Scottish Welfare Fund, and how Edinburgh spends its budget.",
  openGraph: {
    title: "Council Tax & Budget | Edinburgh Navigator",
    description:
      "Council tax bands, exemptions, Council Tax Reduction, and financial help for Edinburgh residents.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
