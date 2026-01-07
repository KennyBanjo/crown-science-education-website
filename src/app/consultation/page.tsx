'use client';

import { useState, useCallback } from 'react';
import { Reveal } from '@/components/motion/reveal';
import { ConsultationIntakeForm } from '@/components/forms/consultation-intake-form';
import { SlotPicker } from '@/components/forms/slot-picker';
import { BookingConfirmation } from '@/components/forms/booking-confirmation';
import type {
  ConsultationStep,
  ConsultationRequest,
  ConsultationBooking,
} from '@/types';

export default function ConsultationPage() {
  const [step, setStep] = useState<ConsultationStep>('intake');
  const [requestId, setRequestId] = useState<string | null>(null);
  const [booking, setBooking] = useState<ConsultationBooking | null>(null);
  const [parentEmail, setParentEmail] = useState<string>('');

  const handleIntakeSubmit = useCallback((request: ConsultationRequest) => {
    setRequestId(request.id);
    setParentEmail(request.parentEmail);
    setStep('schedule');
  }, []);

  const handleBookingComplete = useCallback((newBooking: ConsultationBooking) => {
    setBooking(newBooking);
    setStep('confirmed');
  }, []);

  const handleBack = useCallback(() => {
    setStep('intake');
    setRequestId(null);
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
              {step === 'intake' &&
                'Share a few details about your child, and we&apos;ll match you with the perfect time for a 25-minute conversation.'}
              {step === 'schedule' &&
                'Choose a convenient time for your free consultation call.'}
              {step === 'confirmed' &&
                'Your consultation is confirmed. We look forward to speaking with you.'}
            </p>
          </Reveal>

          {/* Step indicator */}
          <Reveal>
            <div className="mt-8 flex items-center justify-center gap-2">
              <div
                className={`h-2 w-2 rounded-full transition-colors ${
                  step === 'intake'
                    ? 'bg-crown-gold-500'
                    : 'bg-crown-gold-500'
                }`}
              />
              <div
                className={`h-px w-8 transition-colors ${
                  step !== 'intake' ? 'bg-crown-gold-500' : 'bg-foreground/20'
                }`}
              />
              <div
                className={`h-2 w-2 rounded-full transition-colors ${
                  step === 'schedule'
                    ? 'bg-crown-gold-500'
                    : step === 'confirmed'
                    ? 'bg-crown-gold-500'
                    : 'bg-foreground/20'
                }`}
              />
              <div
                className={`h-px w-8 transition-colors ${
                  step === 'confirmed' ? 'bg-crown-gold-500' : 'bg-foreground/20'
                }`}
              />
              <div
                className={`h-2 w-2 rounded-full transition-colors ${
                  step === 'confirmed'
                    ? 'bg-crown-gold-500'
                    : 'bg-foreground/20'
                }`}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Form section */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-xl px-6">
          {step === 'intake' && (
            <Reveal>
              <ConsultationIntakeForm onSubmit={handleIntakeSubmit} />
            </Reveal>
          )}

          {step === 'schedule' && requestId && (
            <Reveal>
              <SlotPicker
                requestId={requestId}
                onBook={handleBookingComplete}
                onBack={handleBack}
              />
            </Reveal>
          )}

          {step === 'confirmed' && booking && (
            <Reveal>
              <BookingConfirmation booking={booking} parentEmail={parentEmail} />
            </Reveal>
          )}
        </div>
      </section>
    </main>
  );
}
