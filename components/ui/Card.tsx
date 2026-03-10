"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      transition={{ duration: 0.3 }}
      className={cn(
        "glass rounded-2xl p-6 transition-all duration-300 bg-secondary/50 border-border theme-transition",
        hover && "hover:shadow-xl hover:shadow-foreground/5 hover:border-border/60",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
