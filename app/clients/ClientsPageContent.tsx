"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { ExternalLink, Building2 } from "lucide-react";
import { Client } from "@/types";

export default function ClientsPageContent() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/clients")
      .then((res) => res.json())
      .then((data) => {
        setClients(data);
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
              Our Clients
            </h1>
            <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
              We're proud to partner with innovative brands across industries, 
              helping them achieve remarkable growth and success in the digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Card className="aspect-square flex items-center justify-center p-6 hover:scale-105 transition-transform duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center">
                      <Building2 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-sm">{client.name}</h3>
                    {client.website && (
                      <a
                        href={client.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs text-primary hover:text-blue-300 transition-colors mt-2"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Visit
                      </a>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {clients.length === 0 && (
            <div className="text-center py-16">
              <Building2 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">No clients found.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-b from-background to-secondary/10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Partnership Success
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our client partnerships have resulted in remarkable achievements across all metrics.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Client Retention Rate", value: "95%" },
              { label: "Average Campaign ROI", value: "340%" },
              { label: "Years of Experience", value: "10+" },
              { label: "Industries Served", value: "25+" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-6">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="max-w-4xl mx-auto p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                Ready to Join Our Success Stories?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how we can help your brand achieve similar results 
                and become our next success story.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="/book-call">Schedule a Call</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/case-studies">View Case Studies</a>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}