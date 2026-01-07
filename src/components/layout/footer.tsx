import Link from "next/link";

const footerNavigation = {
  explore: [
    { name: "Teaching method", href: "/#method" },
    { name: "Learning journey", href: "/#journey" },
    { name: "Progress & communication", href: "/#progress" },
    { name: "Tutor", href: "/#tutor" },
    { name: "Testimonials", href: "/#testimonials" },
  ],
  resources: [
    { name: "Book a consultation", href: "/consultation" },
    { name: "Portal login", href: "https://crown-lms.vercel.app/login?t=family" },
    { name: "Contact", href: "/contact" },
  ],
  policies: [
    { name: "Privacy policy", href: "/privacy" },
    { name: "Terms of service", href: "/terms" },
    { name: "Safeguarding", href: "/safeguarding" },
  ],
};

export function Footer() {
  return (
    <footer className="section-divider border-border bg-background">
      <div className="page-container section-tight">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_repeat(3,minmax(0,1fr))]">
          <div className="space-y-4">
            <p className="font-display text-xl">Crown Science Education</p>
            <p className="text-sm text-muted-foreground">
              A single-tutor UK science practice for Year 7 to GCSE, rooted in
              clarity, discipline, and steady progress.
            </p>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>London, United Kingdom</p>
              <p>020 7946 0958</p>
              <p>admissions@crownscience.edu</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-foreground">Explore</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {footerNavigation.explore.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="link-underline hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-foreground">Resources</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {footerNavigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="link-underline hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-foreground">Policies</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {footerNavigation.policies.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="link-underline hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Crown Science Education. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
