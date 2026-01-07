'use client';

import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { getAvailableSlots, createBooking } from '@/app/consultation/actions';
import type { AvailableSlot, SlotsByDate, ConsultationBooking } from '@/types';
import { cn } from '@/lib/utils';
import { Loader2, ChevronLeft, ChevronRight, ArrowLeft, Clock, Calendar } from 'lucide-react';

interface SlotPickerProps {
  requestId: string;
  onBook: (booking: ConsultationBooking) => void;
  onBack: () => void;
}

export function SlotPicker({ requestId, onBook, onBack }: SlotPickerProps) {
  const [slots, setSlots] = useState<SlotsByDate>({});
  const [duration, setDuration] = useState(25);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<AvailableSlot | null>(null);
  const [isBooking, setIsBooking] = useState(false);
  const [bookingError, setBookingError] = useState<string | null>(null);

  // Get sorted dates
  const sortedDates = Object.keys(slots).sort();
  const currentDateIndex = selectedDate ? sortedDates.indexOf(selectedDate) : 0;

  // Load available slots on mount
  useEffect(() => {
    const loadSlots = async () => {
      setLoading(true);
      setError(null);

      const result = await getAvailableSlots();

      if (result.success) {
        setSlots(result.data.slots);
        setDuration(result.data.duration);

        // Select first date with slots
        const dates = Object.keys(result.data.slots).sort();
        if (dates.length > 0) {
          setSelectedDate(dates[0]);
        }
      } else {
        setError(result.error);
      }

      setLoading(false);
    };

    loadSlots();
  }, []);

  const handleDateChange = useCallback((direction: 'prev' | 'next') => {
    if (!selectedDate) return;

    const newIndex = direction === 'prev' ? currentDateIndex - 1 : currentDateIndex + 1;
    if (newIndex >= 0 && newIndex < sortedDates.length) {
      setSelectedDate(sortedDates[newIndex]);
      setSelectedSlot(null);
    }
  }, [selectedDate, currentDateIndex, sortedDates]);

  const handleSlotSelect = useCallback((slot: AvailableSlot) => {
    setSelectedSlot(slot);
    setBookingError(null);
  }, []);

  const handleConfirmBooking = async () => {
    if (!selectedSlot) return;

    setIsBooking(true);
    setBookingError(null);

    const result = await createBooking(requestId, selectedSlot);

    if (result.success) {
      onBook(result.booking);
    } else {
      setBookingError(result.error);
      // Refresh slots if the error was a conflict
      if (result.error.includes('no longer available')) {
        const refreshResult = await getAvailableSlots();
        if (refreshResult.success) {
          setSlots(refreshResult.data.slots);
          setSelectedSlot(null);
        }
      }
    }

    setIsBooking(false);
  };

  // Loading state
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-crown-gold-500" />
        <p className="mt-4 text-sm text-muted-foreground">Loading available times...</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="space-y-4 text-center">
        <div className="rounded-md border border-destructive/50 bg-destructive/10 p-6">
          <p className="text-sm text-destructive">{error}</p>
        </div>
        <Button variant="outline" onClick={onBack}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Go back
        </Button>
      </div>
    );
  }

  // No slots available
  if (sortedDates.length === 0) {
    return (
      <div className="space-y-4 text-center">
        <div className="rounded-md border border-foreground/20 p-6">
          <Calendar className="mx-auto h-8 w-8 text-muted-foreground" />
          <h3 className="mt-4 font-medium text-foreground">No available times</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            We don&apos;t have any consultation slots available at the moment. Please check
            back later or contact us directly.
          </p>
        </div>
        <Button variant="outline" onClick={onBack}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Go back
        </Button>
      </div>
    );
  }

  const currentSlots = selectedDate ? slots[selectedDate] || [] : [];
  const currentDisplayDate = currentSlots[0]?.displayDate || selectedDate;

  return (
    <div className="space-y-6">
      {/* Back button */}
      <button
        type="button"
        onClick={onBack}
        className="flex items-center text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="mr-1 h-4 w-4" />
        Back to details
      </button>

      {/* Date navigation */}
      <div className="flex items-center justify-between rounded-lg border border-foreground/20 p-4">
        <button
          type="button"
          onClick={() => handleDateChange('prev')}
          disabled={currentDateIndex === 0}
          className="rounded-md p-2 text-foreground hover:bg-foreground/5 disabled:opacity-50"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="text-center">
          <p className="font-medium text-foreground">{currentDisplayDate}</p>
          <p className="text-xs text-muted-foreground">
            {currentDateIndex + 1} of {sortedDates.length} days
          </p>
        </div>
        <button
          type="button"
          onClick={() => handleDateChange('next')}
          disabled={currentDateIndex === sortedDates.length - 1}
          className="rounded-md p-2 text-foreground hover:bg-foreground/5 disabled:opacity-50"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Time slots */}
      <div>
        <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{duration} minute consultation</span>
        </div>

        {currentSlots.length === 0 ? (
          <p className="py-8 text-center text-sm text-muted-foreground">
            No slots available on this day. Try another date.
          </p>
        ) : (
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
            {currentSlots.map((slot) => (
              <button
                key={slot.startTimeUtc}
                type="button"
                onClick={() => handleSlotSelect(slot)}
                className={cn(
                  'rounded-md border px-3 py-2 text-sm font-medium transition-all',
                  selectedSlot?.startTimeUtc === slot.startTimeUtc
                    ? 'border-crown-gold-500 bg-crown-gold-500 text-white'
                    : 'border-foreground/20 text-foreground hover:border-crown-gold-400 hover:bg-crown-gold-50'
                )}
              >
                {slot.displayTime}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Booking error */}
      {bookingError && (
        <div className="rounded-md border border-destructive/50 bg-destructive/10 p-4">
          <p className="text-sm text-destructive">{bookingError}</p>
        </div>
      )}

      {/* Confirm button */}
      {selectedSlot && (
        <div className="rounded-lg border border-foreground/20 bg-foreground/5 p-4">
          <p className="mb-3 text-sm text-foreground">
            <span className="font-medium">Selected:</span> {selectedSlot.displayDate} at{' '}
            {selectedSlot.displayTime}
          </p>
          <Button
            onClick={handleConfirmBooking}
            size="lg"
            className="w-full"
            disabled={isBooking}
          >
            {isBooking ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Confirming...
              </>
            ) : (
              'Confirm booking'
            )}
          </Button>
        </div>
      )}
    </div>
  );
}
