import { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact Us | Crown Science Education",
  description:
    "Get in touch with Crown Science Education. Visit our office in Covent Garden, London, call us, or send an email.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero section */}
      <section className="border-b border-border bg-gradient-to-b from-muted/30 to-background">
        <div className="page-container py-16 sm:py-20">
          <Reveal>
            <p className="eyebrow">Get in Touch</p>
          </Reveal>
          <Reveal>
            <h1 className="mt-4">Contact Us</h1>
          </Reveal>
          <Reveal>
            <p className="mt-4 lead max-w-3xl">
              Have a question about our science tutoring services? We&apos;d
              love to hear from you. Reach out by phone, email, or visit our
              London office.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact details */}
      <section className="section">
        <div className="page-container">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Phone */}
              <Reveal>
                <div className="rounded-md border border-border bg-muted/30 p-6 space-y-3">
                  <p className="text-sm font-medium tracking-wide text-muted-foreground">
                    Phone
                  </p>
                  <a
                    href="tel:+447737571541"
                    className="link-underline text-lg font-medium text-foreground"
                  >
                    +44 7737 571541
                  </a>
                  <p className="text-sm text-muted-foreground">
                    Available Monday to Friday, 9am &ndash; 5pm
                  </p>
                </div>
              </Reveal>

              {/* Email */}
              <Reveal>
                <div className="rounded-md border border-border bg-muted/30 p-6 space-y-3">
                  <p className="text-sm font-medium tracking-wide text-muted-foreground">
                    Email
                  </p>
                  <a
                    href="mailto:taiwoteaching@gmail.com"
                    className="link-underline text-lg font-medium text-foreground"
                  >
                    taiwoteaching@gmail.com
                  </a>
                  <p className="text-sm text-muted-foreground">
                    We aim to respond within 48 hours
                  </p>
                </div>
              </Reveal>

              {/* Office */}
              <Reveal>
                <div className="rounded-md border border-border bg-muted/30 p-6 space-y-3 sm:col-span-2 lg:col-span-1">
                  <p className="text-sm font-medium tracking-wide text-muted-foreground">
                    Office
                  </p>
                  <div className="text-foreground">
                    <p className="text-lg font-medium">
                      Crown Education Hub Ltd
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      71-75 Shelton Street
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Covent Garden
                    </p>
                    <p className="text-sm text-muted-foreground">London</p>
                    <p className="text-sm text-muted-foreground">WC2H 9JQ</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Consultation CTA */}
            <Reveal>
              <div className="mt-12 rounded-md border-2 border-primary/20 bg-primary/5 p-8 text-center space-y-4">
                <h2 className="text-xl sm:text-2xl">
                  Ready to discuss your child&apos;s science education?
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Book a free 25-minute discovery call to learn how Crown
                  Science Education can support your child&apos;s academic
                  goals.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <Button asChild>
                    <Link href="/consultation">Book a consultation</Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
