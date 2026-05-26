import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Code2, BrainCircuit, Database, LineChart, Briefcase } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full min-h-screen pb-24">
      <div className="bg-secondary pt-32 pb-20 relative overflow-hidden border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-foreground">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions designed for scale, security, and performance.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Software Engineering"
            icon={<Code2 />}
            items={["Web Applications", "Enterprise Software", "Cloud Solutions", "APIs", "System Architecture"]}
            delay={0.1}
          />
          <ServiceCard 
            title="Artificial Intelligence"
            icon={<BrainCircuit />}
            items={["Machine Learning", "Generative AI", "Intelligent Automation", "AI Solutions", "Predictive Systems"]}
            delay={0.2}
          />
          <ServiceCard 
            title="Data Science"
            icon={<Database />}
            items={["Data Engineering", "Analytics", "Visualization", "Business Intelligence", "Predictive Modeling"]}
            delay={0.3}
          />
          <ServiceCard 
            title="Quantitative Finance"
            icon={<LineChart />}
            items={["Financial Analytics", "Quantitative Modeling", "Risk Analysis", "Market Research", "Financial Technology"]}
            delay={0.4}
          />
          <ServiceCard 
            title="Technology Consulting"
            icon={<Briefcase />}
            items={["Digital Transformation", "Strategy Consulting", "Product Development", "Innovation Advisory"]}
            delay={0.5}
          />
        </div>
      </div>
    </div>
  );
}
