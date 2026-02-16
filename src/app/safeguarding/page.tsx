import { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Safeguarding Policy | Crown Science Education",
  description: "Safeguarding Policy for Crown Science Education - Our commitment to the safety, welfare, and protection of all students.",
};

export default function SafeguardingPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero section */}
      <section className="border-b border-border bg-gradient-to-b from-muted/30 to-background">
        <div className="page-container py-16 sm:py-20">
          <Reveal>
            <p className="eyebrow">Policy</p>
          </Reveal>
          <Reveal>
            <h1 className="mt-4">Safeguarding Policy</h1>
          </Reveal>
          <Reveal>
            <p className="mt-4 lead max-w-3xl">
              Our commitment to the safety, welfare, and protection of every student at Crown Science Education.
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

            {/* Commitment Statement */}
            <Reveal>
              <div className="space-y-4">
                <h2>Our Commitment</h2>
                <div className="rounded-md border-2 border-primary/20 bg-primary/5 p-6 space-y-4">
                  <p className="text-muted-foreground">
                    Crown Science Education Ltd is fully committed to safeguarding and promoting the welfare of all children and young people who use our services. We recognise that safeguarding is everyone&apos;s responsibility and take a proactive approach to ensuring a safe learning environment.
                  </p>
                  <p className="text-muted-foreground">
                    This policy applies to all tutors, staff, and any adults who interact with students through our services, whether in person or online. It is reviewed annually and updated to reflect current legislation and best practice.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* 1. Policy Statement */}
            <Reveal>
              <div className="space-y-4">
                <h2>1. Policy Statement</h2>
                <p className="text-muted-foreground">
                  Crown Science Education Ltd believes that all children and young people have the right to be safe, happy, and supported in their learning. We are committed to safeguarding practices that protect students from:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside ml-4">
                  <li>Physical, emotional, and sexual abuse</li>
                  <li>Neglect</li>
                  <li>Bullying, including cyberbullying</li>
                  <li>Radicalisation and extremism</li>
                  <li>Online harm and exploitation</li>
                  <li>Any other form of abuse or risk of significant harm</li>
                </ul>
                <p className="text-muted-foreground">
                  This policy has been developed in accordance with the following legislation and guidance:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside ml-4">
                  <li>Children Act 1989 and 2004</li>
                  <li>Working Together to Safeguard Children (2023)</li>
                  <li>Keeping Children Safe in Education (2024)</li>
                  <li>The Education Act 2002</li>
                  <li>Counter-Terrorism and Security Act 2015 (Prevent Duty)</li>
                  <li>UK GDPR and Data Protection Act 2018</li>
                </ul>
              </div>
            </Reveal>

            {/* 2. Designated Safeguarding Lead */}
            <Reveal>
              <div className="space-y-4">
                <h2>2. Designated Safeguarding Lead</h2>
                <p className="text-muted-foreground">
                  Crown Science Education Ltd has a Designated Safeguarding Lead (DSL) who is responsible for overseeing all safeguarding matters. The DSL is the first point of contact for any safeguarding concerns.
                </p>

                <div className="rounded-md border border-border bg-muted/30 p-6 space-y-2 text-sm">
                  <p className="font-medium text-foreground">Designated Safeguarding Lead</p>
                  <p className="text-muted-foreground">Crown Science Education Ltd</p>
                  <p className="text-muted-foreground">Email: <a href="mailto:taiwoteaching@gmail.com" className="link-underline text-foreground">taiwoteaching@gmail.com</a></p>
                  <p className="text-muted-foreground">Phone: <a href="tel:+447737571541" className="link-underline text-foreground">+44 7737 571541</a></p>
                </div>

                <p className="text-muted-foreground">
                  The DSL is responsible for:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside ml-4">
                  <li>Acting as the main point of contact for safeguarding concerns</li>
                  <li>Referring cases of suspected abuse or risk to the relevant local authority and/or police</li>
                  <li>Keeping detailed, secure safeguarding records</li>
                  <li>Ensuring all tutors and staff receive appropriate safeguarding training</li>
                  <li>Liaising with external agencies when necessary</li>
                  <li>Reviewing and updating this policy annually</li>
                </ul>
              </div>
            </Reveal>

            {/* 3. Safer Recruitment */}
            <Reveal>
              <div className="space-y-4">
                <h2>3. Safer Recruitment &amp; Vetting</h2>
                <p className="text-muted-foreground">
                  Crown Science Education Ltd follows robust safer recruitment practices to ensure that all individuals working with children are suitable to do so.
                </p>

                <div className="space-y-3">
                  <div className="border-l-2 border-primary/30 pl-4">
                    <h3 className="text-lg font-medium">DBS Checks</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      All tutors are subject to enhanced Disclosure and Barring Service (DBS) checks, including a barred list check, before commencing work with students. DBS checks are renewed periodically.
                    </p>
                  </div>

                  <div className="border-l-2 border-primary/30 pl-4">
                    <h3 className="text-lg font-medium">References &amp; Verification</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      All tutors undergo thorough reference checks, identity verification, and qualification verification before being appointed. Any gaps in employment history are explored and documented.
                    </p>
                  </div>

                  <div className="border-l-2 border-primary/30 pl-4">
                    <h3 className="text-lg font-medium">Right to Work</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      We verify the right to work in the UK for all tutors and staff in accordance with current legislation.
                    </p>
                  </div>

                  <div className="border-l-2 border-primary/30 pl-4">
                    <h3 className="text-lg font-medium">Ongoing Suitability</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      We monitor the ongoing suitability of all tutors and staff through regular supervision, performance reviews, and by requiring the disclosure of any relevant changes in circumstances.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* 4. Online Safety */}
            <Reveal>
              <div className="space-y-4">
                <h2>4. Online Safety</h2>
                <p className="text-muted-foreground">
                  As a provider of online tutoring, Crown Science Education Ltd takes online safety extremely seriously and implements the following measures:
                </p>

                <div className="space-y-4">
                  <div className="rounded-md border-2 border-primary/20 bg-primary/5 p-6 space-y-4">
                    <div>
                      <h3 className="text-lg font-medium">Lesson Recording</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        All online lessons are recorded by Crown Science Education Ltd for safeguarding and quality assurance purposes. Recordings are stored securely and access is restricted to authorised personnel only. Recordings are retained in accordance with our data retention policy and deleted when no longer required.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium">Supervised Environment</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Parents and guardians must ensure that students under 18 are in a supervised, appropriate location during online lessons. The learning environment should be in a communal area of the home (e.g. living room or kitchen), not in a bedroom with the door closed.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium">Professional Boundaries</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        All communication between tutors and students takes place through official Crown channels. Tutors will not communicate with students via personal social media, messaging apps, or any other unofficial platform.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium">Platform Security</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Our online learning platform uses secure, encrypted connections. Access is controlled through individual login credentials that should not be shared with others.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* 5. Recognising Abuse */}
            <Reveal>
              <div className="space-y-4">
                <h2>5. Recognising Signs of Abuse</h2>
                <p className="text-muted-foreground">
                  All tutors and staff at Crown Science Education Ltd are trained to recognise potential indicators of abuse and neglect. While these signs do not necessarily confirm abuse, they may indicate a need for further assessment:
                </p>

                <div className="space-y-4">
                  <div className="border-l-2 border-secondary/40 pl-4">
                    <h3 className="text-base font-medium">Physical Abuse</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Unexplained injuries, reluctance to discuss injuries, flinching at physical contact, wearing clothing to cover injuries.
                    </p>
                  </div>

                  <div className="border-l-2 border-secondary/40 pl-4">
                    <h3 className="text-base font-medium">Emotional Abuse</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Sudden changes in behaviour, excessive fear of making mistakes, lack of confidence, withdrawal from social interaction, age-inappropriate behaviours.
                    </p>
                  </div>

                  <div className="border-l-2 border-secondary/40 pl-4">
                    <h3 className="text-base font-medium">Sexual Abuse</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Age-inappropriate sexual behaviour or knowledge, avoidance of a specific person, changes in behaviour, difficulty sitting or walking.
                    </p>
                  </div>

                  <div className="border-l-2 border-secondary/40 pl-4">
                    <h3 className="text-base font-medium">Neglect</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Poor hygiene or appearance, constant hunger, frequent absence, lack of appropriate clothing, untreated medical conditions.
                    </p>
                  </div>

                  <div className="border-l-2 border-secondary/40 pl-4">
                    <h3 className="text-base font-medium">Online Harm</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Secretive online activity, distress after using devices, receipt of unexplained gifts, age-inappropriate content on devices.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* 6. Reporting Concerns */}
            <Reveal>
              <div className="space-y-4">
                <h2>6. Reporting Concerns</h2>
                <p className="text-muted-foreground">
                  If anyone has a safeguarding concern about a student, it is essential that they act on it immediately. The welfare of the child is always the overriding priority.
                </p>

                <div className="rounded-md border-2 border-primary/20 bg-primary/5 p-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-medium">How to Report a Concern</h3>
                    <ol className="mt-3 space-y-3 text-sm text-muted-foreground list-decimal list-inside ml-4">
                      <li><strong>Contact the DSL immediately</strong> &mdash; report concerns to the Designated Safeguarding Lead by phone or email</li>
                      <li><strong>Record the concern</strong> &mdash; write down what was observed, heard, or disclosed as soon as possible, using the child&apos;s own words where applicable</li>
                      <li><strong>Do not investigate</strong> &mdash; gathering evidence or questioning the child is not your role; leave this to the appropriate authorities</li>
                      <li><strong>Maintain confidentiality</strong> &mdash; share concerns only with the DSL and relevant authorities; do not discuss with others</li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">If a Child Makes a Disclosure</h3>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc list-inside ml-4">
                      <li>Listen carefully without interrupting</li>
                      <li>Reassure the child that they have done the right thing in telling you</li>
                      <li>Do not promise to keep it a secret &mdash; explain that you may need to tell someone who can help</li>
                      <li>Do not ask leading questions; let the child explain in their own words</li>
                      <li>Record the disclosure accurately and report to the DSL without delay</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* 7. Referral Procedures */}
            <Reveal>
              <div className="space-y-4">
                <h2>7. Referral Procedures</h2>
                <p className="text-muted-foreground">
                  When a safeguarding concern is raised, the DSL will follow a structured process:
                </p>

                <div className="space-y-3">
                  <div className="border-l-2 border-primary/30 pl-4">
                    <h3 className="text-lg font-medium">Assessment</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The DSL will assess the concern and determine whether a referral to children&apos;s social care, the police, or another agency is appropriate.
                    </p>
                  </div>

                  <div className="border-l-2 border-primary/30 pl-4">
                    <h3 className="text-lg font-medium">Referral</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      If there is a risk of significant harm, the DSL will make a referral to the local authority children&apos;s social care team without delay. In an emergency, the police will be contacted immediately.
                    </p>
                  </div>

                  <div className="border-l-2 border-primary/30 pl-4">
                    <h3 className="text-lg font-medium">Record Keeping</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Detailed records of all concerns, discussions, decisions, and actions are maintained securely. These records are kept confidential and stored separately from academic records.
                    </p>
                  </div>

                  <div className="border-l-2 border-primary/30 pl-4">
                    <h3 className="text-lg font-medium">Parental Notification</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Parents will normally be informed of any concerns or referrals, unless doing so would put the child at further risk or compromise an investigation.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* 8. Prevent Duty */}
            <Reveal>
              <div className="space-y-4">
                <h2>8. Prevent Duty</h2>
                <p className="text-muted-foreground">
                  Crown Science Education Ltd is committed to fulfilling its duty under the Counter-Terrorism and Security Act 2015 (the Prevent Duty) to have due regard to the need to prevent people from being drawn into terrorism.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside ml-4">
                  <li>All tutors receive training on the Prevent Duty and recognising signs of radicalisation</li>
                  <li>We promote fundamental British values: democracy, the rule of law, individual liberty, and mutual respect and tolerance</li>
                  <li>Any concerns about radicalisation will be reported to the DSL, who will assess and refer to the Channel programme or police as appropriate</li>
                </ul>
              </div>
            </Reveal>

            {/* 9. Training */}
            <Reveal>
              <div className="space-y-4">
                <h2>9. Training &amp; Awareness</h2>
                <p className="text-muted-foreground">
                  All tutors and staff at Crown Science Education Ltd receive comprehensive safeguarding training to ensure they are equipped to recognise concerns and act appropriately.
                </p>

                <div className="rounded-md border border-border bg-muted/30 p-6 space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium text-foreground">Induction Training:</span>
                    <span className="text-muted-foreground">Before working with students</span>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="flex justify-between">
                    <span className="font-medium text-foreground">Refresher Training:</span>
                    <span className="text-muted-foreground">Annually</span>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="flex justify-between">
                    <span className="font-medium text-foreground">Prevent Duty:</span>
                    <span className="text-muted-foreground">Included in induction &amp; refresher</span>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="flex justify-between">
                    <span className="font-medium text-foreground">Online Safety:</span>
                    <span className="text-muted-foreground">Included in induction &amp; refresher</span>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="flex justify-between">
                    <span className="font-medium text-foreground">DSL Training:</span>
                    <span className="text-muted-foreground">Every two years, with regular updates</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* 10. Whistleblowing */}
            <Reveal>
              <div className="space-y-4">
                <h2>10. Whistleblowing</h2>
                <p className="text-muted-foreground">
                  Crown Science Education Ltd recognises that there may be circumstances where a member of staff or a parent needs to raise a concern about the conduct of another adult within the organisation.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside ml-4">
                  <li>All staff and parents are encouraged to raise concerns about unsafe or unethical practices</li>
                  <li>Concerns can be raised with the DSL or directly with the relevant local authority</li>
                  <li>Whistleblowers will be protected from reprisal in accordance with the Public Interest Disclosure Act 1998</li>
                  <li>All reports will be taken seriously, investigated promptly, and handled confidentially</li>
                </ul>
              </div>
            </Reveal>

            {/* 11. Peer-on-Peer Abuse */}
            <Reveal>
              <div className="space-y-4">
                <h2>11. Peer-on-Peer Abuse</h2>
                <p className="text-muted-foreground">
                  Crown Science Education Ltd recognises that abuse can occur between children and young people. We take a zero-tolerance approach to peer-on-peer abuse in any form, including:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside ml-4">
                  <li>Bullying, including cyberbullying</li>
                  <li>Physical or verbal abuse</li>
                  <li>Sexual harassment or violence</li>
                  <li>Sexting or sharing inappropriate images</li>
                  <li>Initiation or hazing activities</li>
                </ul>
                <p className="text-muted-foreground">
                  Any incidents of peer-on-peer abuse will be reported to the DSL, investigated thoroughly, and addressed with appropriate action including, where necessary, referral to external agencies.
                </p>
              </div>
            </Reveal>

            {/* 12. Information Sharing */}
            <Reveal>
              <div className="space-y-4">
                <h2>12. Information Sharing &amp; Confidentiality</h2>
                <p className="text-muted-foreground">
                  Crown Science Education Ltd will share information with relevant agencies when it is necessary to safeguard a child. We follow the principle that safeguarding concerns override the duty of confidentiality.
                </p>

                <div className="space-y-3">
                  <div className="border-l-2 border-secondary/40 pl-4">
                    <h3 className="text-base font-medium">When We May Share Information</h3>
                    <ul className="mt-2 space-y-2 text-sm text-muted-foreground list-disc list-inside ml-4">
                      <li>When there is a safeguarding concern and sharing is in the child&apos;s best interest</li>
                      <li>When required by law, court order, or statutory obligation</li>
                      <li>When requested by a statutory safeguarding partner (e.g. police, children&apos;s social care)</li>
                    </ul>
                  </div>

                  <div className="border-l-2 border-secondary/40 pl-4">
                    <h3 className="text-base font-medium">How We Protect Information</h3>
                    <ul className="mt-2 space-y-2 text-sm text-muted-foreground list-disc list-inside ml-4">
                      <li>Safeguarding records are kept securely and separately from other records</li>
                      <li>Access is restricted to the DSL and authorised personnel only</li>
                      <li>Data is handled in compliance with UK GDPR and the Data Protection Act 2018</li>
                    </ul>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  For more information on how we handle personal data, see our{" "}
                  <Link href="/privacy" className="link-underline text-foreground">Privacy Policy</Link>.
                </p>
              </div>
            </Reveal>

            {/* 13. Review */}
            <Reveal>
              <div className="space-y-4">
                <h2>13. Policy Review</h2>
                <p className="text-muted-foreground">
                  This Safeguarding Policy is reviewed annually by the Designated Safeguarding Lead to ensure it remains current, effective, and aligned with the latest legislation and guidance. The policy may also be updated at any time in response to changes in legislation, statutory guidance, or identified gaps in practice.
                </p>
                <p className="text-muted-foreground">
                  Any significant changes to this policy will be communicated to all families and staff in writing.
                </p>
              </div>
            </Reveal>

            {/* Emergency Contacts */}
            <Reveal>
              <div className="space-y-4">
                <h2>14. Key Contacts &amp; Helplines</h2>
                <p className="text-muted-foreground">
                  If you have an immediate safeguarding concern, please use one of the following contacts:
                </p>

                <div className="rounded-md border-2 border-primary/20 bg-primary/5 p-6 space-y-4 text-sm">
                  <div>
                    <p className="font-medium text-foreground">Crown Science Education DSL</p>
                    <p className="text-muted-foreground">Email: <a href="mailto:taiwoteaching@gmail.com" className="link-underline text-foreground">taiwoteaching@gmail.com</a></p>
                    <p className="text-muted-foreground">Phone: <a href="tel:+447737571541" className="link-underline text-foreground">+44 7737 571541</a></p>
                  </div>
                </div>

                <div className="rounded-md border border-border bg-muted/30 p-6 space-y-4 text-sm">
                  <p className="font-medium text-foreground">External Safeguarding Contacts</p>

                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="font-medium text-foreground">NSPCC Helpline</span>
                        <p className="text-muted-foreground text-xs">For adults concerned about a child</p>
                      </div>
                      <span className="text-foreground font-medium">0808 800 5000</span>
                    </div>
                    <div className="h-px bg-border" />
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="font-medium text-foreground">Childline</span>
                        <p className="text-muted-foreground text-xs">For children and young people</p>
                      </div>
                      <span className="text-foreground font-medium">0800 1111</span>
                    </div>
                    <div className="h-px bg-border" />
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="font-medium text-foreground">Police</span>
                        <p className="text-muted-foreground text-xs">Non-emergency</p>
                      </div>
                      <span className="text-foreground font-medium">101</span>
                    </div>
                    <div className="h-px bg-border" />
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="font-medium text-foreground">Emergency Services</span>
                        <p className="text-muted-foreground text-xs">If a child is in immediate danger</p>
                      </div>
                      <span className="text-foreground font-medium">999</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Summary */}
            <Reveal>
              <div className="rounded-md border-2 border-border bg-muted/50 p-8 space-y-4">
                <h2 className="text-xl">Safeguarding Summary</h2>
                <p className="text-sm text-muted-foreground">
                  Crown Science Education Ltd takes its safeguarding responsibilities seriously. Key commitments include:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside ml-4">
                  <li>All tutors hold enhanced DBS checks and receive regular safeguarding training</li>
                  <li>All online lessons are recorded for safeguarding and quality assurance</li>
                  <li>A Designated Safeguarding Lead is in place to handle all concerns</li>
                  <li>Robust procedures for reporting, recording, and referring concerns</li>
                  <li>Commitment to the Prevent Duty and promoting British values</li>
                  <li>Strict professional boundaries and online safety measures</li>
                  <li>Annual policy review to ensure alignment with current legislation</li>
                </ul>
                <p className="text-sm text-muted-foreground pt-4 border-t border-border">
                  This Safeguarding Policy should be read alongside our{" "}
                  <Link href="/terms" className="link-underline text-foreground">Terms &amp; Conditions</Link> and{" "}
                  <Link href="/privacy" className="link-underline text-foreground">Privacy Policy</Link>.
                  If you have any questions about this policy, please do not hesitate to contact us.
                </p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>
    </main>
  );
}
