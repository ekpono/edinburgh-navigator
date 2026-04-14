import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Housing in Edinburgh",
  description:
    "Edinburgh housing rights, Private Residential Tenancy law, deposit protection, social housing, and what to do if facing eviction. Scotland's tenancy law protects you.",
  openGraph: {
    title: "Housing in Edinburgh | Edinburgh Navigator",
    description:
      "Private Residential Tenancy, deposit protection, social housing, and eviction rights for Edinburgh renters.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
