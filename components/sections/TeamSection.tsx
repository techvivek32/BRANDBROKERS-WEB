"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Card from "@/components/ui/Card";
import { Linkedin, Mail } from "lucide-react";

export default function TeamSection() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch("/api/team")
      .then((res) => res.json())
      .then((data) => setTeam(data))
      .catch((err) => console.error(err));
  }, []);

  // Fallback team for demo
  const fallbackTeam = [
    {
      name: "Jessica Martinez",
      role: "CEO & Founder",
      email: "jessica@brandbrokers.com",
      linkedin: "https://linkedin.com/in/jessicamartinez",
      bio: "Visionary leader with 15+ years in digital marketing and brand strategy.",
      image: "/team-1.jpg",
    },
    {
      name: "Ryan Thompson",
      role: "Creative Director",
      email: "ryan@brandbrokers.com",
      linkedin: "https://linkedin.com/in/ryanthompson",
      bio: "Award-winning creative director specializing in brand identity and campaigns.",
      image: "/team-2.jpg",
    },
    {
      name: "Sophia Chen",
      role: "Head of Strategy",
      email: "sophia@brandbrokers.com",
      linkedin: "https://linkedin.com/in/sophiachen",
      bio: "Data-driven strategist focused on performance marketing and growth.",
      image: "/team-3.jpg",
    },
    {
      name: "Marcus Johnson",
      role: "Talent Manager",
      email: "marcus@brandbrokers.com",
      linkedin: "https://linkedin.com/in/marcusjohnson",
      bio: "Expert in influencer relations and talent development.",
      image: "/team-4.jpg",
    },
  ];

  const teamToShow = team.length > 0 ? team : fallbackTeam;

  return (
    <section className="section-padding bg-gradient-to-b from-background to-secondary/10 theme-transition">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Meet Our Team
          </h2>
          <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
            Our diverse team of marketing experts, creatives, and strategists are 
            passionate about driving your brand's success in the digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamToShow.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-secondary" />
                </div>

                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-foreground/60 text-sm mb-6">{member.bio}</p>

                <div className="flex justify-center space-x-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors theme-transition"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors theme-transition"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}