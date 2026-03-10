"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Instagram, Youtube, Twitter, Users, Filter } from "lucide-react";
import { RosterMember } from "@/types";

export default function RostersPageContent() {
  const [rosters, setRosters] = useState<RosterMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "Lifestyle", "Tech", "Beauty", "Fitness", "Food", "Gaming"];

  useEffect(() => {
    const categoryParam = selectedCategory === "all" ? "" : `?category=${selectedCategory}`;
    fetch(`/api/rosters${categoryParam}`)
      .then((res) => res.json())
      .then((data) => {
        setRosters(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [selectedCategory]);

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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-background to-secondary/10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Our Talent Roster
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet our exceptional roster of influencers and content creators who are 
              shaping the digital landscape and driving authentic brand connections.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <div className="flex items-center mr-4">
              <Filter className="w-5 h-5 text-gray-400 mr-2" />
              <span className="text-gray-400">Filter by category:</span>
            </div>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "primary" : "ghost"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category === "all" ? "All" : category}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Talent Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {rosters.map((talent, index) => {
              const PlatformIcon = getSocialIcon(talent.platform);
              
              return (
                <motion.div
                  key={talent._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="text-center h-full">
                    <div className="relative mb-6">
                      <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center mb-4">
                        <div className="w-20 h-20 rounded-full bg-gray-600" />
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
                    
                    {talent.bio && (
                      <p className="text-gray-400 text-sm mb-6">{talent.bio}</p>
                    )}

                    <div className="flex justify-center space-x-3 mb-6">
                      {talent.socialLinks?.instagram && (
                        <a
                          href={talent.socialLinks.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                        >
                          <Instagram className="w-4 h-4" />
                        </a>
                      )}
                      {talent.socialLinks?.youtube && (
                        <a
                          href={talent.socialLinks.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                        >
                          <Youtube className="w-4 h-4" />
                        </a>
                      )}
                      {talent.socialLinks?.twitter && (
                        <a
                          href={talent.socialLinks.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    <Button variant="outline" size="sm" className="w-full">
                      View Profile
                    </Button>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {rosters.length === 0 && (
            <div className="text-center py-16">
              <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">
                {selectedCategory === "all" 
                  ? "No talent found." 
                  : `No talent found in ${selectedCategory} category.`
                }
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}