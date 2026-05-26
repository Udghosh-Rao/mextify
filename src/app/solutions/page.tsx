import { SectionHeading } from "@/components/ui/SectionHeading";

export default function SolutionsPage() {
  return (
    <div className="flex flex-col w-full min-h-screen pb-24">
      <div className="bg-primary pt-32 pb-20 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Enterprise Solutions</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Scalable, secure, and intelligent solutions engineered for modern enterprises.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <SectionHeading title="Our Core Platforms" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-xl p-8 hover:border-accent/50 transition-colors">
            <h3 className="text-2xl font-heading font-bold mb-4">Nexus AI Platform</h3>
            <p className="text-muted-foreground mb-6">
              A comprehensive generative AI framework that integrates with existing enterprise infrastructure to automate complex workflows and provide actionable predictive insights.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground mb-8">
              <li>• Natural Language Processing</li>
              <li>• Automated Document Analysis</li>
              <li>• Predictive Maintenance</li>
              <li>• Custom LLM Fine-tuning</li>
            </ul>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-8 hover:border-accent/50 transition-colors">
            <h3 className="text-2xl font-heading font-bold mb-4">QuantEdge Infrastructure</h3>
            <p className="text-muted-foreground mb-6">
              High-frequency, low-latency financial architecture designed for institutional trading, risk assessment, and quantitative modeling.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground mb-8">
              <li>• Low-Latency Execution Systems</li>
              <li>• Real-time Risk Analytics</li>
              <li>• Algorithmic Trading Frameworks</li>
              <li>• Market Data Integration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
