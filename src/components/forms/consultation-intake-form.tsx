'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  consultationRequestSchema,
  type ConsultationRequestFormData,
} from '@/lib/validations';
import { createConsultationRequest } from '@/app/consultation/actions';
import type { ConsultationRequest, YearGroup, Subject, PrimaryGoal } from '@/types';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

const YEAR_GROUPS: YearGroup[] = ['Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11'];
const SUBJECTS: Subject[] = ['Biology', 'Chemistry', 'Physics', 'Combined Science'];
const PRIMARY_GOALS: { value: PrimaryGoal; label: string; description: string }[] = [
  {
    value: 'confidence',
    label: 'Build confidence',
    description: 'Help my child feel more confident in science',
  },
  {
    value: 'grades',
    label: 'Improve grades',
    description: 'Work towards better marks and understanding',
  },
  {
    value: 'exam_readiness',
    label: 'Exam preparation',
    description: 'Focused revision for upcoming exams',
  },
  {
    value: 'other',
    label: 'Something else',
    description: 'I have a different goal in mind',
  },
];

interface ConsultationIntakeFormProps {
  onSubmit: (request: ConsultationRequest) => void;
}

export function ConsultationIntakeForm({ onSubmit }: ConsultationIntakeFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<ConsultationRequestFormData>({
    resolver: zodResolver(consultationRequestSchema),
    defaultValues: {
      parentEmail: '',
      childYearGroup: undefined,
      subjects: [],
      primaryGoal: undefined,
      notes: '',
    },
  });

  const selectedSubjects = watch('subjects') || [];
  const selectedGoal = watch('primaryGoal');
  const selectedYearGroup = watch('childYearGroup');

  const toggleSubject = (subject: Subject) => {
    const current = selectedSubjects;
    if (current.includes(subject)) {
      setValue(
        'subjects',
        current.filter((s) => s !== subject),
        { shouldValidate: true }
      );
    } else {
      setValue('subjects', [...current, subject], { shouldValidate: true });
    }
  };

  const handleFormSubmit = async (data: ConsultationRequestFormData) => {
    setIsSubmitting(true);
    setServerError(null);

    const result = await createConsultationRequest(data);

    if (result.success) {
      onSubmit(result.request);
    } else {
      setServerError(result.error);
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-8">
      {/* Year Group */}
      <div>
        <label className="mb-3 block text-sm font-medium text-foreground">
          What year is your child in?
        </label>
        <div className="flex flex-wrap gap-2">
          {YEAR_GROUPS.map((year) => (
            <button
              key={year}
              type="button"
              onClick={() => setValue('childYearGroup', year, { shouldValidate: true })}
              className={cn(
                'rounded-md border px-4 py-2 text-sm font-medium transition-all',
                selectedYearGroup === year
                  ? 'border-crown-gold-500 bg-crown-gold-50 text-crown-gold-700'
                  : 'border-foreground/20 text-foreground hover:border-foreground/40'
              )}
            >
              {year}
            </button>
          ))}
        </div>
        {errors.childYearGroup && (
          <p className="mt-2 text-sm text-destructive">{errors.childYearGroup.message}</p>
        )}
      </div>

      {/* Subjects */}
      <div>
        <label className="mb-3 block text-sm font-medium text-foreground">
          Which subjects need support?
        </label>
        <p className="mb-3 text-sm text-muted-foreground">Select all that apply</p>
        <div className="grid grid-cols-2 gap-2">
          {SUBJECTS.map((subject) => (
            <button
              key={subject}
              type="button"
              onClick={() => toggleSubject(subject)}
              className={cn(
                'rounded-md border px-4 py-3 text-sm font-medium transition-all',
                selectedSubjects.includes(subject)
                  ? 'border-crown-gold-500 bg-crown-gold-50 text-crown-gold-700'
                  : 'border-foreground/20 text-foreground hover:border-foreground/40'
              )}
            >
              {subject}
            </button>
          ))}
        </div>
        {errors.subjects && (
          <p className="mt-2 text-sm text-destructive">{errors.subjects.message}</p>
        )}
      </div>

      {/* Primary Goal */}
      <div>
        <label className="mb-3 block text-sm font-medium text-foreground">
          What is your primary goal?
        </label>
        <div className="space-y-2">
          {PRIMARY_GOALS.map((goal) => (
            <button
              key={goal.value}
              type="button"
              onClick={() => setValue('primaryGoal', goal.value, { shouldValidate: true })}
              className={cn(
                'w-full rounded-md border px-4 py-3 text-left transition-all',
                selectedGoal === goal.value
                  ? 'border-crown-gold-500 bg-crown-gold-50'
                  : 'border-foreground/20 hover:border-foreground/40'
              )}
            >
              <span
                className={cn(
                  'block text-sm font-medium',
                  selectedGoal === goal.value ? 'text-crown-gold-700' : 'text-foreground'
                )}
              >
                {goal.label}
              </span>
              <span className="mt-0.5 block text-xs text-muted-foreground">
                {goal.description}
              </span>
            </button>
          ))}
        </div>
        {errors.primaryGoal && (
          <p className="mt-2 text-sm text-destructive">{errors.primaryGoal.message}</p>
        )}
      </div>

      {/* Notes */}
      <div>
        <label htmlFor="notes" className="mb-3 block text-sm font-medium text-foreground">
          Anything else we should know?{' '}
          <span className="font-normal text-muted-foreground">(optional)</span>
        </label>
        <textarea
          id="notes"
          {...register('notes')}
          rows={3}
          className={cn(
            'flex w-full rounded-md border border-foreground/20 bg-background px-3 py-2 text-sm',
            'placeholder:text-muted-foreground',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crown-gold-400 focus-visible:ring-offset-2',
            'disabled:cursor-not-allowed disabled:opacity-50',
            errors.notes && 'border-destructive focus-visible:ring-destructive'
          )}
          placeholder="Any specific topics, concerns, or questions..."
        />
        {errors.notes && (
          <p className="mt-2 text-sm text-destructive">{errors.notes.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="mb-3 block text-sm font-medium text-foreground">
          Your email address
        </label>
        <Input
          id="email"
          type="email"
          {...register('parentEmail')}
          placeholder="you@example.com"
          error={!!errors.parentEmail}
        />
        {errors.parentEmail && (
          <p className="mt-2 text-sm text-destructive">{errors.parentEmail.message}</p>
        )}
        <p className="mt-2 text-xs text-muted-foreground">
          We&apos;ll send your confirmation here.
        </p>
      </div>

      {/* Server Error */}
      {serverError && (
        <div className="rounded-md border border-destructive/50 bg-destructive/10 p-4">
          <p className="text-sm text-destructive">{serverError}</p>
        </div>
      )}

      {/* Submit */}
      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          'Continue to scheduling'
        )}
      </Button>
    </form>
  );
}
