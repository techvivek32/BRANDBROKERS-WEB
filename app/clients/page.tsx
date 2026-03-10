import { Metadata } from "next";
import ClientsPageContent from "./ClientsPageContent";

export const metadata: Metadata = {
  title: "Our Clients - Brand Brokers",
  description: "Discover the brands we've partnered with and the success stories we've created together.",
  openGraph: {
    title: "Our Clients - Brand Brokers",
    description: "Discover the brands we've partnered with",
  },
};

export default function ClientsPage() {
  return <ClientsPageContent />;
}