import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transport in Edinburgh",
  description:
    "Getting around Edinburgh — Lothian Buses routes and fares, Edinburgh Trams, cycling routes, airport transfers, Park & Ride, and ScotRail connections.",
  openGraph: {
    title: "Transport in Edinburgh | Edinburgh Navigator",
    description:
      "Lothian Buses, Edinburgh Trams, cycling, airport transfers, and Park & Ride — everything you need to get around Edinburgh.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
