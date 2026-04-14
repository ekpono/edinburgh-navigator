import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Employment & Scottish Benefits",
  description:
    "Find work in Edinburgh, access free training, and claim Scottish benefits — Scottish Child Payment, Adult Disability Payment, Best Start Grant, and more from Social Security Scotland.",
  openGraph: {
    title: "Employment & Scottish Benefits | Edinburgh Navigator",
    description:
      "Jobs, free training, and Scottish benefits including Scottish Child Payment and Adult Disability Payment.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
