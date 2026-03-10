"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Card from "@/components/ui/Card";
import { Linkedin, Mail } from "lucide-react";
import { TeamMember } from "@/types";

export default function TeamPageContent() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/team")
      .then((res) => res.json())
      .then((data) => {
        setTeam(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

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
      <section className="section-padding bg-gradient-to-b from-background to-secondary/10 pt-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Meet Our Team
            </h1>
            <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
              Our diverse team of marketing experts, creatives, and strategists are 
              passionate about driving your brand's success in the digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center mb-6">
                    <div className="w-28 h-28 rounded-full bg-gray-600" />
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium text-lg mb-4">{member.role}</p>
                  
                  {member.bio && (
                    <p className="text-foreground/60 mb-6">{member.bio}</p>
                  )}

                  <div className="flex justify-center space-x-4">
                    <a
                      href={`mailto:${member.email}`}
                      className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors theme-transition"
                    >
                      <Mail className="w-6 h-6" />
                    </a>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors theme-transition"
                      >
                        <Linkedin className="w-6 h-6" />
                      </a>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {team.length === 0 && (
            <div className="text-center py-16">
              <p className="text-foreground/60 text-lg">No team members found.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}