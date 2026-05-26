import { HeroSection } from "@/components/ui/HeroSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { AnimatedStats } from "@/components/ui/AnimatedStats";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { 
  Code2, 
  BrainCircuit, 
  Database, 
  LineChart, 
  Briefcase, 
  Lightbulb, 
  Rocket, 
  Globe2, 
  Users, 
  ShieldCheck, 
  TrendingUp
} from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />

      {/* About Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="Pioneering the Future of Technology" 
                subtitle="We are a technology-first organization focused on innovation, research, and delivering impactful enterprise solutions."
              />
              <div className="space-y-6 text-muted-foreground text-lg">
                <p>
                  At Nextify Technologies, our mission is to deliver intelligent solutions that solve complex, real-world business challenges. We bridge the gap between cutting-edge research and scalable production systems.
                </p>
                <p>
                  Our vision is to become a globally recognized leader in technology and innovation, setting new standards in software engineering, artificial intelligence, and quantitative finance.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/about" className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors">
                  Learn more about us <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden bg-card border border-border shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5"></div>
              {/* Abstract graphic */}
              <div className="absolute inset-0 flex items-center justify-center">
                <BrainCircuit className="w-48 h-48 text-primary/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Business Areas */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Core Business Areas" 
            subtitle="Comprehensive technology solutions driven by domain expertise and advanced research."
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
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
              title="Data Science & Analytics"
              icon={<Database />}
              items={["Data Engineering", "Analytics", "Visualization", "Business Intelligence", "Predictive Modeling"]}
              delay={0.3}
            />
            <ServiceCard 
              title="Finance & Research"
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
      </section>

      {/* Animated Stats */}
      <AnimatedStats />

      {/* Featured Projects */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <SectionHeading 
              title="Featured Projects" 
              subtitle="Discover how we transform complex challenges into elegant solutions."
            />
            <Link href="/projects" className="hidden md:inline-flex items-center text-sm font-medium text-muted-foreground hover:text-accent transition-colors mb-4">
              View all projects <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
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
          </div>
        </div>
      </section>

      {/* Innovation & Research */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent via-primary to-primary"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Driven by Research & Innovation</h2>
              <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
                Innovation is embedded in our DNA. Our dedicated research labs explore emerging technologies to build the solutions of tomorrow. We invest heavily in experimental projects that push the boundaries of what is possible in AI, data intelligence, and distributed systems.
              </p>
              <Link href="/research" className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-accent text-white font-medium text-base hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20">
                Explore Our Research
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-primary-foreground/10 border border-primary-foreground/20 p-6 rounded-2xl backdrop-blur-sm">
                <Lightbulb className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-semibold mb-2">Experimental Labs</h4>
                <p className="text-sm text-primary-foreground/70">Incubating next-generation technologies.</p>
              </div>
              <div className="bg-primary-foreground/10 border border-primary-foreground/20 p-6 rounded-2xl backdrop-blur-sm translate-y-8">
                <Rocket className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-semibold mb-2">Future Tech</h4>
                <p className="text-sm text-primary-foreground/70">Quantum computing and advanced AI.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Nextify */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Why Nextify" 
            subtitle="We don't just build software; we engineer competitive advantages."
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            <FeatureCard title="Innovation First" description="We prioritize novel approaches to solve complex domain problems." icon={<Lightbulb />} delay={0.1} />
            <FeatureCard title="High Impact Projects" description="Work that transforms industries and creates measurable value." icon={<TrendingUp />} delay={0.2} />
            <FeatureCard title="Research Culture" description="A rigorous, scientific approach to technology development." icon={<BrainCircuit />} delay={0.3} />
            <FeatureCard title="Collaborative Teams" description="Cross-functional experts working seamlessly together." icon={<Users />} delay={0.4} />
            <FeatureCard title="Professional Growth" description="Continuous learning and technical excellence at our core." icon={<ShieldCheck />} delay={0.5} />
            <FeatureCard title="Global Perspective" description="Delivering solutions that operate on a worldwide scale." icon={<Globe2 />} delay={0.6} />
          </div>
        </div>
      </section>

      {/* Careers & Contact CTA */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
            
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 relative z-10">Join the Technology Vanguard</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto relative z-10">
              We are always looking for ambitious Software Engineers, Data Scientists, AI Engineers, and Researchers to join our global team.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <Link href="/careers" className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-primary text-primary-foreground font-medium text-base hover:bg-primary/90 transition-colors shadow-lg">
                View Open Positions
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-background text-foreground border border-border font-medium text-base hover:bg-muted transition-colors">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
