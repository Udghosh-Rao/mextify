"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Solutions", href: "/solutions" },
  { name: "Research", href: "/research" },
  { name: "Projects", href: "/projects" },
  { name: "Careers", href: "/careers" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-accent text-white flex items-center justify-center font-heading font-bold text-xl group-hover:scale-105 transition-transform">
                N
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight">
                Nextify<span className="text-accent">.</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-accent relative",
                  pathname === link.href ? "text-accent" : "text-foreground/80"
                )}
              >
                {link.name}
                {pathname === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                    initial={false}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-accent hover:bg-muted focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-3 py-3 rounded-md text-base font-medium flex items-center justify-between",
                    pathname === link.href
                      ? "bg-muted text-accent"
                      : "text-foreground hover:bg-muted"
                  )}
                >
                  {link.name}
                  <ChevronRight className="h-4 w-4 opacity-50" />
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 px-3 py-3 rounded-md text-base font-medium bg-primary text-primary-foreground text-center"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
