"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Programs", href: "/programs" },
  { name: "Subjects", href: "/subjects" },
  { name: "Our Tutors", href: "/tutors" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

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
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/crown-logo.png"
                alt="Crown Science Education"
                width={250}
                height={80}
                className="h-16 w-auto"
                priority
              />
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary-600",
                  pathname === item.href
                    ? "text-primary-600"
                    : "text-gray-700"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/apply">Book Consultation</Link>
            </Button>
            <Button size="sm" className="bg-primary-500 hover:bg-primary-600" asChild>
              <Link href="/apply">Apply Now</Link>
            </Button>
            <Link
              href="/portal"
              className="text-sm text-gray-600 hover:text-primary-600"
            >
              Student Portal
            </Link>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
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
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block px-3 py-2 text-base font-medium rounded-md",
                    pathname === item.href
                      ? "bg-primary-50 text-primary-700"
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-4 space-y-2 px-3">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/apply">Book Consultation</Link>
                </Button>
                <Button className="w-full bg-primary-500 hover:bg-primary-600" asChild>
                  <Link href="/apply">Apply Now</Link>
                </Button>
                <Link
                  href="/portal"
                  className="block text-center text-sm text-gray-600 hover:text-primary-600 mt-2"
                >
                  Student Portal Login
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}