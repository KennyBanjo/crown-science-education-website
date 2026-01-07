import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { Stagger } from "@/components/motion/stagger";
import { SectionDividerLine } from "@/components/motion/section-divider-line";

export default function Home() {
  return (
    <div className="bg-background">
      <section className="section" aria-labelledby="intro-title">
        <div className="page-container">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
            <Stagger className="space-y-6">
              <p className="eyebrow">Crown Science Education</p>
              <h1 id="intro-title" className="text-balance">
                Science taught with calm rigour, from Year 7 to GCSE.
              </h1>
              <div className="h-px w-20 bg-border" aria-hidden="true" />
              <p className="lead">
                Crown Science Education is a single-tutor UK practice focused
                on confidence, progression, and exam readiness.
              </p>
              <p className="text-muted-foreground">
                Every pupil works directly with me, building a steady academic
                relationship with clear expectations.
              </p>
              <p className="text-muted-foreground">
                Sessions are one-to-one, with occasional small-group revision
                workshops, strengthening core understanding before moving into
                exam technique and independent thinking.
              </p>
              <div className="flex flex-wrap items-center gap-5">
                <Button size="lg" asChild>
                  <Link href="/consultation">Book a consultation</Link>
                </Button>
                <Link
                  href="https://crown-lms.vercel.app/login?t=family"
                  className="link-underline text-sm text-muted-foreground hover:text-foreground"
                >
                  Portal login
                </Link>
              </div>
              <div className="space-y-3 border-l border-border pl-6 text-sm text-muted-foreground">
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  Practice notes
                </p>
                <p>
                  One tutor, consistent guidance from the first assessment to
                  exam season. Leeds-based tutoring with online sessions across
                  the UK. Families use a secure learning hub / student portal to
                  keep shared targets and notes in one calm place.
                </p>
              </div>
            </Stagger>
            <Reveal>
              <figure className="space-y-4">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md border border-border bg-muted">
                  <Image
                    src="/images/hero-student.webp"
                    alt="Student studying science at home"
                    fill
                    className="object-cover saturate-75 contrast-90 brightness-95"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                  <div
                    className="absolute inset-0 bg-background/20"
                    aria-hidden="true"
                  />
                </div>
                <figcaption className="text-sm text-muted-foreground">
                  Focused study supported by a calm, structured tutor.
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="method"
        className="section section-divider"
        aria-labelledby="method-title"
      >
        <SectionDividerLine />
        <Reveal>
          <div className="page-container">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
              <div className="space-y-5">
                <p className="eyebrow">The Crown method</p>
                <h2 id="method-title">Structure, expectations, outcomes.</h2>
                <p className="lead">
                  The tutor begins with a diagnostic conversation and a short
                  baseline task. From there, each lesson builds in a predictable
                  rhythm so pupils feel secure and challenged.
                </p>
              </div>
              <div className="divide-y divide-border">
                <div className="py-8">
                  <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                    Structure
                  </p>
                  <p className="mt-3 text-muted-foreground">
                    Lessons follow a clear sequence of recall, explanation,
                    guided practice, and independent questions.
                  </p>
                </div>
                <div className="py-8">
                  <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                    Expectations
                  </p>
                  <p className="mt-3 text-muted-foreground">
                    Homework is concise and purposeful. Pupils explain their
                    reasoning and refine their scientific vocabulary.
                  </p>
                </div>
                <div className="py-8">
                  <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                    Outcomes
                  </p>
                  <p className="mt-3 text-muted-foreground">
                    Confidence grows as knowledge becomes secure, and exam
                    responses become clear, accurate, and concise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section
        id="journey"
        className="section section-divider"
        aria-labelledby="journey-title"
      >
        <SectionDividerLine />
        <Reveal>
          <div className="page-container">
            <div className="space-y-6">
              <p className="eyebrow">Learning journey</p>
              <h2 id="journey-title">Guidance for each stage.</h2>
            </div>
            <div className="mt-8 grid gap-10 lg:grid-cols-2">
              <div className="space-y-4 border-t border-border pt-6">
                <h3>Years 7–9 foundations</h3>
                <p className="text-muted-foreground">
                  We focus on scientific literacy, curiosity, and core concepts in
                  biology, chemistry, and physics. Pupils learn how to explain
                  ideas clearly, using accurate terminology and structured
                  reasoning.
                </p>
              </div>
              <div className="space-y-4 border-t border-border pt-6">
                <h3>GCSE preparation</h3>
                <p className="text-muted-foreground">
                  Specification coverage is paired with exam technique. We
                  diagnose gaps, practise extended responses, and build revision
                  habits that remain steady through the exam season.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section
        id="progress"
        className="section section-divider"
        aria-labelledby="progress-title"
      >
        <SectionDividerLine />
        <Reveal>
          <div className="page-container">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
              <div className="space-y-5">
                <p className="eyebrow">Progress & communication</p>
                <h2 id="progress-title">Visible progress, calm accountability.</h2>
                <p className="lead">
                  Parents receive clear, timely updates without data overload.
                  Pupils know what is expected, and each term has a clear sense of
                  direction.
                </p>
              </div>
              <div className="space-y-5 text-muted-foreground">
                <div className="border-t border-border pt-5">
                  The tutor sends short written feedback after each teaching
                  block, focusing on understanding rather than just grades.
                </div>
                <div className="border-t border-border pt-5">
                  Half-termly summaries highlight progress, confidence, and next
                  steps for parents and pupils.
                </div>
                <div className="border-t border-border pt-5">
                  Goals are agreed together so pupils stay accountable and know
                  exactly what to practise between lessons.
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section
        id="tutor"
        className="section section-divider"
        aria-labelledby="tutor-title"
      >
        <SectionDividerLine />
        <Reveal>
          <div className="page-container">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
              <figure className="space-y-4">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md border border-border bg-muted">
                  <Image
                    src="/images/lead-tutor.png"
                    alt="Founder and lead science tutor"
                    fill
                    className="object-cover saturate-90 contrast-95"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                </div>
                <figcaption className="text-sm text-muted-foreground">
                  Founder and lead tutor, Crown Science Education.
                </figcaption>
              </figure>
              <div className="space-y-5">
                <p className="eyebrow">Your tutor</p>
                <h2 id="tutor-title">An experienced teacher, guiding every step.</h2>
                <p className="lead">
                  I am a qualified science teacher with more than a decade in the
                  classroom, supporting thousands of pupils in GCSE Physics,
                  Chemistry, and Biology.
                </p>
                <div className="divide-y divide-border">
                  <div className="py-6">
                    <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                      Teaching approach
                    </p>
                    <p className="mt-3 text-muted-foreground">
                      My teaching is warm, structured, and grounded in cognitive
                      science. Retrieval practice and guided questioning keep
                      pupils focused and motivated.
                    </p>
                  </div>
                  <div className="py-6">
                    <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                      Curriculum leadership
                    </p>
                    <p className="mt-3 text-muted-foreground">
                      As a former head of department, I create concise revision
                      materials and personalised booklets aligned to GCSE
                      specifications.
                    </p>
                  </div>
                  <div className="py-6">
                    <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                      Professional standing
                    </p>
                    <p className="mt-3 text-muted-foreground">
                      I hold national professional leadership qualifications and
                      maintain continuous professional development to keep
                      practice current.
                    </p>
                  </div>
                  <div className="py-6">
                    <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                      Session format
                    </p>
                    <p className="mt-3 text-muted-foreground">
                      Online 1:1 and small group sessions balance explanation,
                      practice, and precise feedback so pupils leave with a clear
                      next step.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section
        id="testimonials"
        className="section section-divider"
        aria-labelledby="testimonials-title"
      >
        <SectionDividerLine />
        <Reveal>
          <div className="page-container">
            <div className="space-y-6">
              <p className="eyebrow">Testimonials</p>
              <h2 id="testimonials-title">What families notice.</h2>
            </div>
            <div className="mt-10 grid gap-10 lg:grid-cols-2">
              <figure className="border-l border-border pl-6">
                <blockquote className="text-lg italic text-foreground">
                  &ldquo;Working with her each week brought calm to science lessons. The
                  focus on vocabulary and explanation made everything click.&rdquo;
                </blockquote>
                <figcaption className="mt-3 text-sm text-muted-foreground">
                  Parent of Year 8 pupil, Islington
                </figcaption>
              </figure>
              <figure className="border-l border-border pl-6">
                <blockquote className="text-lg italic text-foreground">
                  &ldquo;Her tutoring is structured but kind. I know exactly what to
                  revise each week and my confidence in GCSE papers has grown.&rdquo;
                </blockquote>
                <figcaption className="mt-3 text-sm text-muted-foreground">
                  GCSE student, Hertfordshire
                </figcaption>
              </figure>
              <figure className="border-l border-border pl-6">
                <blockquote className="text-lg italic text-foreground">
                  &ldquo;The portal makes everything simple. We can see what was covered,
                  what to practise next, and the resources in one place. It&rsquo;s taken
                  away the back-and-forth and helped us stay consistent between lessons.&rdquo;
                </blockquote>
                <figcaption className="mt-3 text-sm text-muted-foreground">
                  Parent of Year 10 pupil, London
                </figcaption>
              </figure>
              <figure className="border-l border-border pl-6">
                <blockquote className="text-lg italic text-foreground">
                  &ldquo;My daughter went from dreading chemistry to genuinely enjoying
                  it. The patient, methodical approach made all the difference.&rdquo;
                </blockquote>
                <figcaption className="mt-3 text-sm text-muted-foreground">
                  Parent of Year 9 pupil, Manchester
                </figcaption>
              </figure>
              <figure className="border-l border-border pl-6">
                <blockquote className="text-lg italic text-foreground">
                  &ldquo;I improved from a grade 4 to a grade 7 in physics. The exam
                  technique sessions were especially helpful for longer questions.&rdquo;
                </blockquote>
                <figcaption className="mt-3 text-sm text-muted-foreground">
                  GCSE student, Birmingham
                </figcaption>
              </figure>
              <figure className="border-l border-border pl-6">
                <blockquote className="text-lg italic text-foreground">
                  &ldquo;Having everything in the student portal keeps me organised. I know
                  exactly what I&rsquo;m working on each week, and I can rewatch the videos
                  and redo the questions before the next lesson.&rdquo;
                </blockquote>
                <figcaption className="mt-3 text-sm text-muted-foreground">
                  GCSE student, Hertfordshire
                </figcaption>
              </figure>
            </div>
          </div>
        </Reveal>
      </section>

      <section
        id="pricing"
        className="section section-divider"
        aria-labelledby="pricing-title"
      >
        <SectionDividerLine />
        <Reveal>
          <div className="page-container">
            <div className="space-y-5 max-w-2xl">
              <p className="eyebrow">Programmes</p>
              <h2 id="pricing-title">Two pathways to progress.</h2>
              <p className="lead">
                Choose the programme that fits your child&rsquo;s needs. Both include
                full access to resources, parent support, and termly reviews.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="space-y-5 rounded-md border border-border bg-card p-6 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-lg hover:shadow-foreground/5 hover:border-border/80">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                    Group programme
                  </p>
                  <h3 className="mt-2">Momentum</h3>
                </div>
                <p className="font-display text-4xl tracking-tight">
                  £250<span className="text-sm font-sans text-muted-foreground/60 ml-1">/month</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  Best for pupils building consistency and confidence over time.
                </p>
                <div className="h-px w-full bg-border" aria-hidden="true" />
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>3 sessions weekly (Tue, Thu, Fri)</li>
                  <li>45 minutes each session</li>
                  <li>Maximum 5 students per group</li>
                  <li>Delivered by qualified teachers</li>
                  <li>Strong recall through repetition and structure</li>
                </ul>
              </div>

              <div className="space-y-5 rounded-md border border-primary/30 bg-card p-6 ring-1 ring-primary/10 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/50 hover:ring-primary/20">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                    One-to-one
                  </p>
                  <h3 className="mt-2">Progress Accelerator</h3>
                </div>
                <p className="font-display text-4xl tracking-tight">
                  £495<span className="text-sm font-sans text-muted-foreground/60 ml-1">/month</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  Best for pupils needing rapid improvement or exam-focused intervention.
                </p>
                <div className="h-px w-full bg-border" aria-hidden="true" />
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>3 sessions weekly (Tue, Thu, Fri)</li>
                  <li>45 minutes each session</li>
                  <li>Fully personalised teaching</li>
                  <li>Targeted gap closure and focused exam preparation</li>
                  <li>Direct work with Mrs Adeyemi</li>
                </ul>
              </div>
            </div>

            <div className="mt-10 grid gap-8 border-t border-border pt-10 lg:grid-cols-2">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  Included in both programmes
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Curriculum-aligned planning</li>
                  <li>Weekly parent reports</li>
                  <li>Digital resources and walkthroughs</li>
                  <li>Termly progress reviews</li>
                  <li>Parent support Monday to Saturday</li>
                </ul>
              </div>
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  Expected outcomes
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Strong knowledge recall</li>
                  <li>Increased exam confidence</li>
                  <li>Clear progress toward Grade 7 to Grade 9</li>
                  <li>Better independent study habits</li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section
        id="consultation"
        className="section section-divider"
        aria-labelledby="consultation-title"
      >
        <SectionDividerLine />
        <Reveal>
          <div className="page-container">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-4">
                <p className="eyebrow">Consultation</p>
                <h2 id="consultation-title">Book a consultation.</h2>
                <p className="lead">
                  A short conversation helps us understand your goals, recommend
                  a steady plan for the term ahead, and confirm whether the
                  tutor&rsquo;s approach is the right fit.
                </p>
                <p className="text-sm text-muted-foreground">
                  There is no obligation following the consultation.
                </p>
              </div>
              <Button size="lg" asChild>
                <Link href="/consultation">Book a consultation</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Prefer to start by email? Write to admissions@crownscience.edu.
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
