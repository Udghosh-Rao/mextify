"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full min-h-screen pb-24">
      <div className="bg-secondary pt-32 pb-20 relative overflow-hidden border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our team to discuss how we can help accelerate your technology initiatives.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <SectionHeading title="Let's Build Together" subtitle="Fill out the form and our team will get back to you within 24 hours." />
            
            <div className="space-y-8 mt-12">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mr-4 text-accent">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Global Headquarters</h4>
                  <p className="text-muted-foreground">100 Innovation Drive, Suite 400<br />San Francisco, CA 94105</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mr-4 text-accent">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Email Us</h4>
                  <p className="text-muted-foreground">contact@nextify.tech<br />careers@nextify.tech</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form Mockup */}
          <div className="bg-card border border-border p-8 rounded-2xl shadow-xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">First Name</label>
                  <input type="text" className="w-full bg-background border border-border rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Last Name</label>
                  <input type="text" className="w-full bg-background border border-border rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Work Email</label>
                <input type="email" className="w-full bg-background border border-border rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent" placeholder="john@company.com" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <textarea rows={4} className="w-full bg-background border border-border rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent" placeholder="How can we help you?"></textarea>
              </div>
              
              <button type="submit" className="w-full h-12 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
