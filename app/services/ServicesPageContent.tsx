"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { 
  Megaphone, 
  Users, 
  Share2, 
  Zap, 
  Star,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Service } from "@/types";

const iconMap = {
  megaphone: Megaphone,
  users: Users,
  share2: Share2,
  zap: Zap,
  star: Star,
};

export default function ServicesPageContent() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
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
              Our Services
            </h1>
            <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
              We offer comprehensive marketing solutions designed to elevate your brand 
              and drive measurable results across all digital channels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Megaphone;
              
              return (
                <motion.div
                  key={service._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full p-8">
                    <div className="flex items-start mb-6">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mr-6 flex-shrink-0">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                        <p className="text-foreground/60 text-lg">{service.description}</p>
                      </div>
                    </div>
                    
                    {service.features && service.features.length > 0 && (
                      <div className="mb-8">
                        <h4 className="font-semibold mb-4 text-lg">What's Included:</h4>
                        <ul className="space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-foreground/70">
                              <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <Button className="w-full group">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {services.length === 0 && (
            <div className="text-center py-16">
              <p className="text-foreground/60 text-lg">No services found.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-b from-background to-secondary/10">
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
                Ready to Get Started?
              </h2>
              <p className="text-xl text-foreground/60 mb-8">
                Let's discuss how our services can help transform your brand and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/book-call">Book a Consultation</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}