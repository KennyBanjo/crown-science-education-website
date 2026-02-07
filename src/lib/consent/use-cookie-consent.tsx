"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type ConsentStatus = "pending" | "accepted" | "rejected";

interface CookieConsentContextType {
  consentStatus: ConsentStatus;
  acceptCookies: () => void;
  rejectCookies: () => void;
  resetConsent: () => void;
  hasAnswered: boolean;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(
  undefined
);

const CONSENT_KEY = "crown-cookie-consent";

export function CookieConsentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>("pending");
  const [mounted, setMounted] = useState(false);

  // Load consent from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === "accepted" || stored === "rejected") {
      setConsentStatus(stored as ConsentStatus);
    }
  }, []);

  const acceptCookies = () => {
    setConsentStatus("accepted");
    if (typeof window !== "undefined") {
      localStorage.setItem(CONSENT_KEY, "accepted");
      localStorage.setItem(
        `${CONSENT_KEY}-timestamp`,
        new Date().toISOString()
      );
    }
  };

  const rejectCookies = () => {
    setConsentStatus("rejected");
    if (typeof window !== "undefined") {
      localStorage.setItem(CONSENT_KEY, "rejected");
      localStorage.setItem(
        `${CONSENT_KEY}-timestamp`,
        new Date().toISOString()
      );
    }
  };

  const resetConsent = () => {
    setConsentStatus("pending");
    if (typeof window !== "undefined") {
      localStorage.removeItem(CONSENT_KEY);
      localStorage.removeItem(`${CONSENT_KEY}-timestamp`);
    }
  };

  const value = {
    consentStatus,
    acceptCookies,
    rejectCookies,
    resetConsent,
    hasAnswered: mounted && consentStatus !== "pending",
  };

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error(
      "useCookieConsent must be used within CookieConsentProvider"
    );
  }
  return context;
}
