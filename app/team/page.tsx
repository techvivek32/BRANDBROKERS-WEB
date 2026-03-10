import { Metadata } from "next";
import TeamPageContent from "./TeamPageContent";

export const metadata: Metadata = {
  title: "Our Team - Brand Brokers",
  description: "Meet the talented team behind Brand Brokers. Our experts in marketing, strategy, and creative development are passionate about driving your brand's success.",
  openGraph: {
    title: "Our Team - Brand Brokers",
    description: "Meet the talented team behind Brand Brokers",
  },
};

export default function TeamPage() {
  return <TeamPageContent />;
}