import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-background">
      <section className="section" aria-labelledby="intro-title">
        <div className="page-container">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
            <div className="space-y-6">
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
                  href="/portal"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Student portal login
                </Link>
              </div>
              <div className="space-y-3 border-l border-border pl-6 text-sm text-muted-foreground">
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  Practice notes
                </p>
                <p>
                  One tutor, consistent guidance from the first assessment to
                  exam season. London-based tutoring with online sessions across
                  the UK. Families use a secure learning hub / student portal to
                  keep shared targets and notes in one calm place.
                </p>
              </div>
            </div>
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
          </div>
        </div>
      </section>

      <section
        id="method"
        className="section section-divider"
        aria-labelledby="method-title"
      >
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
              <div className="py-6">
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  Structure
                </p>
                <p className="mt-3 text-muted-foreground">
                  Lessons follow a clear sequence of recall, explanation,
                  guided practice, and independent questions.
                </p>
              </div>
              <div className="py-6">
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  Expectations
                </p>
                <p className="mt-3 text-muted-foreground">
                  Homework is concise and purposeful. Pupils explain their
                  reasoning and refine their scientific vocabulary.
                </p>
              </div>
              <div className="py-6">
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
      </section>

      <section
        id="journey"
        className="section section-divider"
        aria-labelledby="journey-title"
      >
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
      </section>

      <section
        id="progress"
        className="section section-divider"
        aria-labelledby="progress-title"
      >
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
      </section>

      <section
        id="tutor"
        className="section section-divider"
        aria-labelledby="tutor-title"
      >
        <div className="page-container">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <figure className="space-y-4">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md border border-border bg-muted">
                <Image
                  src="/images/lead-tutor.png"
                  alt="Founder and lead science tutor"
                  fill
                  className="object-cover"
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
                classroom, and I have supported thousands of pupils to succeed
                in GCSE Physics, Chemistry, and Biology.
              </p>
              <div className="divide-y divide-border">
                <div className="py-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                    Teaching approach
                  </p>
                  <p className="mt-3 text-muted-foreground">
                    My teaching is warm, structured, and grounded in cognitive
                    science. Retrieval practice and guided questioning keep
                    pupils focused, confident, and motivated.
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
                    practice sharp and current.
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
      </section>

      <section
        id="testimonials"
        className="section section-divider"
        aria-labelledby="testimonials-title"
      >
        <div className="page-container">
          <div className="space-y-6">
            <p className="eyebrow">Testimonials</p>
            <h2 id="testimonials-title">What families notice.</h2>
          </div>
          <div className="mt-10 space-y-10">
            <figure className="border-l border-border pl-6">
              <blockquote className="text-lg text-foreground">
                “Working with her each week brought calm to science lessons. The
                focus on vocabulary and explanation made everything click.”
              </blockquote>
              <figcaption className="mt-3 text-sm text-muted-foreground">
                Parent of Year 8 pupil, Islington
              </figcaption>
            </figure>
            <figure className="border-l border-border pl-6">
              <blockquote className="text-lg text-foreground">
                “Her tutoring is structured but kind. I know exactly what to
                revise each week and my confidence in GCSE papers has grown.”
              </blockquote>
              <figcaption className="mt-3 text-sm text-muted-foreground">
                GCSE student, Hertfordshire
              </figcaption>
            </figure>
            <figure className="border-l border-border pl-6">
              <blockquote className="text-lg text-foreground">
                “We receive thoughtful updates that are easy to act on. It feels
                like a real partnership with the tutor.”
              </blockquote>
              <figcaption className="mt-3 text-sm text-muted-foreground">
                Parent of Year 10 pupil, Kensington
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section
        id="consultation"
        className="section section-divider"
        aria-labelledby="consultation-title"
      >
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
            </div>
            <Button size="lg" asChild>
              <Link href="/consultation">Book a consultation</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Prefer to start by email? Write to admissions@crownscience.edu.
          </p>
        </div>
      </section>
    </div>
  );
}
