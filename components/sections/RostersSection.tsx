"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { Instagram, Youtube, Twitter, ArrowRight } from "lucide-react";

export default function RostersSection() {
  const [rosters, setRosters] = useState([]);

  useEffect(() => {
    fetch("/api/rosters?featured=true&limit=6")
      .then((res) => res.json())
      .then((data) => setRosters(data))
      .catch((err) => console.error(err));
  }, []);

  // Fallback rosters for demo
  const fallbackRosters = [
    {
      name: "Sarah Johnson",
      platform: "Instagram",
      followers: "2.5M",
      category: "Lifestyle",
      bio: "Lifestyle influencer passionate about sustainable living and wellness.",
      image: "/influencer-1.jpg",
      socialLinks: {
        instagram: "https://instagram.com/sarahjohnson",
        youtube: "https://youtube.com/sarahjohnson",
      },
    },
    {
      name: "Mike Chen",
      platform: "TikTok",
      followers: "4.2M",
      category: "Tech",
      bio: "Tech reviewer and digital creator sharing the latest in innovation.",
      image: "/influencer-2.jpg",
      socialLinks: {
        tiktok: "https://tiktok.com/@mikechen",
        twitter: "https://twitter.com/mikechen",
      },
    },
    {
      name: "Emma Rodriguez",
      platform: "YouTube",
      followers: "1.8M",
      category: "Beauty",
      bio: "Beauty expert and makeup artist inspiring confidence through creativity.",
      image: "/influencer-3.jpg",
      socialLinks: {
        youtube: "https://youtube.com/emmarodriguez",
        instagram: "https://instagram.com/emmarodriguez",
      },
    },
    {
      name: "Alex Thompson",
      platform: "Instagram",
      followers: "3.1M",
      category: "Fitness",
      bio: "Fitness coach helping people achieve their health and wellness goals.",
      image: "/influencer-4.jpg",
      socialLinks: {
        instagram: "https://instagram.com/alexthompson",
        youtube: "https://youtube.com/alexthompson",
      },
    },
    {
      name: "Lisa Park",
      platform: "TikTok",
      followers: "5.7M",
      category: "Food",
      bio: "Food creator sharing delicious recipes and culinary adventures.",
      image: "/influencer-5.jpg",
      socialLinks: {
        tiktok: "https://tiktok.com/@lisapark",
        instagram: "https://instagram.com/lisapark",
      },
    },
    {
      name: "David Kim",
      platform: "YouTube",
      followers: "2.9M",
      category: "Gaming",
      bio: "Gaming content creator and esports enthusiast.",
      image: "/influencer-6.jpg",
      socialLinks: {
        youtube: "https://youtube.com/davidkim",
        twitter: "https://twitter.com/davidkim",
      },
    },
  ];

  const rostersToShow = rosters.length > 0 ? rosters : fallbackRosters;

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'instagram':
        return Instagram;
      case 'youtube':
        return Youtube;
      case 'twitter':
        return Twitter;
      default:
        return Instagram;
    }
  };

  return (
    <section className="section-padding theme-transition">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Our Talent Roster
          </h2>
          <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
            Meet our exceptional roster of influencers and content creators who are 
            shaping the digital landscape and driving authentic brand connections.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {rostersToShow.map((talent, index) => {
            const PlatformIcon = getSocialIcon(talent.platform);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center mb-4">
                      <div className="w-20 h-20 rounded-full bg-secondary" />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                        <PlatformIcon className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2">{talent.name}</h3>
                  <p className="text-primary font-medium mb-1">{talent.category}</p>
                  <p className="text-2xl font-bold gradient-text mb-3">{talent.followers}</p>
                  <p className="text-foreground/60 text-sm mb-6">{talent.bio}</p>

                  <div className="flex justify-center space-x-3">
                    {talent.socialLinks?.instagram && (
                      <a
                        href={talent.socialLinks.instagram}
                        className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors theme-transition"
                      >
                        <Instagram className="w-4 h-4" />
                      </a>
                    )}
                    {talent.socialLinks?.youtube && (
                      <a
                        href={talent.socialLinks.youtube}
                        className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors theme-transition"
                      >
                        <Youtube className="w-4 h-4" />
                      </a>
                    )}
                    {talent.socialLinks?.twitter && (
                      <a
                        href={talent.socialLinks.twitter}
                        className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors theme-transition"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button size="lg" asChild>
            <Link href="/rosters">
              View All Talent
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}