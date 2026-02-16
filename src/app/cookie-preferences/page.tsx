"use client";

import { useState, useEffect } from "react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { useCookieConsent } from "@/lib/consent/use-cookie-consent";
import Link from "next/link";
import { Check, X } from "lucide-react";

export default function CookiePreferencesPage() {
  const { consentStatus, acceptCookies, rejectCookies } = useCookieConsent();
  const [showSuccess, setShowSuccess] = useState(false);
  const [consentTimestamp, setConsentTimestamp] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const timestamp = localStorage.getItem("crown-cookie-consent-timestamp");
      setConsentTimestamp(timestamp);
    }
  }, [consentStatus]);

  const handleAccept = () => {
    acceptCookies();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleReject = () => {
    rejectCookies();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero section */}
      <section className="border-b border-border bg-gradient-to-b from-muted/30 to-background">
        <div className="page-container py-16 sm:py-20">
          <Reveal>
            <p className="eyebrow">Privacy</p>
          </Reveal>
          <Reveal>
            <h1 className="mt-4">Cookie Preferences</h1>
          </Reveal>
          <Reveal>
            <p className="mt-4 lead max-w-3xl">
              Manage how we use cookies on our website.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Content section */}
      <section className="section">
        <div className="page-container">
          <div className="mx-auto max-w-3xl space-y-12">

            {/* Current Status */}
            <Reveal>
              <div className="rounded-md border-2 border-border bg-muted/30 p-6 space-y-4">
                <h2 className="text-xl">Current Settings</h2>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Cookie Consent Status:</p>
                    {consentTimestamp && (
                      <p className="text-sm text-muted-foreground mt-1">
                        Last updated: {new Date(consentTimestamp).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {consentStatus === "accepted" && (
                      <>
                        <Check className="h-5 w-5 text-green-600" />
                        <span className="font-medium text-green-600">Accepted</span>
                      </>
                    )}
                    {consentStatus === "rejected" && (
                      <>
                        <X className="h-5 w-5 text-red-600" />
                        <span className="font-medium text-red-600">Rejected</span>
                      </>
                    )}
                    {consentStatus === "pending" && (
                      <span className="font-medium text-muted-foreground">Not Set</span>
                    )}
                  </div>
                </div>

                {showSuccess && (
                  <div className="rounded-md bg-green-50 dark:bg-green-900/20 p-4 border border-green-200 dark:border-green-800">
                    <p className="text-sm text-green-800 dark:text-green-200">
                      ✓ Your preferences have been saved successfully.
                    </p>
                  </div>
                )}
              </div>
            </Reveal>

            {/* Essential Cookies */}
            <Reveal>
              <div className="space-y-4">
                <h2>Essential Cookies</h2>
                <div className="rounded-md border border-border bg-card p-6 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <p className="font-medium text-foreground">Necessary</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        These cookies are essential for the website to function properly. They store your cookie preferences and ensure security.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>Always Active</span>
                    </div>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p><strong>Cookies used:</strong></p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li><code className="text-xs bg-muted px-1 py-0.5 rounded">crown-cookie-consent</code> - Stores your cookie preference</li>
                      <li><code className="text-xs bg-muted px-1 py-0.5 rounded">crown-cookie-consent-timestamp</code> - Records when you made your choice</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Analytics Cookies */}
            <Reveal>
              <div className="space-y-4">
                <h2>Analytics Cookies</h2>
                <div className="rounded-md border border-border bg-card p-6 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <p className="font-medium text-foreground">Performance & Analytics</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        These cookies help us understand how visitors use our website so we can improve our educational services and content.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {consentStatus === "accepted" ? (
                        <span className="text-sm font-medium text-green-600">Enabled</span>
                      ) : (
                        <span className="text-sm font-medium text-red-600">Disabled</span>
                      )}
                    </div>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p><strong>What we collect:</strong></p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Pages visited and time spent on pages</li>
                      <li>How you arrived at our website (referral source)</li>
                      <li>Device type and browser information</li>
                      <li>Anonymized location data (country/city level only)</li>
                    </ul>
                    <p className="mt-3"><strong>Provider:</strong> Google Analytics</p>
                    <p className="mt-1">
                      <strong>Privacy:</strong> IP addresses are anonymized. Data is not shared with Google for advertising purposes.
                    </p>
                    <p className="mt-1"><strong>Cookies used:</strong></p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li><code className="text-xs bg-muted px-1 py-0.5 rounded">_ga</code> - Distinguishes users (expires: 2 years)</li>
                      <li><code className="text-xs bg-muted px-1 py-0.5 rounded">_gid</code> - Distinguishes users (expires: 24 hours)</li>
                      <li><code className="text-xs bg-muted px-1 py-0.5 rounded">_gat</code> - Throttles request rate (expires: 1 minute)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Update Preferences */}
            <Reveal>
              <div className="space-y-4">
                <h2>Update Your Preferences</h2>
                <div className="rounded-md border-2 border-primary/20 bg-primary/5 p-6 space-y-4">
                  <p className="text-sm text-muted-foreground">
                    You can change your cookie preferences at any time. Your choice will be saved and applied immediately.
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button
                      onClick={handleAccept}
                      className="flex-1"
                      disabled={consentStatus === "accepted"}
                    >
                      {consentStatus === "accepted" ? "✓ Cookies Accepted" : "Accept All Cookies"}
                    </Button>
                    <Button
                      variant="outline"
                      onClick={handleReject}
                      className="flex-1"
                      disabled={consentStatus === "rejected"}
                    >
                      {consentStatus === "rejected" ? "✓ Cookies Rejected" : "Reject Analytics Cookies"}
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground text-center">
                    Essential cookies will always remain active to ensure the website functions properly.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* More Information */}
            <Reveal>
              <div className="space-y-4">
                <h2>More Information</h2>
                <div className="rounded-md border border-border bg-card p-6 space-y-3">
                  <p className="text-sm text-muted-foreground">
                    For detailed information about how we handle your personal data, please read our{" "}
                    <Link href="/privacy" className="link-underline text-foreground">
                      Privacy Policy
                    </Link>.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    If you have questions about our use of cookies, please{" "}
                    <a href="mailto:taiwoteaching@gmail.com" className="link-underline text-foreground">
                      contact us
                    </a>.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Back to home */}
            <Reveal>
              <div className="text-center pt-4">
                <Link href="/" className="link-underline text-sm text-muted-foreground hover:text-foreground">
                  ← Back to home
                </Link>
              </div>
            </Reveal>

          </div>
        </div>
      </section>
    </main>
  );
}
