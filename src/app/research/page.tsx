import { SectionHeading } from "@/components/ui/SectionHeading";
import { Lightbulb, Rocket, Target } from "lucide-react";

export default function ResearchPage() {
  return (
    <div className="flex flex-col w-full min-h-screen pb-24">
      <div className="pt-32 pb-20 relative overflow-hidden bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Innovation & Research</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pushing the boundaries of what's possible. Our research labs are dedicated to exploring next-generation technologies.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-card border border-border rounded-2xl">
            <Lightbulb className="w-8 h-8 text-accent mb-6" />
            <h3 className="text-xl font-heading font-bold mb-4">Applied AI</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Researching new methodologies in neural network architectures, reinforcement learning, and autonomous agents for enterprise applications.
            </p>
          </div>
          <div className="p-8 bg-card border border-border rounded-2xl">
            <Target className="w-8 h-8 text-accent mb-6" />
            <h3 className="text-xl font-heading font-bold mb-4">Quantum Algorithms</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Exploring quantum-safe cryptography and quantum optimization algorithms for complex financial and logistical challenges.
            </p>
          </div>
          <div className="p-8 bg-card border border-border rounded-2xl">
            <Rocket className="w-8 h-8 text-accent mb-6" />
            <h3 className="text-xl font-heading font-bold mb-4">Distributed Systems</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Developing novel consensus mechanisms and highly scalable peer-to-peer architectures for data resilience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
