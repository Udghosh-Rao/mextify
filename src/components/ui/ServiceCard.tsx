"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  items: string[];
  icon: React.ReactNode;
  delay?: number;
}

export function ServiceCard({ title, items, icon, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group bg-card border border-border rounded-xl p-8 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-accent/5 blur-3xl group-hover:bg-accent/10 transition-colors" />
      
      <div className="w-12 h-12 rounded-lg bg-primary/5 text-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform [&>svg]:w-6 [&>svg]:h-6">
        {icon}
      </div>
      
      <h3 className="text-xl font-heading font-semibold text-foreground mb-4">{title}</h3>
      
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-center text-muted-foreground text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-accent/50 mr-2" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
