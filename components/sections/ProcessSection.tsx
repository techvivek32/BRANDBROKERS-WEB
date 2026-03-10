"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import { Search, Lightbulb, Rocket, BarChart } from "lucide-react";

const processSteps = [
  {
    icon: Search,
    title: "Discovery & Research",
    description: "We dive deep into your brand, audience, and market to understand your unique challenges and opportunities.",
    step: "01",
  },
  {
    icon: Lightbulb,
    title: "Strategy Development",
    description: "Our team crafts a comprehensive marketing strategy tailored to your goals and target audience.",
    step: "02",
  },
  {
    icon: Rocket,
    title: "Campaign Execution",
    description: "We bring your strategy to life with creative campaigns, content creation, and multi-channel activation.",
    step: "03",
  },
  {
    icon: BarChart,
    title: "Optimization & Growth",
    description: "We continuously monitor, analyze, and optimize your campaigns to maximize ROI and drive sustainable growth.",
    step: "04",
  },
];

export default function ProcessSection() {
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
            Our Process
          </h2>
          <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
            We follow a proven methodology that ensures every campaign is strategically 
            planned, expertly executed, and continuously optimized for maximum impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="text-center h-full">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
                      {step.step}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-foreground/60">{step.description}</p>
                </Card>

                {/* Connection line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transform -translate-y-1/2" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}