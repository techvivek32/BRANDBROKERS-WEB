"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Card from "@/components/ui/Card";
import { 
  Megaphone, 
  Users, 
  Share2, 
  Zap, 
  Star 
} from "lucide-react";

const iconMap = {
  megaphone: Megaphone,
  users: Users,
  share2: Share2,
  zap: Zap,
  star: Star,
};

export default function ServicesSection() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/api/services")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error(err));
  }, []);

  // Fallback services for demo
  const fallbackServices = [
    {
      title: "Digital Marketing",
      description: "Comprehensive digital strategies that drive engagement and conversions across all platforms.",
      features: ["SEO Optimization", "PPC Campaigns", "Content Strategy", "Analytics & Reporting"],
      icon: "megaphone",
    },
    {
      title: "Influencer Marketing",
      description: "Connect with the right influencers to amplify your brand message and reach new audiences.",
      features: ["Influencer Matching", "Campaign Management", "Performance Tracking", "ROI Analysis"],
      icon: "users",
    },
    {
      title: "Social Media Management",
      description: "Build and maintain a strong social presence that engages your community and drives growth.",
      features: ["Content Creation", "Community Management", "Social Strategy", "Brand Monitoring"],
      icon: "share2",
    },
    {
      title: "Marketing Automation",
      description: "Streamline your marketing processes with intelligent automation and personalization.",
      features: ["Email Automation", "Lead Nurturing", "Customer Journeys", "Behavioral Triggers"],
      icon: "zap",
    },
    {
      title: "Talent Management",
      description: "Comprehensive talent representation and career development for digital creators.",
      features: ["Career Development", "Brand Partnerships", "Content Strategy", "Revenue Optimization"],
      icon: "star",
    },
  ];

  const servicesToShow = services.length > 0 ? services : fallbackServices;

  return (
    <section className="section-padding bg-background theme-transition">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Our Services
            </h2>
            <div className="w-24 h-px bg-foreground mx-auto mb-8" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-foreground/60 max-w-3xl mx-auto leading-relaxed"
          >
            We offer comprehensive marketing solutions designed to elevate your brand 
            and drive measurable results across all digital channels.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesToShow.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Megaphone;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="h-full p-8 bg-background/50 backdrop-blur-sm border border-border rounded-2xl hover:border-foreground/30 transition-all duration-500 theme-transition">
                  <motion.div 
                    className="mb-6"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-foreground flex items-center justify-center mb-6 group-hover:bg-foreground/80 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-background" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-foreground/60 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                  
                  <ul className="space-y-3">
                    {service.features?.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: (index * 0.1) + (featureIndex * 0.1) }}
                        viewport={{ once: true }}
                        className="flex items-center text-sm text-foreground/70"
                      >
                        <div className="w-2 h-2 rounded-full bg-foreground mr-3 flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}