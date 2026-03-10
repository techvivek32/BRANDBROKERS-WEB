import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Company Deck - Brand Brokers",
  description: "Download our company deck to learn more about Brand Brokers and our services.",
};

export default function CompanyDeckPage() {
  // This would typically serve a PDF file
  // For now, redirect to contact page
  redirect("/contact");
}