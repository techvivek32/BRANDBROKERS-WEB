import { Metadata } from "next";
import ProductsPageContent from "./ProductsPageContent";

export const metadata: Metadata = {
  title: "Products - Brand Brokers",
  description: "Discover our digital products and services designed to help brands succeed in the digital marketplace.",
  openGraph: {
    title: "Products - Brand Brokers",
    description: "Discover our digital products and services",
  },
};

export default function ProductsPage() {
  return <ProductsPageContent />;
}