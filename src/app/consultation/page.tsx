'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { Reveal } from '@/components/motion/reveal';

// Declare Togever on window for TypeScript
declare global {
  interface Window {
    Togever?: {
      init: (config: {
        container: string;
        orgSlug: string;
        mode: 'inline' | 'modal';
      }) => void;
    };
  }
}

const WIDGET_URL = process.env.NEXT_PUBLIC_TOGEVER_WIDGET_URL || 'http://localhost:3000';

export default function ConsultationPage() {
  const initWidget = () => {
    if (window.Togever) {
      window.Togever.init({
        container: '#togever-booking',
        orgSlug: 'crown-education',
        mode: 'inline',
      });
    }
  };

  // Try to init if script is already loaded (e.g., on client-side navigation)
  useEffect(() => {
    if (window.Togever) {
      initWidget();
    }
  }, []);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero section */}
      <section className="border-b border-foreground/10 bg-gradient-to-b from-crown-gold-50/50 to-background">
        <div className="mx-auto max-w-2xl px-6 py-16 text-center sm:py-20">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-widest text-crown-gold-600">
              Free Consultation
            </p>
          </Reveal>
          <Reveal>
            <h1 className="mt-4 font-serif text-3xl font-light tracking-tight text-foreground sm:text-4xl">
              Book Your Discovery Call
            </h1>
          </Reveal>
          <Reveal>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Share a few details about your child, and we&apos;ll match you with the perfect time for a 25-minute conversation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Widget section */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal>
            <div id="togever-booking" className="min-h-[400px]" />
          </Reveal>
        </div>
      </section>

      {/* Load Togever widget script */}
      <Script
        src={`${WIDGET_URL}/widget.js`}
        strategy="afterInteractive"
        onLoad={initWidget}
      />
    </main>
  );
}
