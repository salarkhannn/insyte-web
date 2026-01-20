import Link from "next/link";
import Image from "next/image";
import { GithubLogo } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  const links = {
    company: [
      { label: "Blog", href: "/blog" },
      { label: "Changelog", href: "/changelog" },
    ]
  };

  return (
    <footer className="relative bg-inset border-t border-primary/5 pt-16 pb-8">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image 
                src="/logo-dark.svg" 
                alt="Insyte" 
                width={482} 
                height={163} 
                className="h-7 w-auto dark:hidden"
              />
              <Image 
                src="/logo-light.svg" 
                alt="Insyte" 
                width={482} 
                height={163} 
                className="h-7 w-auto hidden dark:block"
              />
</div>
            <p className="text-sm text-secondary leading-relaxed max-w-xs">
              Next-generation analytics for professionals. Built for speed, depth, and clarity.
            </p>
            <div className="flex gap-4 mt-6">
              <a 
                href="https://github.com/salarkhannn/insyte" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-surface border border-primary/5 flex items-center justify-center text-secondary hover:text-primary hover:border-primary/20 transition-colors cursor-pointer"
                aria-label="GitHub"
              >
                <GithubLogo weight="fill" size={16} />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="col-span-1 flex justify-start md:justify-end">
            <div>
              <h3 className="font-mono text-xs font-semibold text-primary uppercase tracking-wider mb-4">Company</h3>
              <ul className="space-y-3">
                {links.company.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-secondary hover:text-signal transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-tertiary font-mono">
            © {new Date().getFullYear()} Insyte. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-xs text-secondary font-medium">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
