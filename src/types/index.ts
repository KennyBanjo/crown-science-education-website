// Year groups for Crown Science Education
export type YearGroup = 'Year 7' | 'Year 8' | 'Year 9' | 'Year 10' | 'Year 11';

// Science subjects offered
export type Subject = 'Biology' | 'Chemistry' | 'Physics' | 'Combined Science';

// Primary goal for tutoring
export type PrimaryGoal = 'confidence' | 'grades' | 'exam_readiness' | 'other';

// Consultation request data from intake form
export interface ConsultationRequestData {
  parentEmail: string;
  childYearGroup: YearGroup;
  subjects: Subject[];
  primaryGoal: PrimaryGoal;
  notes?: string;
}

// Consultation request as returned from API
export interface ConsultationRequest extends ConsultationRequestData {
  id: string;
  status: 'pending' | 'scheduled' | 'completed' | 'cancelled';
  createdAt: string;
}

// Available time slot for booking
export interface AvailableSlot {
  tutorId: string;
  startTimeUtc: string;
  endTimeUtc: string;
  displayDate: string;
  displayTime: string;
}

// Slots grouped by date
export interface SlotsByDate {
  [date: string]: AvailableSlot[];
}

// Available slots API response
export interface AvailableSlotsResponse {
  slots: SlotsByDate;
  timezone: string;
  duration: number;
}

// Consultation booking as returned from API
export interface ConsultationBooking {
  id: string;
  requestId: string;
  tutorId: string;
  tutorName: string;
  startTimeUtc: string;
  endTimeUtc: string;
  status: string;
  consultationDate: string;
  consultationTime: string;
  parentEmail: string;
}

// Steps in the consultation booking flow
export type ConsultationStep = 'intake' | 'schedule' | 'confirmed';
