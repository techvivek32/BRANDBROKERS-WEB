"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { TrendingUp, Users, DollarSign, BarChart3 } from "lucide-react";

export default function CaseStudiesPageContent() {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/case-studies")
      .then((res) => res.json())
      .then((data) => {
        setCaseStudies(data);
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
      <section className="section-padding bg-gradient-to-b from-background to-secondary/10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Success Stories
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how we've helped brands achieve extraordinary growth through 
              innovative marketing strategies and data-driven campaigns.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { icon: TrendingUp, label: "Average Growth", value: "340%" },
              { icon: Users, label: "Clients Served", value: "150+" },
              { icon: DollarSign, label: "Revenue Generated", value: "$50M+" },
              { icon: BarChart3, label: "Campaigns Launched", value: "500+" },
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="text-center p-6">
                    <IconComponent className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full p-8">
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg mb-6 flex items-center justify-center">
                    <TrendingUp className="w-16 h-16 text-primary" />
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-sm text-primary font-medium mb-2">{study.client}</p>
                    <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                    <p className="text-gray-400 mb-6">{study.description}</p>
                  </div>

                  {study.stats && study.stats.length > 0 && (
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {study.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="text-center">
                          <div className="text-xl font-bold text-primary">{stat.value}</div>
                          <div className="text-xs text-gray-400">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  <Button variant="outline" className="w-full">
                    View Full Case Study
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>

          {caseStudies.length === 0 && (
            <div className="text-center py-16">
              <TrendingUp className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">No case studies found.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}