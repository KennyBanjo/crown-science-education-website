import { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Terms & Conditions | Crown Science Education",
  description: "Terms and Conditions for Crown Science Education - The terms governing our tutoring services, fees, policies, and your responsibilities.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero section */}
      <section className="border-b border-border bg-gradient-to-b from-muted/30 to-background">
        <div className="page-container py-16 sm:py-20">
          <Reveal>
            <p className="eyebrow">Legal</p>
          </Reveal>
          <Reveal>
            <h1 className="mt-4">Terms &amp; Conditions</h1>
          </Reveal>
          <Reveal>
            <p className="mt-4 lead max-w-3xl">
              The terms governing the educational services provided by Crown Science Education Ltd.
            </p>
          </Reveal>
          <Reveal>
            <p className="mt-4 text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Content section */}
      <section className="section">
        <div className="page-container">
          <div className="mx-auto max-w-3xl space-y-12">

            {/* Introduction */}
            <Reveal>
              <div className="space-y-4">
                <h2>Introduction</h2>
                <p className="text-muted-foreground">
                  These Terms and Conditions (&quot;Terms&quot;) govern the educational services provided by Crown Science Education Ltd (&quot;Crown&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). By enrolling a student in our services, you (&quot;the parent&quot;, &quot;guardian&quot;, or &quot;student&quot;) agree to be bound by these Terms. Please read them carefully before proceeding with enrolment.
                </p>
                <p className="text-muted-foreground">
                  These Terms apply to all services offered by Crown Science Education Ltd, including one-to-one tutoring, access to our online learning platform, and all supplementary educational materials provided.
                </p>
              </div>
            </Reveal>

            {/* 1. GDPR & Data Protection */}
            <Reveal>
              <div className="space-y-4">
                <h2>1. Data Protection &amp; GDPR</h2>
                <div className="rounded-md border-2 border-primary/20 bg-primary/5 p-6 space-y-4">
                  <p className="text-muted-foreground">
                    Crown Science Education Ltd is committed to protecting your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside ml-4">
                    <li>Your personal data will be stored securely in password-encrypted files within password-protected accounts</li>
                    <li>We will not share your data with any third parties without your explicit consent, unless required by law or for safeguarding purposes</li>
                    <li>You have the right to access, rectify, or request deletion of your personal data at any time</li>
                    <li>Data is retained only for as long as necessary to fulfil its intended purpose or to meet legal obligations</li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    For full details on how we handle your data, please see our{" "}
                    <Link href="/privacy" className="link-underline text-foreground">
                      Privacy Policy
                    </Link>.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* 2. Fees & Payment */}
            <Reveal>
              <div className="space-y-4">
                <h2>2. Fees &amp; Payment</h2>
                <p className="text-muted-foreground">
                  Crown Science Education Ltd will commence tuition and provide all login details for the online learning platform upon confirmation of the bank transfer of the advance tuition fee to the company&apos;s bank account.
                </p>

                <div className="rounded-md border border-border bg-muted/30 p-6 space-y-2 text-sm">
                  <p className="font-medium text-foreground">Payment Details</p>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Account Number:</span>
                    <span className="font-medium text-foreground">87843100</span>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sort Code:</span>
                    <span className="font-medium text-foreground">04-00-03</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="border-l-2 border-primary/30 pl-4">
                    <h3 className="text-lg font-medium">Late Payment</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Late payment of fees may result in the suspension of tuition services until the outstanding balance is cleared. Access to the online learning platform may also be restricted during this period.
                    </p>
                  </div>

                  <div className="border-l-2 border-primary/30 pl-4">
                    <h3 className="text-lg font-medium">Fee Reviews</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Tuition fees are reviewed annually. Written notice will be provided at least 30 days before any changes take effect. Continued enrolment after the notice period constitutes acceptance of the revised fees.
                    </p>
                  </div>

                  <div className="border-l-2 border-primary/30 pl-4">
                    <h3 className="text-lg font-medium">Additional Charges</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Requests to cover additional topics or create extra homework beyond the agreed targets for the half term may incur additional charges. Such requests are outside the standard hourly rate and will be discussed and agreed upon before any extra work is undertaken.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* 3. Missed Lessons */}
            <Reveal>
              <div className="space-y-4">
                <h2>3. Missed Lessons &amp; Cancellations</h2>
                <div className="space-y-3">
                  <p className="text-muted-foreground">
                    Consistency is fundamental to academic progress. Our policy on missed lessons is as follows:
                  </p>

                  <div className="rounded-md border border-border bg-muted/30 p-6 space-y-4 text-sm">
                    <div className="flex gap-3">
                      <span className="font-medium text-foreground min-w-[140px]">No Refunds:</span>
                      <span className="text-muted-foreground">There are no refunds for missed lessons under any circumstances</span>
                    </div>
                    <div className="h-px bg-border" />
                    <div className="flex gap-3">
                      <span className="font-medium text-foreground min-w-[140px]">Illness:</span>
                      <span className="text-muted-foreground">Lessons missed due to illness may be rescheduled, provided at least 72 hours&apos; notice is given in advance</span>
                    </div>
                    <div className="h-px bg-border" />
                    <div className="flex gap-3">
                      <span className="font-medium text-foreground min-w-[140px]">Late Notice:</span>
                      <span className="text-muted-foreground">Cancellations with less than 72 hours&apos; notice will not be eligible for rescheduling and will be treated as a missed lesson</span>
                    </div>
                    <div className="h-px bg-border" />
                    <div className="flex gap-3">
                      <span className="font-medium text-foreground min-w-[140px]">Tutor Absence:</span>
                      <span className="text-muted-foreground">In the rare event that Crown cancels a session, a replacement lesson will be arranged at the earliest mutually convenient time</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* 4. Resources */}
            <Reveal>
              <div className="space-y-4">
                <h2>4. Learning Resources</h2>
                <p className="text-muted-foreground">
                  Termly revision booklets are included in the course fees and issued at the start of each academic term. These booklets are designed to complement our teaching and provide structured revision material.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside ml-4">
                  <li>Booklets will not be reissued unless under exceptional circumstances, which may incur additional fees for reprinting and delivery</li>
                  <li>Students are responsible for keeping all issued materials in good condition</li>
                  <li>All resources remain the intellectual property of Crown Science Education Ltd and must not be reproduced, shared, or distributed without written permission</li>
                </ul>
              </div>
            </Reveal>

            {/* 5. Homework */}
            <Reveal>
              <div className="space-y-4">
                <h2>5. Homework &amp; Independent Study</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium">5.1 Homework Assignments</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Students enrolled in one-to-one tuition will receive written homework, marked by the tutor, each half term. Self-assessed written homework is also assigned fortnightly alongside online assignments.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">5.2 Submission Requirements</h3>
                    <ul className="mt-2 space-y-2 text-sm text-muted-foreground list-disc list-inside ml-4">
                      <li>Homework should be uploaded to the designated shared folder for review</li>
                      <li>Students are required to upload self-assessed homework for monitoring and tailored feedback</li>
                      <li>Homework must be completed before each tutoring session</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">5.3 Parental Responsibility</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Parents are responsible for ensuring that homework is completed before each session. We encourage parents to engage with the online learning platform, exam specifications, and personalised revision booklets to support their child&apos;s learning at home.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* 6. Target Setting */}
            <Reveal>
              <div className="space-y-4">
                <h2>6. Target Setting &amp; Academic Planning</h2>
                <p className="text-muted-foreground">
                  Personalised targets are set based on the initial assessment conducted at the start of tuition. These targets are designed to ensure consistent progress and optimise the effectiveness of each session.
                </p>

                <div className="rounded-md border-2 border-primary/20 bg-primary/5 p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-medium">Professional Expertise</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      The tutor holds the professional expertise to design, implement, and adjust learning targets, ensuring they align with the educational needs of the student. The delivery of lessons, curriculum design, and learning strategies are determined by the tutor&apos;s professional judgement to ensure the highest standard of education.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">Progress Reviews</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Targets are reviewed regularly and adjusted to reflect the student&apos;s progress. Parents will receive updates on their child&apos;s performance against these targets during scheduled progress meetings.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">Additional Requests</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Requests to cover additional topics or create extra homework beyond the agreed targets for the half term may incur additional charges. Such requests will be discussed and agreed upon prior to any extra work being carried out. Significant requests outside the scope of the tuition arrangement may result in a review of the agreement.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* 7. High Expectations */}
            <Reveal>
              <div className="space-y-4">
                <h2>7. High Expectations &amp; Independent Learning</h2>
                <p className="text-muted-foreground">
                  Crown Science Education Ltd has high expectations for all students to take responsibility for their learning and develop independent study habits. We believe that consistent, structured self-study is essential to academic success.
                </p>

                <div className="space-y-4">
                  <div className="border-l-2 border-secondary/40 pl-4">
                    <h3 className="text-base font-medium">Minimum Study Requirements</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Students are required to dedicate a minimum of one hour per week to each science subject: Physics, Chemistry, and Biology, outside of tutoring sessions.
                    </p>
                  </div>

                  <div className="border-l-2 border-secondary/40 pl-4">
                    <h3 className="text-base font-medium">Evidence-Based Learning</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Research in metacognition demonstrates that students who engage in deliberate practice, self-assessment, and reflection significantly improve their learning outcomes. Studies show that distributed practice &mdash; spreading study sessions across time &mdash; enhances long-term retention and deeper understanding.
                    </p>
                  </div>

                  <div className="border-l-2 border-secondary/40 pl-4">
                    <h3 className="text-base font-medium">Recommended Study Techniques</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      We encourage students to use active recall techniques such as summarising, quizzing themselves, and explaining concepts to others to build deeper understanding. These strategies are proven to be more effective than passive re-reading or highlighting.
                    </p>
                  </div>

                  <div className="border-l-2 border-secondary/40 pl-4">
                    <h3 className="text-base font-medium">Parental Support</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Parents are encouraged to support independent learning by setting aside dedicated study times and creating an environment conducive to focused, distraction-free study.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* 8. Safeguarding */}
            <Reveal>
              <div className="space-y-4">
                <h2>8. Safeguarding</h2>
                <div className="rounded-md border-2 border-primary/20 bg-primary/5 p-6 space-y-4">
                  <p className="text-muted-foreground">
                    Crown Science Education Ltd prioritises the safety and wellbeing of all students. We maintain comprehensive safeguarding policies in line with UK legislation and best practice.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside ml-4">
                    <li>All tutors are subject to enhanced DBS (Disclosure and Barring Service) checks and adhere to our safeguarding policies</li>
                    <li>Sessions take place in a safe and professional environment</li>
                    <li>Any concerns regarding student welfare should be reported immediately to the designated safeguarding lead</li>
                    <li>Parents must ensure that students under 18 are in a supervised, appropriate location during online lessons</li>
                    <li>All online lessons are recorded by Crown Science Education Ltd for safeguarding and quality assurance purposes</li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    For our full safeguarding policy, please see our{" "}
                    <Link href="/safeguarding" className="link-underline text-foreground">
                      Safeguarding Policy
                    </Link>.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* 9. Termination */}
            <Reveal>
              <div className="space-y-4">
                <h2>9. Termination of Services</h2>
                <div className="space-y-3">
                  <div className="border-l-2 border-primary/30 pl-4">
                    <h3 className="text-lg font-medium">Notice Period</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Both Crown Science Education Ltd and parents may terminate tutoring services with a minimum of one week&apos;s written notice.
                    </p>
                  </div>

                  <div className="border-l-2 border-primary/30 pl-4">
                    <h3 className="text-lg font-medium">Refunds</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Refunds for unused fees after the notice period will be processed within 14 working days of the final lesson. Fees for lessons already delivered are non-refundable.
                    </p>
                  </div>

                  <div className="border-l-2 border-primary/30 pl-4">
                    <h3 className="text-lg font-medium">Immediate Termination</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Crown Science Education Ltd reserves the right to terminate the tuition arrangement immediately and without refund in cases of serious misconduct, persistent failure to meet payment obligations, or any behaviour that puts the safety or wellbeing of others at risk.
                    </p>
                  </div>

                  <div className="border-l-2 border-primary/30 pl-4">
                    <h3 className="text-lg font-medium">Effect of Termination</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Upon termination, access to the online learning platform and all Crown resources will be revoked. Students should ensure any needed materials are downloaded before the termination date.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* 10. Conduct */}
            <Reveal>
              <div className="space-y-4">
                <h2>10. Professional &amp; General Conduct</h2>
                <p className="text-muted-foreground">
                  Crown Science Education Ltd is committed to maintaining a respectful, professional learning environment. We expect the same commitment from all families.
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium">10.1 Expected Standards</h3>
                    <ul className="mt-2 space-y-2 text-sm text-muted-foreground list-disc list-inside ml-4">
                      <li>Students and parents are expected to treat all tutors, staff, and learning resources with respect at all times</li>
                      <li>Students should arrive to sessions on time, prepared, and with all required materials</li>
                      <li>All communications should be courteous and professional</li>
                      <li>The learning environment should be free from distraction during sessions</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">10.2 Unacceptable Behaviour</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Abusive, threatening, or disrespectful behaviour directed towards any tutor or member of Crown Science Education Ltd &mdash; whether verbal, written, or online &mdash; will not be tolerated and may result in the immediate termination of the tuition arrangement without refund.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* 11. Intellectual Property */}
            <Reveal>
              <div className="space-y-4">
                <h2>11. Intellectual Property</h2>
                <p className="text-muted-foreground">
                  All educational materials, lesson content, revision booklets, online platform content, and resources produced by Crown Science Education Ltd are protected by copyright and remain the exclusive intellectual property of Crown Science Education Ltd.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside ml-4">
                  <li>Materials are provided for the personal educational use of the enrolled student only</li>
                  <li>Reproduction, redistribution, or sharing of any materials without written permission is strictly prohibited</li>
                  <li>Lesson recordings may not be copied, downloaded, or shared by students or parents</li>
                  <li>Breach of intellectual property terms may result in termination of services and legal action</li>
                </ul>
              </div>
            </Reveal>

            {/* 12. Limitation of Liability */}
            <Reveal>
              <div className="space-y-4">
                <h2>12. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  Crown Science Education Ltd strives to provide the highest standard of education. However, we cannot guarantee specific academic outcomes, examination results, or university admissions.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside ml-4">
                  <li>Our tutors provide expert guidance and support, but student effort, engagement, and consistency are critical factors in achieving results</li>
                  <li>Crown Science Education Ltd shall not be liable for any indirect, incidental, or consequential losses arising from the use of our services</li>
                  <li>Our total liability shall not exceed the fees paid for the current term of service</li>
                </ul>
              </div>
            </Reveal>

            {/* 13. Force Majeure */}
            <Reveal>
              <div className="space-y-4">
                <h2>13. Force Majeure</h2>
                <p className="text-muted-foreground">
                  Crown Science Education Ltd shall not be liable for any failure or delay in performing its obligations where such failure or delay arises from circumstances beyond our reasonable control, including but not limited to: natural disasters, pandemics, government restrictions, internet or technology failures, industrial action, or any other event constituting force majeure.
                </p>
                <p className="text-muted-foreground">
                  In such circumstances, Crown will make reasonable efforts to resume services as soon as practicable and may offer alternative arrangements (such as online sessions) where possible.
                </p>
              </div>
            </Reveal>

            {/* 14. Amendments */}
            <Reveal>
              <div className="space-y-4">
                <h2>14. Amendments</h2>
                <p className="text-muted-foreground">
                  Crown Science Education Ltd reserves the right to update these Terms and Conditions at any time. Any amendments will be communicated in writing with reasonable notice.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside ml-4">
                  <li>Material changes will be communicated at least 14 days before taking effect</li>
                  <li>Continued use of our services after the notice period constitutes acceptance of the updated terms</li>
                  <li>The latest version of these Terms will always be available on our website</li>
                </ul>
              </div>
            </Reveal>

            {/* 15. Governing Law */}
            <Reveal>
              <div className="space-y-4">
                <h2>15. Governing Law &amp; Disputes</h2>
                <p className="text-muted-foreground">
                  These Terms and Conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
                </p>
                <p className="text-muted-foreground">
                  We encourage all parties to seek informal resolution of any concerns before pursuing formal dispute resolution. Please contact us directly to discuss any issues.
                </p>
              </div>
            </Reveal>

            {/* Contact */}
            <Reveal>
              <div className="space-y-4">
                <h2>16. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="rounded-md border-2 border-primary/20 bg-primary/5 p-6 space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-foreground">Email:</p>
                    <a href="mailto:taiwoteaching@gmail.com" className="link-underline text-foreground">taiwoteaching@gmail.com</a>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone:</p>
                    <a href="tel:+447737571541" className="link-underline text-foreground">+44 7737 571541</a>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Post:</p>
                    <p className="text-muted-foreground">Crown Science Education Ltd</p>
                    <p className="text-muted-foreground">Leeds, United Kingdom</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Summary */}
            <Reveal>
              <div className="rounded-md border-2 border-border bg-muted/50 p-8 space-y-4">
                <h2 className="text-xl">Acceptance of Terms</h2>
                <p className="text-sm text-muted-foreground">
                  By enrolling in Crown Science Education Ltd services, you confirm that you have read, understood, and agree to these Terms and Conditions. These Terms should be read alongside our{" "}
                  <Link href="/privacy" className="link-underline text-foreground">Privacy Policy</Link> and{" "}
                  <Link href="/safeguarding" className="link-underline text-foreground">Safeguarding Policy</Link>.
                </p>
                <p className="text-sm text-muted-foreground pt-4 border-t border-border">
                  Crown Science Education Ltd is a registered company in England and Wales. These Terms and Conditions are effective from the date of your enrolment and remain in force for the duration of the tutoring arrangement.
                </p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>
    </main>
  );
}
