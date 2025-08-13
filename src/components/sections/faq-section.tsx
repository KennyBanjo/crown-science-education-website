"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "What's the difference between LMS Access and Full Enrollment?",
        answer: "LMS Access (£29/month) provides self-paced digital learning with all course materials and progress tracking. Full Enrollment (£199/month) includes everything in LMS Access PLUS personal tutoring, weekly 1-on-1 sessions, customised learning plans, and parent meetings.",
      },
      {
        question: "How quickly can my child start?",
        answer: "LMS Access students can begin immediately after enrollment. Full Enrollment students typically start within 2-3 days after we match them with the perfect tutor.",
      },
      {
        question: "What age groups do you teach?",
        answer: "We specialise in science education for students aged 11-18 (Key Stage 3-5), covering GCSE, A-Level, and IB curricula.",
      },
    ],
  },
  {
    category: "Academic Programs",
    questions: [
      {
        question: "Which subjects do you offer?",
        answer: "We offer comprehensive programs in Biology, Chemistry, Physics, and Mathematics. All subjects are available at GCSE and A-Level, with specialised exam preparation.",
      },
      {
        question: "Can my child switch between programs?",
        answer: "Yes! Students can upgrade from LMS Access to Full Enrollment at any time. We'll ensure a smooth transition and credit any unused time.",
      },
      {
        question: "Do you offer exam preparation?",
        answer: "Absolutely. We provide focused preparation for GCSEs, A-Levels, 11+, 13+, and university entrance exams, including Oxbridge preparation.",
      },
    ],
  },
  {
    category: "Tutoring & Support",
    questions: [
      {
        question: "How are tutors selected?",
        answer: "Our tutors are carefully selected from top universities, with advanced degrees in their subjects. All undergo DBS checks and continuous training.",
      },
      {
        question: "What if my child doesn't connect with their tutor?",
        answer: "We want every student to thrive. If the match isn't perfect, we'll arrange a new tutor at no extra cost.",
      },
      {
        question: "How much support will my child receive?",
        answer: "Full Enrollment students receive weekly 1-on-1 sessions, unlimited messaging support, and regular check-ins. LMS Access students have email support and community forums.",
      },
    ],
  },
  {
    category: "Pricing & Payment",
    questions: [
      {
        question: "Are there any hidden fees?",
        answer: "No hidden fees. The monthly price includes everything listed in your chosen program. Additional services like exam bootcamps are clearly priced separately.",
      },
      {
        question: "Do you offer family discounts?",
        answer: "Yes! Families with 2 students receive 10% off, 3 students get 15% off, and 4+ students receive 20% off the total monthly fee.",
      },
      {
        question: "What's your refund policy?",
        answer: "We offer a 30-day money-back guarantee for new enrollments. If you're not satisfied within the first month, we'll refund your payment in full.",
      },
    ],
  },
];

export function FAQSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge variant="outline" className="mb-4 border-primary-500 text-primary-600">
            FAQs
          </Badge>
          <h2 className="text-3xl font-display font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to know about Crown Science Education
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {category.category}
              </h3>
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem
                    key={faqIndex}
                    value={`${categoryIndex}-${faqIndex}`}
                    className="bg-white border rounded-lg px-6 shadow-sm"
                  >
                    <AccordionTrigger className="text-left hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our admissions team is here to help you find the perfect program for your child
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" asChild>
              <a href="tel:08001234567">
                Call 0800 123 4567
              </a>
            </Button>
            <Button className="bg-primary-500 hover:bg-primary-600" asChild>
              <Link href="/contact">
                Contact Admissions
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}