import { Metadata } from "next";
import RostersPageContent from "./RostersPageContent";

export const metadata: Metadata = {
  title: "Talent Roster - Brand Brokers",
  description: "Meet our exceptional roster of influencers and content creators who are shaping the digital landscape and driving authentic brand connections.",
  openGraph: {
    title: "Talent Roster - Brand Brokers",
    description: "Meet our exceptional roster of influencers and content creators",
  },
};

export default function RostersPage() {
  return <RostersPageContent />;
}