import type { Metadata } from "next";
import { Libre_Baskerville, Outfit } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CookieConsentProvider } from "@/lib/consent/use-cookie-consent";
import { CookieConsentBanner } from "@/components/consent/cookie-consent-banner";
import { GoogleAnalytics } from "@/components/consent/google-analytics";
import { WhatsAppWidget } from "@/components/whatsapp-widget";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "700"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Crown Science Education | Premium UK Science Tutoring",
  description:
    "A premium UK science tutoring practice led by a single tutor for Year 7 to GCSE. Calm, structured teaching that builds confidence, depth, and exam readiness.",
  keywords:
    "science tutoring, GCSE science, Year 7 science, Year 8 science, Year 9 science, UK tutors, private tutoring",
  authors: [{ name: "Crown Science Education" }],
  openGraph: {
    title: "Crown Science Education | Premium UK Science Tutoring",
    description:
      "Structured, academic science tutoring for Year 7 to GCSE, led by a single tutor and delivered with clarity and care.",
    url: "https://crownscience.edu",
    siteName: "Crown Science Education",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crown Science Education",
    description:
      "Premium UK science tutoring for Year 7 to GCSE with calm, structured teaching led by a single tutor.",
    images: ["/twitter-image.png"],
  },
  icons: {
    icon: "/images/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${outfit.variable} ${libreBaskerville.variable}`}
    >
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:ring-2 focus:ring-ring"
        >
          Skip to content
        </a>
        <CookieConsentProvider>
          <GoogleAnalytics />
          <Header />
          <main id="main-content" className="pt-24">{children}</main>
          <Footer />
          <CookieConsentBanner />
        </CookieConsentProvider>
        <WhatsAppWidget />
      </body>
    </html>
  );
}
