"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Sun, Moon, GithubLogo, List, X } from "@phosphor-icons/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-3 sm:px-4">
      <header className={cn(
        "pointer-events-auto relative w-full max-w-2xl h-12 rounded-full flex items-center justify-between gap-2 sm:gap-3 md:gap-4",
        "px-2 sm:px-3 md:px-4",
        "border border-black/5 dark:border-white/5 shadow-sm backdrop-blur-md transition-all duration-300",
        "bg-chassis/80", 
        "text-primary"
      )}>
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0 min-w-0">
          <Image 
            src="/logo-dark.svg" 
            alt="Insyte" 
            width={482} 
            height={163} 
            className="h-5 w-auto sm:h-6 dark:hidden"
            priority
          />
          <Image 
            src="/logo-light.svg" 
            alt="Insyte" 
            width={482} 
            height={163} 
            className="h-5 w-auto sm:h-6 hidden dark:block"
            priority
          />
</Link>

        {/* Spacer for pushing controls right */}
        <div className="flex-1 min-w-2"></div>

        {/* Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 flex-shrink-0">
              <Link
                href="/blog"
                className="text-xs font-medium px-3 xl:px-4 py-1.5 rounded-full transition-all hover:bg-black/5 dark:hover:bg-white/10 text-primary hover:text-primary uppercase tracking-wider font-mono"
              >
                Blog
              </Link>
              <Link
                href="/changelog"
                className="text-xs font-medium px-3 xl:px-4 py-1.5 rounded-full transition-all hover:bg-black/5 dark:hover:bg-white/10 text-primary hover:text-primary uppercase tracking-wider font-mono"
              >
                Changelog
              </Link>
            </nav>

            <div className="h-4 w-[1px] bg-black/10 dark:bg-white/10 hidden lg:block flex-shrink-0"></div>

            {/* Theme Toggle */}
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-secondary hover:text-primary flex-shrink-0"
              aria-label="Toggle Theme"
            >
              {mounted && theme === 'dark' ? (
                <Moon weight="bold" size={16} />
              ) : (
                <Sun weight="bold" size={16} />
              )}
            </button>
            
            <a 
              href="https://github.com/salarkhannn/insyte"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 hidden lg:flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-secondary hover:text-primary flex-shrink-0"
              aria-label="GitHub Repository"
            >
              <GithubLogo weight="bold" size={16} />
            </a>

          <Button 
            variant="default"
            className="h-9 px-3 sm:px-4 lg:px-6 font-mono text-xs rounded-full whitespace-nowrap flex-shrink-0"
          >
            Join Waitlist
          </Button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-secondary hover:text-primary flex-shrink-0"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X weight="bold" size={16} />
            ) : (
              <List weight="bold" size={16} />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-14 left-3 right-3 sm:left-4 sm:right-4 p-2 pointer-events-none lg:hidden flex justify-center">
            <div className="pointer-events-auto w-full max-w-[200px] bg-surface/90 backdrop-blur-md border border-primary/5 shadow-xl rounded-xl p-2 flex flex-col gap-1">
              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-medium px-4 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 text-secondary hover:text-primary uppercase tracking-wider font-mono text-center"
              >
                Blog
              </Link>
              <Link
                href="/changelog"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-medium px-4 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 text-secondary hover:text-primary uppercase tracking-wider font-mono text-center"
              >
                Changelog
              </Link>
              <div className="h-[1px] bg-primary/5 mx-2 my-1" />
              <a 
                href="https://github.com/salarkhannn/insyte"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-medium px-4 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 text-secondary hover:text-primary uppercase tracking-wider font-mono text-center flex items-center justify-center gap-2"
              >
                <GithubLogo weight="bold" size={14} />
                GitHub
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
