'use client';

import { useEffect } from 'react';
import { Reveal } from '@/components/motion/reveal';

const WIDGET_URL = process.env.NEXT_PUBLIC_TOGEVER_WIDGET_URL || 'http://localhost:3000';

export default function ConsultationPage() {
  useEffect(() => {
    // Auto-resize iframe based on content
    const handleMessage = (e: MessageEvent) => {
      if (e.data && e.data.type === 'togever-booking-resize') {
        const iframe = document.getElementById('togever-booking-iframe') as HTMLIFrameElement;
        if (iframe) {
          iframe.style.height = e.data.height + 'px';
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
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
            <iframe
              id="togever-booking-iframe"
              src={`${WIDGET_URL}/book?embed=true`}
              width="100%"
              frameBorder="0"
              scrolling="no"
              referrerPolicy="strict-origin-when-cross-origin"
              style={{
                border: 'none',
                minHeight: '600px',
                overflow: 'hidden',
              }}
            />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
