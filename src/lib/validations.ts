import { z } from 'zod';

// Consultation request form validation schema
export const consultationRequestSchema = z.object({
  parentEmail: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  childYearGroup: z.enum(['Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11'], {
    message: 'Please select a year group',
  }),
  subjects: z
    .array(z.enum(['Biology', 'Chemistry', 'Physics', 'Combined Science']))
    .min(1, 'Please select at least one subject'),
  primaryGoal: z.enum(['confidence', 'grades', 'exam_readiness', 'other'], {
    message: 'Please select a primary goal',
  }),
  notes: z
    .string()
    .max(1000, 'Notes must be less than 1000 characters')
    .optional(),
});

export type ConsultationRequestFormData = z.infer<typeof consultationRequestSchema>;

// Booking slot selection validation
export const bookingSlotSchema = z.object({
  requestId: z.string().uuid('Invalid request ID'),
  startTimeUtc: z.string().datetime('Invalid start time'),
  endTimeUtc: z.string().datetime('Invalid end time'),
});

export type BookingSlotData = z.infer<typeof bookingSlotSchema>;
