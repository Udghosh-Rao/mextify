"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

export function FeatureCard({ title, description, icon, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-colors group"
    >
      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-6 text-foreground group-hover:text-accent group-hover:bg-accent/10 transition-colors [&>svg]:w-6 [&>svg]:h-6">
        {icon}
      </div>
      <h3 className="text-xl font-heading font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
