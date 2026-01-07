'use server';

import type {
  ConsultationRequest,
  AvailableSlotsResponse,
  ConsultationBooking,
  AvailableSlot,
} from '@/types';
import type { ConsultationRequestFormData } from '@/lib/validations';

const API_URL = process.env.TOGEVER_API_URL || 'http://localhost:5000';
const API_KEY = process.env.TOGEVER_API_KEY || '';

/**
 * Create a new consultation request from the intake form
 */
export async function createConsultationRequest(
  data: ConsultationRequestFormData
): Promise<{ success: true; request: ConsultationRequest } | { success: false; error: string }> {
  try {
    const response = await fetch(`${API_URL}/api/consultation/requests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Failed to create consultation request:', errorData);
      return {
        success: false,
        error: errorData.error || 'Failed to submit consultation request. Please try again.',
      };
    }

    const request = await response.json();
    return { success: true, request };
  } catch (error) {
    console.error('Error creating consultation request:', error);
    return {
      success: false,
      error: 'Unable to connect to the server. Please try again later.',
    };
  }
}

/**
 * Fetch available consultation slots for the next 21 days
 */
export async function getAvailableSlots(): Promise<
  { success: true; data: AvailableSlotsResponse } | { success: false; error: string }
> {
  try {
    const response = await fetch(`${API_URL}/api/consultation/available-slots`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store', // Always fetch fresh slots
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Failed to fetch available slots:', errorData);
      return {
        success: false,
        error: errorData.error || 'Failed to load available times. Please refresh the page.',
      };
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error('Error fetching available slots:', error);
    return {
      success: false,
      error: 'Unable to connect to the server. Please try again later.',
    };
  }
}

/**
 * Create a consultation booking for a specific slot
 */
export async function createBooking(
  requestId: string,
  slot: AvailableSlot
): Promise<{ success: true; booking: ConsultationBooking } | { success: false; error: string }> {
  try {
    const response = await fetch(`${API_URL}/api/consultation/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        requestId,
        startTimeUtc: slot.startTimeUtc,
        endTimeUtc: slot.endTimeUtc,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Failed to create booking:', errorData);

      // Handle conflict (slot taken)
      if (response.status === 409) {
        return {
          success: false,
          error: 'This time slot is no longer available. Please select another time.',
        };
      }

      return {
        success: false,
        error: errorData.error || 'Failed to book consultation. Please try again.',
      };
    }

    const booking = await response.json();
    return { success: true, booking };
  } catch (error) {
    console.error('Error creating booking:', error);
    return {
      success: false,
      error: 'Unable to connect to the server. Please try again later.',
    };
  }
}

/**
 * Fetch a consultation request by ID
 */
export async function getConsultationRequest(
  id: string
): Promise<{ success: true; request: ConsultationRequest } | { success: false; error: string }> {
  try {
    const response = await fetch(`${API_URL}/api/consultation/requests/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      return {
        success: false,
        error: 'Consultation request not found.',
      };
    }

    const request = await response.json();
    return { success: true, request };
  } catch (error) {
    console.error('Error fetching consultation request:', error);
    return {
      success: false,
      error: 'Unable to connect to the server. Please try again later.',
    };
  }
}
