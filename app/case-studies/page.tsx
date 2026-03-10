import { Metadata } from "next";
import CaseStudiesPageContent from "./CaseStudiesPageContent";

export const metadata: Metadata = {
  title: "Case Studies - Brand Brokers",
  description: "Explore our successful marketing campaigns and the results we've achieved for our clients. Real stories, real results.",
  openGraph: {
    title: "Case Studies - Brand Brokers",
    description: "Explore our successful marketing campaigns and results",
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesPageContent />;
}