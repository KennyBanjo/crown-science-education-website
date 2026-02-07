"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useCookieConsent } from "@/lib/consent/use-cookie-consent";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState, useEffect } from "react";

export function CookieConsentBanner() {
  const { consentStatus, acceptCookies, rejectCookies } = useCookieConsent();
  const [isVisible, setIsVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleAccept = () => {
    acceptCookies();
    setIsVisible(false);
  };

  const handleReject = () => {
    rejectCookies();
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  // Don't show if user has already answered or not yet mounted (prevents SSR flash)
  const shouldShow = mounted && consentStatus === "pending" && isVisible;

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur-md shadow-lg"
        >
          <div className="page-container py-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1 space-y-2">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      We value your privacy
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      We use cookies to improve your experience and understand how our website is used.
                      This helps us provide better educational services.{" "}
                      <Link
                        href="/privacy"
                        className="link-underline text-foreground"
                      >
                        Learn more
                      </Link>
                    </p>
                  </div>
                  <button
                    onClick={handleClose}
                    className="rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring sm:hidden"
                    aria-label="Close banner"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleReject}
                  className="w-full sm:w-auto"
                >
                  Reject
                </Button>
                <Button
                  size="sm"
                  onClick={handleAccept}
                  className="w-full sm:w-auto"
                >
                  Accept cookies
                </Button>
                <Link
                  href="/cookie-preferences"
                  className="link-underline hidden text-center text-sm text-muted-foreground hover:text-foreground sm:block sm:ml-4"
                >
                  Manage
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
