import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { FeaturesGrid } from "@/components/sections/features-grid";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "AI-Powered Desktop Analytics for Data Professionals",
  description:
    "Build Tableau and Power BI-level analytics faster. Insyte offers AI-assisted natural language queries, modern architecture, and desktop-native performance. Join the waitlist for early access.",
  alternates: {
    canonical: "https://useinsyte.vercel.app",
  },
  openGraph: {
    title: "Insyte – AI-Powered Desktop Analytics",
    description:
      "Build Tableau and Power BI-level analytics faster with AI-assisted queries and desktop-native performance.",
    url: "https://useinsyte.vercel.app",
  },
};

export default function Home() {
  return (
    <main
      id="main-content"
      className="min-h-screen relative flex flex-col font-sans antialiased text-primary selection:bg-signal selection:text-white"
    >
      <Navbar />
      <Hero />
      <FeaturesGrid />
      <CTASection />
      <Footer />
    </main>
  );
}
