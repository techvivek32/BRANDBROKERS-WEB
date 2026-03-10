"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function TrustedBrands() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    // Fetch clients from API
    fetch("/api/clients")
      .then((res) => res.json())
      .then((data) => setClients(data))
      .catch((err) => console.error(err));
  }, []);

  // Fallback brands for demo
  const fallbackBrands = [
    { name: "Nike", logo: "/logos/nike.svg" },
    { name: "Apple", logo: "/logos/apple.svg" },
    { name: "Google", logo: "/logos/google.svg" },
    { name: "Microsoft", logo: "/logos/microsoft.svg" },
    { name: "Amazon", logo: "/logos/amazon.svg" },
    { name: "Tesla", logo: "/logos/tesla.svg" },
  ];

  const brandsToShow = clients.length > 0 ? clients : fallbackBrands;

  return (
    <section className="section-padding bg-background border-t border-border theme-transition pt-32">
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
            className="inline-block"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Trusted by Industry Leaders
            </h2>
            <div className="w-24 h-px bg-foreground mx-auto mb-6" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-foreground/60 max-w-2xl mx-auto text-lg"
          >
            We've partnered with some of the world's most innovative brands to drive their success
          </motion.p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: [0, -100 * brandsToShow.length] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex space-x-16 items-center"
          >
            {[...brandsToShow, ...brandsToShow].map((brand, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300"
              >
                <div className="w-24 h-12 bg-foreground/10 rounded-lg flex items-center justify-center border border-border">
                  <span className="text-foreground text-sm font-medium">{brand.name}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {[
            { number: "150+", label: "Brands Served" },
            { number: "500+", label: "Campaigns Launched" },
            { number: "$50M+", label: "Revenue Generated" },
            { number: "95%", label: "Client Retention" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {stat.number}
              </div>
              <div className="text-foreground/60 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}