import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";

export default function CareersPage() {
  const positions = [
    { title: "Senior Software Engineer", team: "Engineering", location: "San Francisco / Remote" },
    { title: "Machine Learning Researcher", team: "AI Labs", location: "New York / Remote" },
    { title: "Quantitative Developer", team: "Finance", location: "London / Remote" },
    { title: "Data Engineering Lead", team: "Data Science", location: "San Francisco / Remote" },
    { title: "Software Engineering Intern", team: "Engineering", location: "San Francisco / Remote" },
    { title: "Machine Learning Intern", team: "AI Labs", location: "New York / Remote" },
    { title: "Data Science Intern", team: "Data Science", location: "San Francisco / Remote" },
    { title: "Product Design Intern", team: "Design", location: "Remote" },
    { title: "Product Management Intern", team: "Product", location: "San Francisco / Remote" },
    { title: "Frontend Engineering Intern", team: "Engineering", location: "Remote" },
    { title: "Backend Engineering Intern", team: "Engineering", location: "San Francisco / Remote" },
    { title: "Marketing Intern", team: "Marketing", location: "New York / Remote" },
    { title: "Finance Intern", team: "Finance", location: "London / Remote" },
  ];

  return (
    <div className="flex flex-col w-full min-h-screen pb-24">
      <div className="pt-32 pb-20 relative overflow-hidden bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border text-sm font-medium mb-8">
            <Terminal className="w-4 h-4 text-accent" />
            <span className="text-foreground">We are hiring</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Build the Future With Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join a team of exceptional talent working on the most challenging problems in technology and research.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 w-full">
        <SectionHeading title="Open Positions" />
        <div className="space-y-4">
          {positions.map((pos, idx) => (
            <Link 
              href={`/careers/${idx}`} 
              key={idx}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-xl border border-border bg-card hover:border-accent/50 hover:shadow-lg transition-all group"
            >
              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground group-hover:text-accent transition-colors">{pos.title}</h3>
                <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                  <span>{pos.team}</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span>{pos.location}</span>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors mt-4 sm:mt-0" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
