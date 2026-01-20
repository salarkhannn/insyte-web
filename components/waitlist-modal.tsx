"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { X } from "@phosphor-icons/react";

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

type WaitlistContextType = {
  isOpen: boolean;
  hasJoined: boolean;
  openModal: () => void;
  closeModal: () => void;
  markAsJoined: () => void;
};

const WaitlistContext = createContext<WaitlistContextType | null>(null);

export function useWaitlist() {
  const context = useContext(WaitlistContext);
  if (!context) {
    throw new Error("useWaitlist must be used within WaitlistProvider");
  }
  return context;
}

export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasJoined, setHasJoined] = useState(false);

  return (
    <WaitlistContext.Provider
      value={{
        isOpen,
        hasJoined,
        openModal: () => setIsOpen(true),
        closeModal: () => setIsOpen(false),
        markAsJoined: () => setHasJoined(true),
      }}
    >
      {children}
      <WaitlistModal />
    </WaitlistContext.Provider>
  );
}

function WaitlistModal() {
  const { isOpen, hasJoined, closeModal, markAsJoined } = useWaitlist();
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !role) return;

    setStatus("submitting");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, role }),
      });

      if (response.ok) {
        markAsJoined();
        setEmail("");
        setRole("");
        setStatus("idle");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-md bg-surface border border-primary/10 rounded-2xl p-8 shadow-2xl">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-primary/5 text-secondary hover:text-primary transition-colors"
          aria-label="Close"
        >
          <X weight="bold" size={18} />
        </button>

        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-signal animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-secondary">
              Pre-Launch Access
            </span>
          </div>
          <h2 className="text-2xl font-serif text-primary mb-2">
            Join the Waitlist
          </h2>
          <p className="text-sm text-secondary">
            Get early access and influence feature priorities.
          </p>
        </div>

        {hasJoined ? (
          <div className="text-center py-8">
            <div className="w-12 h-12 rounded-full bg-signal/10 flex items-center justify-center mx-auto mb-4">
              <div className="w-4 h-4 rounded-full bg-signal shadow-[0_0_12px_var(--signal)]" />
            </div>
            <p className="text-primary font-medium mb-2">You&apos;re on the list!</p>
            <p className="text-sm text-secondary">We&apos;ll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                aria-label="Email address"
                className="w-full h-12 px-4 rounded-xl bg-chassis border border-primary/10 text-primary placeholder:text-tertiary focus:outline-none focus:ring-2 focus:ring-signal/30 focus:border-signal/50 font-sans"
              />
            </div>
            <div>
              <select
                name="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
                aria-label="Your role"
                className="w-full h-12 px-4 rounded-xl bg-chassis border border-primary/10 text-primary focus:outline-none focus:ring-2 focus:ring-signal/30 focus:border-signal/50 font-sans appearance-none cursor-pointer"
              >
                <option value="" disabled>Select your role</option>
                {roles.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>
            <Button
              type="submit"
              className="w-full h-12"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Joining..." : "Join Waitlist"}
            </Button>
            {status === "error" && (
              <p className="text-sm text-red-500 text-center">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
