import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crisis Support",
  description:
    "Emergency housing help, crisis helplines, and legal rights for Edinburgh residents. Shelter Scotland, Edinburgh Crisis Centre, and what to do right now.",
  openGraph: {
    title: "Crisis Support | Edinburgh Navigator",
    description:
      "Emergency housing help, crisis helplines, and legal rights for Edinburgh residents.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
