"use client";

import { useEffect } from "react";
import Script from "next/script";
import { useCookieConsent } from "@/lib/consent/use-cookie-consent";

// Google Analytics Measurement ID (will be set via environment variable)
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function GoogleAnalytics() {
  const { consentStatus } = useCookieConsent();

  useEffect(() => {
    // If consent is rejected, disable GA
    if (consentStatus === "rejected" && typeof window !== "undefined") {
      // @ts-ignore
      window[`ga-disable-${GA_MEASUREMENT_ID}`] = true;

      // Remove GA cookies if they exist
      const cookiesToRemove = ["_ga", "_gat", "_gid"];
      cookiesToRemove.forEach((cookieName) => {
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        // Also try with domain
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`;
      });
    }
  }, [consentStatus]);

  // Only load GA if:
  // 1. GA_MEASUREMENT_ID is configured
  // 2. User has accepted cookies
  if (!GA_MEASUREMENT_ID || consentStatus !== "accepted") {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_MEASUREMENT_ID}', {
              anonymize_ip: true,
              cookie_flags: 'SameSite=None;Secure',
              cookie_expires: 63072000, // 2 years in seconds
            });
          `,
        }}
      />
    </>
  );
}
