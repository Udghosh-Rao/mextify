"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";

interface StatItemProps {
  value: string;
  label: string;
  delay?: number;
}

function StatItem({ value, label, delay = 0 }: StatItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center justify-center p-6 text-center"
    >
      <div className="text-4xl md:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400 mb-2">
        {value}
      </div>
      <div className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
        {label}
      </div>
    </motion.div>
  );
}

export function AnimatedStats() {
  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "15+", label: "Research Initiatives" },
    { value: "100%", label: "Technology Solutions" },
    { value: "Global", label: "Reach" },
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-primary-foreground/10">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              label={stat.label}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
