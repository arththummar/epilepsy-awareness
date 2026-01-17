import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Epilepsy" },
    { href: "/seizure-types", label: "Seizure Types" },
    { href: "/first-aid", label: "First Aid" },
    { href: "/resources", label: "Resources" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/">
            <a className="flex items-center space-x-2">
              <span className="text-2xl font-bold font-serif text-primary">EpilepsyAware</span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className={cn(
                    "transition-colors hover:text-primary",
                    location === item.href ? "text-primary font-bold" : "text-foreground/60"
                  )}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <Button variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
              Donate
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background p-4 space-y-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className={cn(
                    "block py-2 text-base font-medium transition-colors hover:text-primary",
                    location === item.href ? "text-primary font-bold" : "text-foreground/60"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
              Donate
            </Button>
          </div>
        )}
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="border-t bg-muted/30 py-12">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-serif text-primary">EpilepsyAware</h3>
            <p className="text-sm text-muted-foreground">
              Dedicated to increasing awareness and providing support for those affected by epilepsy.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about">About Epilepsy</Link></li>
              <li><Link href="/seizure-types">Seizure Types</Link></li>
              <li><Link href="/first-aid">First Aid</Link></li>
              <li><Link href="/resources">Resources</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Volunteer</a></li>
              <li><a href="#" className="hover:text-primary">Donate</a></li>
              <li><a href="#" className="hover:text-primary">Events</a></li>
              <li><a href="#" className="hover:text-primary">Share Your Story</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-sm text-muted-foreground">
              1-800-EPILEPSY<br />
              info@epilepsyaware.org
            </p>
            <div className="mt-4 flex space-x-4">
              {/* Social icons placeholders */}
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary">F</div>
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary">T</div>
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary">I</div>
            </div>
          </div>
        </div>
        <div className="container mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          © 2026 EpilepsyAware. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
