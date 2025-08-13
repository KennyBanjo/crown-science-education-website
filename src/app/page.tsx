import { HeroSection } from "@/components/sections/hero-section";
import { ProgramsOverview } from "@/components/sections/programs-overview";
import { SubjectsOffered } from "@/components/sections/subjects-offered";
import { MeetEducators } from "@/components/sections/meet-educators";
import { StudentSuccess } from "@/components/sections/student-success";
import { LearningExperience } from "@/components/sections/learning-experience";
import { PricingEnrollment } from "@/components/sections/pricing-enrollment";
import { ApplicationProcess } from "@/components/sections/application-process";
import { ParentInformation } from "@/components/sections/parent-information";
import { FAQSection } from "@/components/sections/faq-section";
import { EnrollmentCTA } from "@/components/sections/enrollment-cta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProgramsOverview />
      <SubjectsOffered />
      <MeetEducators />
      <StudentSuccess />
      <LearningExperience />
      <PricingEnrollment />
      <ApplicationProcess />
      <ParentInformation />
      <FAQSection />
      <EnrollmentCTA />
    </>
  );
}