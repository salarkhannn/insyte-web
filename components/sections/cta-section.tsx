"use client";

import { Button } from "@/components/ui/button";
import { useWaitlist } from "@/components/waitlist-modal";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mgoolqlw";

const roles = [
  "Data Analyst",
  "Business Intelligence Developer",
  "Data Scientist",
  "Product Manager",
  "Software Engineer",
  "Founder / Executive",
  "Student / Researcher",
  "Other",
];

export function CTASection() {
  const { hasJoined, openModal } = useWaitlist();

  return (
    <section className="relative py-24 md:py-32 bg-chassis">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="relative md:p-12 p-8">
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-signal animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-secondary">
                Pre-Launch Access
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif text-primary leading-tight mb-4">
              Join the Waitlist
            </h2>
            
            <p className="text-secondary max-w-xl mx-auto mb-8">
              Insyte is currently in private development. Join the waitlist to get early access, 
              influence feature priorities, and receive launch updates.
            </p>

            {hasJoined ? (
              <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-surface border border-signal/20">
                <div className="w-3 h-3 rounded-full bg-signal shadow-[0_0_8px_var(--signal)]" />
                <span className="text-primary font-sans">
                  You&apos;re on the list. We&apos;ll be in touch.
                </span>
              </div>
            ) : (
              <Button onClick={openModal} className="h-12 px-8">
                Join Waitlist
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
