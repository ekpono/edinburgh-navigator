import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cost of Living in Edinburgh | Edinburgh Navigator",
  description:
    "Realistic cost of living guide for Edinburgh — average rents, supermarket prices, utilities, transport costs, food banks, and Scottish benefits that can help.",
  openGraph: {
    title: "Cost of Living in Edinburgh | Edinburgh Navigator",
    description:
      "Average rents, food costs, utilities, and budget tips for living in Edinburgh.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
