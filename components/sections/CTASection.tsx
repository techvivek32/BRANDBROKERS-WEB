"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function CTASection() {
  return (
    <section className="section-padding bg-background theme-transition">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto"
        >
          <div className="glass rounded-3xl p-12 md:p-20 relative overflow-hidden border border-border">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 via-foreground/10 to-foreground/5" />
            
            <div className="relative z-10">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-bold mb-8 text-foreground"
              >
                Ready to Transform Your Brand?
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                Let's discuss how we can elevate your marketing strategy and drive 
                exceptional results for your business.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="px-10 py-5 text-lg font-semibold shadow-lg" asChild>
                    <Link href="/book-call">
                      <Calendar className="w-6 h-6 mr-3" />
                      Book a Strategy Call
                    </Link>
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" size="lg" className="px-10 py-5 text-lg font-semibold" asChild>
                    <Link href="/contact">
                      Get in Touch
                      <ArrowRight className="w-6 h-6 ml-3" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="mt-10 text-sm text-foreground/60"
              >
                <p>Free 30-minute consultation • No commitment required</p>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <motion.div
              className="absolute top-10 right-10 w-20 h-20 border border-foreground/10 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute bottom-10 left-10 w-16 h-16 border border-foreground/10 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}