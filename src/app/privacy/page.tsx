import { Metadata } from "next";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Privacy Policy | Crown Science Education",
  description: "Privacy Policy for Crown Science Education - How we collect, use, and protect your personal data in compliance with UK GDPR.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero section */}
      <section className="border-b border-border bg-gradient-to-b from-muted/30 to-background">
        <div className="page-container py-16 sm:py-20">
          <Reveal>
            <p className="eyebrow">Legal</p>
          </Reveal>
          <Reveal>
            <h1 className="mt-4">Privacy Policy</h1>
          </Reveal>
          <Reveal>
            <p className="mt-4 lead max-w-3xl">
              How Crown Science Education collects, uses, and protects your personal information.
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
                <h2>1. Introduction</h2>
                <p className="text-muted-foreground">
                  Crown Science Education (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our educational services and website.
                </p>
                <p className="text-muted-foreground">
                  We are a data controller under the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. We take our responsibilities under data protection legislation seriously, particularly when handling information about children and young people.
                </p>
              </div>
            </Reveal>

            {/* Who We Are */}
            <Reveal>
              <div className="space-y-4">
                <h2>2. Who We Are</h2>
                <div className="rounded-md border border-border bg-muted/30 p-6 space-y-2 text-sm">
                  <p className="font-medium text-foreground">Data Controller:</p>
                  <p className="text-muted-foreground">Crown Science Education</p>
                  <p className="text-muted-foreground">London, United Kingdom</p>
                  <p className="text-muted-foreground">Email: admissions@crownscience.edu</p>
                  <p className="text-muted-foreground">Phone: 020 7946 0958</p>
                </div>
              </div>
            </Reveal>

            {/* Information We Collect */}
            <Reveal>
              <div className="space-y-4">
                <h2>3. Information We Collect</h2>
                <p className="text-muted-foreground">
                  We collect and process the following types of personal information:
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium">3.1 Student Information</h3>
                    <ul className="mt-2 space-y-2 text-sm text-muted-foreground list-disc list-inside ml-4">
                      <li>Full name and date of birth</li>
                      <li>Academic year and current educational level</li>
                      <li>Subject interests and learning goals</li>
                      <li>Academic performance and progress records</li>
                      <li>Learning preferences and educational needs</li>
                      <li>Session attendance and participation records</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">3.2 Parent/Guardian Information</h3>
                    <ul className="mt-2 space-y-2 text-sm text-muted-foreground list-disc list-inside ml-4">
                      <li>Full name and contact details (email, phone number)</li>
                      <li>Billing address and payment information</li>
                      <li>Relationship to student</li>
                      <li>Communication preferences</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">3.3 Consultation and Enquiry Data</h3>
                    <ul className="mt-2 space-y-2 text-sm text-muted-foreground list-disc list-inside ml-4">
                      <li>Information provided in consultation booking forms</li>
                      <li>Questions, concerns, or specific educational requirements</li>
                      <li>Preferred contact methods and availability</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">3.4 Technical Information</h3>
                    <ul className="mt-2 space-y-2 text-sm text-muted-foreground list-disc list-inside ml-4">
                      <li>IP address and browser type</li>
                      <li>Device information and operating system</li>
                      <li>Website usage data and navigation patterns</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* How We Use Your Information */}
            <Reveal>
              <div className="space-y-4">
                <h2>4. How We Use Your Information</h2>
                <p className="text-muted-foreground">
                  We use your personal information for the following purposes:
                </p>

                <div className="space-y-4">
                  <div className="border-l-2 border-primary/30 pl-4">
                    <h3 className="text-lg font-medium">4.1 Providing Educational Services</h3>
                    <ul className="mt-2 space-y-2 text-sm text-muted-foreground list-disc list-inside ml-4">
                      <li>Delivering tutoring sessions and educational content</li>
                      <li>Tracking student progress and academic development</li>
                      <li>Creating personalized learning plans</li>
                      <li>Providing access to our learning management system</li>
                      <li>Communicating with students and parents about educational matters</li>
                    </ul>
                  </div>

                  <div className="border-l-2 border-primary/30 pl-4">
                    <h3 className="text-lg font-medium">4.2 Administrative Purposes</h3>
                    <ul className="mt-2 space-y-2 text-sm text-muted-foreground list-disc list-inside ml-4">
                      <li>Processing enrollments and consultation bookings</li>
                      <li>Managing billing and payment processing</li>
                      <li>Scheduling tutoring sessions</li>
                      <li>Responding to enquiries and support requests</li>
                      <li>Maintaining student and family records</li>
                    </ul>
                  </div>

                  <div className="border-l-2 border-primary/30 pl-4">
                    <h3 className="text-lg font-medium">4.3 Communication and Updates</h3>
                    <ul className="mt-2 space-y-2 text-sm text-muted-foreground list-disc list-inside ml-4">
                      <li>Sending progress reports and academic updates</li>
                      <li>Providing session reminders and schedule changes</li>
                      <li>Sharing educational resources and materials</li>
                      <li>Sending service announcements and important notices</li>
                    </ul>
                  </div>

                  <div className="border-l-2 border-primary/30 pl-4">
                    <h3 className="text-lg font-medium">4.4 Legal and Safety Obligations</h3>
                    <ul className="mt-2 space-y-2 text-sm text-muted-foreground list-disc list-inside ml-4">
                      <li>Complying with legal and regulatory requirements</li>
                      <li>Safeguarding the welfare of children and young people</li>
                      <li>Protecting against fraud and unauthorized access</li>
                      <li>Maintaining records for accountability and quality assurance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Legal Basis for Processing */}
            <Reveal>
              <div className="space-y-4">
                <h2>5. Legal Basis for Processing</h2>
                <p className="text-muted-foreground">
                  Under UK GDPR, we rely on the following legal bases for processing your personal information:
                </p>

                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="font-medium text-foreground min-w-[140px]">Contract:</span>
                    <span>Processing is necessary to fulfill our educational services contract with you</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-medium text-foreground min-w-[140px]">Consent:</span>
                    <span>Where you have given explicit consent for specific processing activities (particularly for children&apos;s data)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-medium text-foreground min-w-[140px]">Legal Obligation:</span>
                    <span>Processing required to comply with legal obligations, including safeguarding duties</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-medium text-foreground min-w-[140px]">Legitimate Interests:</span>
                    <span>Processing necessary for our legitimate interests in operating an educational practice, provided this does not override your rights</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Children's Privacy */}
            <Reveal>
              <div className="space-y-4">
                <h2>6. Children&apos;s Privacy</h2>
                <div className="rounded-md border-2 border-primary/20 bg-primary/5 p-6 space-y-4">
                  <p className="text-muted-foreground">
                    We recognize that we process personal data about children and young people, and we take this responsibility extremely seriously. We implement additional safeguards to protect children&apos;s information.
                  </p>

                  <div className="space-y-3">
                    <div>
                      <h3 className="text-lg font-medium">Parental Consent</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        For students under 16 years of age, we obtain verifiable parental consent before collecting or processing personal information. Parents and guardians have the right to review, amend, or request deletion of their child&apos;s information at any time.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium">Data Minimization</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        We only collect information that is necessary for providing our educational services and ensuring the safety and progress of students.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium">Safeguarding</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        We maintain strict safeguarding policies in accordance with UK safeguarding legislation. If we become aware of any safeguarding concerns, we may be required to share information with relevant authorities, even without consent, where necessary to protect a child.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Information Sharing */}
            <Reveal>
              <div className="space-y-4">
                <h2>7. How We Share Your Information</h2>
                <p className="text-muted-foreground">
                  We do not sell your personal information. We may share your information with the following parties:
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium">7.1 Service Providers</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      We work with trusted third-party service providers who assist in delivering our services:
                    </p>
                    <ul className="mt-2 space-y-2 text-sm text-muted-foreground list-disc list-inside ml-4">
                      <li><strong>Togever:</strong> Learning management system and booking platform</li>
                      <li><strong>Payment processors:</strong> For secure payment processing (we do not store full payment card details)</li>
                      <li><strong>Communication tools:</strong> Email and messaging services for parent communications</li>
                      <li><strong>Hosting providers:</strong> For secure data storage and website hosting</li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-2">
                      All service providers are carefully selected and required to maintain appropriate security measures and process data only as instructed by us.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">7.2 Legal Requirements</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      We may disclose your information if required by law, court order, or government regulation, or to protect the rights, property, or safety of Crown Science Education, our students, or others.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">7.3 Safeguarding Authorities</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Where we have safeguarding concerns about a child, we may share information with relevant authorities including social services, police, or educational welfare services.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Data Retention */}
            <Reveal>
              <div className="space-y-4">
                <h2>8. Data Retention</h2>
                <p className="text-muted-foreground">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                </p>

                <div className="rounded-md border border-border bg-muted/30 p-6 space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium text-foreground">Student academic records:</span>
                    <span className="text-muted-foreground">Up to 7 years after service ends</span>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="flex justify-between">
                    <span className="font-medium text-foreground">Financial records:</span>
                    <span className="text-muted-foreground">7 years (HMRC requirement)</span>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="flex justify-between">
                    <span className="font-medium text-foreground">Consultation enquiries:</span>
                    <span className="text-muted-foreground">2 years if not enrolled</span>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="flex justify-between">
                    <span className="font-medium text-foreground">Marketing communications:</span>
                    <span className="text-muted-foreground">Until you withdraw consent</span>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="flex justify-between">
                    <span className="font-medium text-foreground">Safeguarding records:</span>
                    <span className="text-muted-foreground">Per statutory guidance</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Data Security */}
            <Reveal>
              <div className="space-y-4">
                <h2>9. Data Security</h2>
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>

                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">Our security measures include:</p>
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside ml-4">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Secure authentication and access controls</li>
                    <li>Regular security assessments and updates</li>
                    <li>Staff training on data protection and security</li>
                    <li>Secure backup and disaster recovery procedures</li>
                    <li>Incident response and breach notification procedures</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-4">
                    While we strive to protect your personal information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but continuously work to maintain the highest standards of data protection.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Your Rights */}
            <Reveal>
              <div className="space-y-4">
                <h2>10. Your Rights Under UK GDPR</h2>
                <p className="text-muted-foreground">
                  You have the following rights regarding your personal information:
                </p>

                <div className="space-y-4">
                  <div className="border-l-2 border-secondary/40 pl-4">
                    <h3 className="text-base font-medium">Right to Access</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      You can request a copy of the personal information we hold about you or your child.
                    </p>
                  </div>

                  <div className="border-l-2 border-secondary/40 pl-4">
                    <h3 className="text-base font-medium">Right to Rectification</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      You can request that we correct any inaccurate or incomplete information.
                    </p>
                  </div>

                  <div className="border-l-2 border-secondary/40 pl-4">
                    <h3 className="text-base font-medium">Right to Erasure</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      You can request deletion of your personal information, subject to certain legal exceptions (e.g., we may need to retain information for legal or safeguarding purposes).
                    </p>
                  </div>

                  <div className="border-l-2 border-secondary/40 pl-4">
                    <h3 className="text-base font-medium">Right to Restrict Processing</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      You can request that we limit how we use your information in certain circumstances.
                    </p>
                  </div>

                  <div className="border-l-2 border-secondary/40 pl-4">
                    <h3 className="text-base font-medium">Right to Data Portability</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      You can request to receive your personal information in a structured, commonly used format.
                    </p>
                  </div>

                  <div className="border-l-2 border-secondary/40 pl-4">
                    <h3 className="text-base font-medium">Right to Object</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      You can object to processing based on legitimate interests or for direct marketing purposes.
                    </p>
                  </div>

                  <div className="border-l-2 border-secondary/40 pl-4">
                    <h3 className="text-base font-medium">Right to Withdraw Consent</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Where processing is based on consent, you can withdraw consent at any time.
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-md border border-border bg-muted/30 p-4">
                  <p className="text-sm text-muted-foreground">
                    To exercise any of these rights, please contact us at <a href="mailto:admissions@crownscience.edu" className="link-underline text-foreground">admissions@crownscience.edu</a>. We will respond to your request within one month.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Cookies */}
            <Reveal>
              <div className="space-y-4">
                <h2>11. Cookies and Tracking Technologies</h2>
                <p className="text-muted-foreground">
                  We use cookies and similar tracking technologies to improve your experience on our website and understand how it is used.
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium">What Are Cookies?</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Cookies are small text files stored on your device when you visit our website. They help us remember your preferences and understand how you use our site.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">Types of Cookies We Use</h3>
                    <ul className="mt-2 space-y-2 text-sm text-muted-foreground list-disc list-inside ml-4">
                      <li><strong>Essential Cookies:</strong> Necessary for the website to function properly</li>
                      <li><strong>Performance Cookies:</strong> Help us understand how visitors use our website</li>
                      <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">Managing Cookies</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      You can control and manage cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of our website.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* International Transfers */}
            <Reveal>
              <div className="space-y-4">
                <h2>12. International Data Transfers</h2>
                <p className="text-muted-foreground">
                  We primarily process data within the United Kingdom. If we transfer personal information outside the UK, we ensure appropriate safeguards are in place, such as:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside ml-4">
                  <li>Transferring to countries with adequacy decisions from the UK government</li>
                  <li>Using standard contractual clauses approved by UK authorities</li>
                  <li>Ensuring the recipient has appropriate data protection certifications</li>
                </ul>
              </div>
            </Reveal>

            {/* Third-Party Links */}
            <Reveal>
              <div className="space-y-4">
                <h2>13. Third-Party Websites</h2>
                <p className="text-muted-foreground">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </div>
            </Reveal>

            {/* Changes to Policy */}
            <Reveal>
              <div className="space-y-4">
                <h2>14. Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside ml-4">
                  <li>Posting the updated policy on our website with a new &quot;Last updated&quot; date</li>
                  <li>Sending an email notification to registered families</li>
                  <li>Prominently displaying a notice on our website</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Your continued use of our services after changes to this Privacy Policy constitutes acceptance of the updated terms.
                </p>
              </div>
            </Reveal>

            {/* Complaints */}
            <Reveal>
              <div className="space-y-4">
                <h2>15. Right to Complain</h2>
                <p className="text-muted-foreground">
                  If you have concerns about how we handle your personal information, you have the right to lodge a complaint with the UK supervisory authority:
                </p>
                <div className="rounded-md border border-border bg-muted/30 p-6 space-y-2 text-sm">
                  <p className="font-medium text-foreground">Information Commissioner&apos;s Office (ICO)</p>
                  <p className="text-muted-foreground">Wycliffe House, Water Lane</p>
                  <p className="text-muted-foreground">Wilmslow, Cheshire SK9 5AF</p>
                  <p className="text-muted-foreground">Telephone: 0303 123 1113</p>
                  <p className="text-muted-foreground">Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="link-underline text-foreground">ico.org.uk</a></p>
                </div>
                <p className="text-muted-foreground mt-4">
                  We would appreciate the opportunity to address your concerns directly, so please contact us first before escalating to the ICO.
                </p>
              </div>
            </Reveal>

            {/* Contact Information */}
            <Reveal>
              <div className="space-y-4">
                <h2>16. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="rounded-md border-2 border-primary/20 bg-primary/5 p-6 space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-foreground">Email:</p>
                    <a href="mailto:admissions@crownscience.edu" className="link-underline text-foreground">admissions@crownscience.edu</a>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone:</p>
                    <a href="tel:02079460958" className="link-underline text-foreground">020 7946 0958</a>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Post:</p>
                    <p className="text-muted-foreground">Crown Science Education</p>
                    <p className="text-muted-foreground">London, United Kingdom</p>
                  </div>
                </div>
                <p className="text-muted-foreground mt-4">
                  We aim to respond to all enquiries within 48 hours during business days.
                </p>
              </div>
            </Reveal>

            {/* Summary */}
            <Reveal>
              <div className="rounded-md border-2 border-border bg-muted/50 p-8 space-y-4">
                <h2 className="text-xl">Privacy Policy Summary</h2>
                <p className="text-sm text-muted-foreground">
                  This Privacy Policy explains how Crown Science Education collects, uses, and protects personal information about students and their families. Key points include:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside ml-4">
                  <li>We collect information necessary to provide high-quality educational services</li>
                  <li>We process children&apos;s data with parental consent and extra safeguards</li>
                  <li>We comply with UK GDPR and Data Protection Act 2018</li>
                  <li>We implement robust security measures to protect your data</li>
                  <li>You have rights to access, correct, or delete your information</li>
                  <li>We do not sell personal information to third parties</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4 pt-4 border-t border-border">
                  <strong>Important:</strong> This Privacy Policy should be read by parents/guardians before enrolling students in our services. By using our services, you acknowledge that you have read, understood, and agree to this Privacy Policy.
                </p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>
    </main>
  );
}
