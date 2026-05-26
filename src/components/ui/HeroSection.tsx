"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background min-h-[90vh] flex items-center pt-20 pb-32">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-accent opacity-20 blur-[100px]"></div>
        <div className="absolute right-0 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-primary opacity-10 blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border text-sm font-medium mb-8"
          >
            <Terminal className="w-4 h-4 text-accent" />
            <span className="text-foreground">Innovating at the edge of possibility</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-heading font-bold tracking-tight text-foreground mb-6 leading-tight"
          >
            Building the Future Through{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
              Technology
            </span>
            , Intelligence, and Innovation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Nextify Technologies develops cutting-edge solutions in Software Engineering, Artificial Intelligence, Data Science, Quantitative Finance, and Digital Transformation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/services"
              className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-primary text-primary-foreground font-medium text-base hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 group w-full sm:w-auto"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/careers"
              className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-background text-foreground border border-border font-medium text-base hover:bg-muted transition-colors w-full sm:w-auto"
            >
              Careers
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
