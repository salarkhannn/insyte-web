"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sun, Moon, GithubLogo } from "@phosphor-icons/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <header className={cn(
        "pointer-events-auto h-12 rounded-2xl flex items-center justify-between px-2 pl-4 gap-6",
        "border border-black/5 dark:border-white/5 shadow-sm backdrop-blur-md transition-all duration-300",
        // Floating Navbar Styling: Standard Theme (Light on Light, Dark on Dark)
        "bg-chassis/80", 
        "text-primary"
      )}>
        {/* Logo Area */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center shadow-md">
             <div className="w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
          </div>
          <span className="font-mono text-base font-bold tracking-tight uppercase">
            Insyte
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          <Link
            href="/blog"
            className="text-xs font-medium px-4 py-1.5 rounded-full transition-all hover:bg-black/5 dark:hover:bg-white/10 text-secondary hover:text-primary uppercase tracking-wider font-mono"
          >
            Blog
          </Link>
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-secondary hover:text-primary"
              aria-label="Toggle Theme"
            >
              {mounted && theme === 'dark' ? (
                <Moon weight="bold" size={16} />
              ) : (
                <Sun weight="bold" size={16} />
              )}
            </button>
            
            <div className="h-4 w-[1px] bg-black/10 dark:bg-white/10 mx-1"></div>

            <a 
              href="https://github.com/salarkhannn/insyte"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-secondary hover:text-primary"
              aria-label="GitHub Repository"
            >
              <GithubLogo weight="bold" size={16} />
            </a>

          <Button 
            variant="default"
            className="h-9 px-6 font-mono text-xs rounded-full"
          >
            Join Waitlist
          </Button>
        </div>
      </header>
    </div>
  );
}
