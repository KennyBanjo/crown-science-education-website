import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Crown Science Education - Transform Science Learning with AI-Powered LMS",
  description: "Comprehensive learning management system and student management platform designed specifically for science education. Empower educators, engage students, achieve excellence.",
  keywords: "science education, LMS, student management system, online learning, tutoring platform, educational technology",
  authors: [{ name: "Crown Science Education" }],
  openGraph: {
    title: "Crown Science Education - Premium Science Learning Platform",
    description: "Transform science education with our comprehensive LMS and student management system",
    url: "https://crownscience.edu",
    siteName: "Crown Science Education",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crown Science Education",
    description: "Transform science education with AI-powered learning",
    images: ["/twitter-image.png"],
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
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
