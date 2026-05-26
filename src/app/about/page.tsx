import { SectionHeading } from "@/components/ui/SectionHeading";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full min-h-screen pb-24">
      {/* Header */}
      <div className="bg-primary pt-32 pb-20 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">About Nextify</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl">
            We are a global team of engineers, researchers, and innovators dedicated to solving complex problems through technology.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <SectionHeading title="Our Mission" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              To deliver intelligent, scalable, and secure technology solutions that drive enterprise value and empower organizations to thrive in an increasingly complex digital landscape.
            </p>
          </div>
          <div>
            <SectionHeading title="Our Vision" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              To be the premier global technology and research partner, recognized for setting industry standards in software engineering, artificial intelligence, and quantitative systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
