"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

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

            {submitted ? (
              <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-surface border border-signal/20">
                <div className="w-3 h-3 rounded-full bg-signal shadow-[0_0_8px_var(--signal)]" />
                <span className="text-primary font-sans">
                  You&apos;re on the list. We&apos;ll be in touch.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  aria-label="Email address for waitlist"
                  className="flex-1 h-12 px-4 rounded-xl bg-surface border border-primary/10 text-primary placeholder:text-tertiary focus:outline-none focus:ring-2 focus:ring-signal/30 focus:border-signal/50 font-sans"
                />
                <Button type="submit" className="h-12 px-6 whitespace-nowrap">
                  Join Waitlist
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
