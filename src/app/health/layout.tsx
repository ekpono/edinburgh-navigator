import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health & NHS Lothian",
  description:
    "NHS Lothian services for Edinburgh residents — GP registration, free prescriptions, mental health support, dentists, and your rights as a patient in Scotland.",
  openGraph: {
    title: "Health & NHS Lothian | Edinburgh Navigator",
    description:
      "GP registration, free prescriptions, mental health support, and your rights as an NHS Lothian patient.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
