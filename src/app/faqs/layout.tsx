import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Council FAQs",
  description:
    "Answers to the most common questions about living in Edinburgh — GP registration, free prescriptions, tenancy rights, council tax, Scottish benefits, and more.",
  openGraph: {
    title: "Council FAQs | Edinburgh Navigator",
    description:
      "Common questions answered for Edinburgh residents — housing, health, benefits, council services, and Scottish law.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
