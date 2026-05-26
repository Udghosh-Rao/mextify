"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  delay?: number;
}

export function ProjectCard({ title, category, description, delay = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group block relative rounded-2xl overflow-hidden bg-card border border-border"
    >
      <div className="aspect-[4/3] bg-muted relative overflow-hidden">
        {/* Placeholder for project image/graphic */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="w-32 h-32 rounded-full border-4 border-dashed border-primary animate-spin-slow"></div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-xs font-semibold text-accent uppercase tracking-wider mb-2 block">
              {category}
            </span>
            <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-accent transition-colors">
              {title}
            </h3>
          </div>
          <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
