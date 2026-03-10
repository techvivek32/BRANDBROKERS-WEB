import { Metadata } from "next";
import ServicesPageContent from "./ServicesPageContent";

export const metadata: Metadata = {
  title: "Our Services - Brand Brokers",
  description: "Comprehensive marketing solutions including digital marketing, influencer partnerships, social media management, and talent representation.",
  openGraph: {
    title: "Our Services - Brand Brokers",
    description: "Comprehensive marketing solutions for modern brands",
  },
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}