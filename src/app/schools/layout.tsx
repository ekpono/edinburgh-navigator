import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schools & Catchment Areas | Edinburgh Navigator",
  description:
    "Find schools in Edinburgh, check catchment areas, apply for a school place, and learn about free school meals, Gaelic-medium education, and additional support needs.",
  openGraph: {
    title: "Schools & Catchment Areas | Edinburgh Navigator",
    description:
      "Edinburgh primary and secondary schools, catchment finder, admissions guidance, and family education rights.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
