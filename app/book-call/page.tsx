import { Metadata } from "next";
import BookCallContent from "./BookCallContent";

export const metadata: Metadata = {
  title: "Book a Call - Brand Brokers",
  description: "Schedule a free consultation with Brand Brokers. Let's discuss your marketing goals and how we can help achieve them.",
  openGraph: {
    title: "Book a Call - Brand Brokers",
    description: "Schedule a free consultation with Brand Brokers",
  },
};

export default function BookCallPage() {
  return <BookCallContent />;
}