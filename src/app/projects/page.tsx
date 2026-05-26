import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col w-full min-h-screen pb-24">
      <div className="bg-secondary pt-32 pb-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Our Work</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of high-impact technology solutions delivered for industry-leading organizations.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            title="Nexus AI Platform"
            category="Artificial Intelligence"
            description="A generative AI enterprise solution for automated document processing and predictive analytics."
            delay={0.1}
          />
          <ProjectCard 
            title="QuantEdge System"
            category="Quantitative Finance"
            description="High-frequency trading infrastructure and risk modeling platform for institutional investors."
            delay={0.2}
          />
          <ProjectCard 
            title="CloudScale Architecture"
            category="Software Engineering"
            description="Distributed microservices architecture supporting millions of concurrent transactions globally."
            delay={0.3}
          />
          <ProjectCard 
            title="Aura Analytics"
            category="Data Science"
            description="Real-time big data processing pipeline for a global logistics provider, optimizing routing efficiency."
            delay={0.4}
          />
          <ProjectCard 
            title="SecureVault API"
            category="Software Engineering"
            description="Bank-grade encryption API platform facilitating secure cross-border financial transactions."
            delay={0.5}
          />
          <ProjectCard 
            title="Predictive Health ML"
            category="Artificial Intelligence"
            description="Machine learning models predicting equipment failure in manufacturing environments."
            delay={0.6}
          />
        </div>
      </div>
    </div>
  );
}
