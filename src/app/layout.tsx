import type { Metadata } from "next";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "700"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
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
      className={`${sourceSans.variable} ${libreBaskerville.variable}`}
    >
      <body className="font-sans antialiased">
        <Header />
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
