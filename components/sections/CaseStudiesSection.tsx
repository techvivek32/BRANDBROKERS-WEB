"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";

export default function CaseStudiesSection() {
  const [caseStudies, setCaseStudies] = useState([]);

  useEffect(() => {
    fetch("/api/case-studies?featured=true&limit=3")
      .then((res) => res.json())
      .then((data) => setCaseStudies(data))
      .catch((err) => console.error(err));
  }, []);

  // Fallback case studies for demo
  const fallbackCaseStudies = [
    {
      title: "E-commerce Growth Campaign",
      client: "TechStyle Fashion",
      description: "Transformed a struggling fashion brand into a market leader through strategic influencer partnerships and data-driven social campaigns.",
      stats: [
        { label: "Revenue Growth", value: "+340%" },
        { label: "Social Engagement", value: "+180%" },
        { label: "New Customers", value: "+250%" },
      ],
      images: ["/case-study-1.jpg"],
    },
    {
      title: "B2B Lead Generation",
      client: "CloudTech Solutions",
      description: "Developed a comprehensive digital marketing strategy that generated high-quality leads and increased conversion rates.",
      stats: [
        { label: "Lead Quality", value: "+220%" },
        { label: "Conversion Rate", value: "+85%" },
        { label: "Cost per Lead", value: "-60%" },
      ],
      images: ["/case-study-2.jpg"],
    },
    {
      title: "Brand Awareness Campaign",
      client: "EcoLife Products",
      description: "Built brand recognition from zero to industry leader through authentic storytelling and strategic content marketing.",
      stats: [
        { label: "Brand Awareness", value: "+400%" },
        { label: "Organic Reach", value: "+300%" },
        { label: "Customer Loyalty", value: "+150%" },
      ],
      images: ["/case-study-3.jpg"],
    },
  ];

  const studiesToShow = caseStudies.length > 0 ? caseStudies : fallbackCaseStudies;

  return (
    <section className="section-padding bg-background border-t border-border theme-transition">
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
              Success Stories
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
            Discover how we've helped brands achieve extraordinary growth through 
            innovative marketing strategies and data-driven campaigns.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {studiesToShow.map((study, index) => (
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
              <div className="h-full p-8 bg-secondary/50 backdrop-blur-sm border border-border rounded-2xl hover:border-border/60 transition-all duration-500 theme-transition">
                <div className="aspect-video bg-secondary rounded-lg mb-6 flex items-center justify-center group-hover:bg-secondary/80 transition-colors duration-300 theme-transition">
                  <TrendingUp className="w-12 h-12 text-foreground" />
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-foreground/70 font-medium mb-2">{study.client}</p>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{study.title}</h3>
                  <p className="text-foreground/60 text-sm mb-6">{study.description}</p>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.stats?.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className="text-lg font-bold text-foreground">{stat.value}</div>
                      <div className="text-xs text-foreground/60">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <button className="w-full py-2 px-4 border border-border text-foreground rounded-lg hover:bg-foreground hover:text-background transition-all duration-300 group theme-transition">
                  View Case Study
                  <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button size="lg" asChild>
            <Link href="/case-studies">
              View All Case Studies
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}