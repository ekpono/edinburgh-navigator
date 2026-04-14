import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Childcare & Family Services | Edinburgh Navigator",
  description:
    "Scotland's 1,140 free childcare hours, nurseries, childminders, family benefits, Best Start Grant, Scottish Child Payment, and family support services in Edinburgh.",
  openGraph: {
    title: "Childcare & Family Services | Edinburgh Navigator",
    description:
      "Free childcare hours, nurseries, family benefits, and support services for families in Edinburgh.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
