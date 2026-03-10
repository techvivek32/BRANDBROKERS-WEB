"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        delay: 1.2,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background theme-transition pt-20"
    >
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ y, opacity }}
      >
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--foreground) / 0.1) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--foreground) / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
        
        {/* Moving Gradient */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, hsl(var(--foreground) / 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, hsl(var(--foreground) / 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, hsl(var(--foreground) / 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Mouse-following spotlight */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--foreground) / 0.3) 0%, transparent 50%)`,
          }}
        />
      </motion.div>

      <div className="relative z-10 container-custom text-center">
        <div className="max-w-6xl mx-auto">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 rounded-full border border-border bg-background/50 backdrop-blur-sm mb-12"
          >
            <span className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse" />
            <span className="text-sm text-foreground/80 font-medium">Transforming Brands Since 2014</span>
          </motion.div>

          {/* Main Heading with Staggered Animation */}
          <div className="mb-12 overflow-hidden">
            <motion.h1 
              className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none"
              initial="hidden"
              animate="visible"
            >
              <motion.div 
                variants={textVariants}
                custom={0}
                className="text-foreground"
              >
                BRAND
              </motion.div>
              <motion.div 
                variants={textVariants}
                custom={1}
                className="text-foreground/60"
              >
                BROKERS
              </motion.div>
            </motion.h1>
          </div>

          {/* Animated Line */}
          <motion.div
            className="h-px bg-foreground mb-12 mx-auto max-w-md"
            variants={lineVariants}
            initial="hidden"
            animate="visible"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-xl md:text-2xl text-foreground/70 mb-16 max-w-4xl mx-auto leading-relaxed"
          >
            We craft data-driven marketing strategies that amplify your brand's voice, 
            connect with your audience, and drive exponential growth in the digital landscape.
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-foreground/50 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-2 h-2 bg-foreground rounded-full opacity-60"
        animate={{
          y: [0, -20, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/3 right-20 w-1 h-1 bg-foreground rounded-full opacity-40"
        animate={{
          y: [0, -15, 0],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-foreground rounded-full opacity-50"
        animate={{
          y: [0, -25, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </section>
  );
}