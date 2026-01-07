'use client';

import { Button } from '@/components/ui/button';
import type { ConsultationBooking } from '@/types';
import { CheckCircle, Calendar, Clock, User, Mail } from 'lucide-react';
import Link from 'next/link';

interface BookingConfirmationProps {
  booking: ConsultationBooking;
  parentEmail: string;
}

export function BookingConfirmation({ booking, parentEmail }: BookingConfirmationProps) {
  return (
    <div className="text-center">
      {/* Success icon */}
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
        <CheckCircle className="h-8 w-8 text-green-600" />
      </div>

      {/* Heading */}
      <h2 className="mt-6 text-xl font-medium text-foreground">Consultation Confirmed</h2>
      <p className="mt-2 text-muted-foreground">
        We look forward to speaking with you about your child&apos;s science education.
      </p>

      {/* Booking details card */}
      <div className="mt-8 rounded-lg border border-foreground/20 bg-foreground/5 p-6 text-left">
        <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Booking Details
        </h3>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Calendar className="mt-0.5 h-5 w-5 text-crown-gold-500" />
            <div>
              <p className="text-sm font-medium text-foreground">Date</p>
              <p className="text-sm text-muted-foreground">{booking.consultationDate}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 h-5 w-5 text-crown-gold-500" />
            <div>
              <p className="text-sm font-medium text-foreground">Time</p>
              <p className="text-sm text-muted-foreground">
                {booking.consultationTime} (25 minutes)
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <User className="mt-0.5 h-5 w-5 text-crown-gold-500" />
            <div>
              <p className="text-sm font-medium text-foreground">With</p>
              <p className="text-sm text-muted-foreground">{booking.tutorName}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Email confirmation notice */}
      <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <Mail className="h-4 w-4" />
        <span>Confirmation sent to {parentEmail}</span>
      </div>

      {/* What to expect */}
      <div className="mt-8 rounded-lg border border-foreground/20 p-6 text-left">
        <h3 className="mb-4 text-sm font-medium text-foreground">What to expect</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-crown-gold-500" />
            We&apos;ll discuss your child&apos;s current situation and goals
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-crown-gold-500" />
            You&apos;ll learn about our tutoring approach and methodology
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-crown-gold-500" />
            We&apos;ll answer any questions you have about our programmes
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-crown-gold-500" />
            No obligation or pressure - just a friendly conversation
          </li>
        </ul>
      </div>

      {/* Return home button */}
      <div className="mt-8">
        <Button asChild variant="outline" size="lg">
          <Link href="/">Return to homepage</Link>
        </Button>
      </div>
    </div>
  );
}
