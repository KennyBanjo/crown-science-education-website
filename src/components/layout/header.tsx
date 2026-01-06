"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Approach", href: "/#method" },
  { name: "Stages", href: "/#journey" },
  { name: "Progress", href: "/#progress" },
  { name: "Tutor", href: "/#tutor" },
  { name: "Testimonials", href: "/#testimonials" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-200",
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="page-container">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/crown-logo.png"
                alt="Crown Science Education"
                width={250}
                height={80}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex md:items-center md:space-x-6">
            <Button size="sm" variant="outline" asChild>
              <Link href="/consultation">Book a consultation</Link>
            </Button>
            <Link
              href="/portal"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Student portal login
            </Link>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-foreground/5 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ring"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 pb-4 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base text-muted-foreground hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-4 space-y-2 px-3">
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/consultation">Book a consultation</Link>
                </Button>
                <Link
                  href="/portal"
                  className="block text-center text-sm text-muted-foreground hover:text-foreground"
                >
                  Student portal login
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
