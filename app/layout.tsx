import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ScrollBackground from "@/components/three/ScrollBackground";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ClientWrapper from "@/components/ClientWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brand Brokers - Premium Marketing Agency",
  description: "Transform your brand with cutting-edge digital marketing, influencer partnerships, and data-driven strategies.",
  keywords: ["marketing agency", "digital marketing", "influencer marketing", "brand strategy", "social media management"],
  authors: [{ name: "Brand Brokers" }],
  openGraph: {
    title: "Brand Brokers - Premium Marketing Agency",
    description: "Transform your brand with cutting-edge digital marketing strategies",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand Brokers - Premium Marketing Agency",
    description: "Transform your brand with cutting-edge digital marketing strategies",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} theme-transition`}>
        <ThemeProvider>
          <ClientWrapper>
            <ScrollBackground />
            <Navbar />
          </ClientWrapper>
          <main>{children}</main>
          <ClientWrapper>
            <Footer />
          </ClientWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
