import * as React from "react";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand & Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-accent text-white flex items-center justify-center font-heading font-bold text-xl">
                N
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight">
                Nextify<span className="text-accent">.</span>
              </span>
            </Link>
            <p className="text-muted-foreground mt-4 text-sm leading-relaxed max-w-xs">
              Building the future through technology, intelligence, and innovation. We deliver cutting-edge solutions for enterprise clients worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Solutions", href: "/solutions" },
                { name: "Research", href: "/research" },
                { name: "Careers", href: "/careers" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Areas */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Expertise</h3>
            <ul className="space-y-3">
              {[
                "Software Engineering",
                "Artificial Intelligence",
                "Data Science",
                "Quantitative Finance",
                "Technology Consulting",
              ].map((area) => (
                <li key={area}>
                  <span className="text-muted-foreground text-sm flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                    {area}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-muted-foreground text-sm">
                <MapPin className="h-5 w-5 mr-3 text-accent flex-shrink-0" />
                <span>
                  100 Innovation Drive
                  <br />
                  Suite 400
                  <br />
                  San Francisco, CA 94105
                </span>
              </li>
              <li className="flex items-center text-muted-foreground text-sm">
                <Phone className="h-5 w-5 mr-3 text-accent flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center text-muted-foreground text-sm">
                <Mail className="h-5 w-5 mr-3 text-accent flex-shrink-0" />
                <a href="mailto:contact@nextify.tech" className="hover:text-accent transition-colors">
                  contact@nextify.tech
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Nextify Technologies. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
