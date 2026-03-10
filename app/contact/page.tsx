import { Metadata } from "next";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us - Brand Brokers",
  description: "Get in touch with Brand Brokers. Let's discuss how we can help transform your brand and drive exceptional growth.",
  openGraph: {
    title: "Contact Us - Brand Brokers",
    description: "Get in touch with Brand Brokers",
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}