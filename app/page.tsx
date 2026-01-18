import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { FeaturesGrid } from "@/components/sections/features-grid";
import { ComparisonTable } from "@/components/sections/comparison-table";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col font-sans antialiased text-primary selection:bg-signal selection:text-white">
      <Navbar />
      <Hero />
      <FeaturesGrid />
      <CTASection />
      <Footer />
    </main>
  );
}
