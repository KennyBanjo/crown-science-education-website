import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/blog/blog-card";
import { mdxComponents } from "@/components/blog/mdx-components";
import { getAllSlugs, getPostBySlug, getAllPosts } from "@/lib/blog";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Crown Science Education`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://crownscience.edu/blog/${slug}`,
      siteName: "Crown Science Education",
      images: [{ url: post.image, width: 1200, height: 630 }],
      locale: "en_GB",
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getAllPosts()
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Crown Science Education",
    },
    publisher: {
      "@type": "Organization",
      name: "Crown Science Education",
      url: "https://crownscience.edu",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="min-h-screen bg-background">
        {/* Hero */}
        <section className="border-b border-border bg-gradient-to-b from-crown-gold-50/50 to-background">
          <div className="page-container py-16 sm:py-20">
            <Reveal>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to blog
              </Link>
            </Reveal>
            <Reveal>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="inline-block rounded-full bg-crown-gold-50 px-3 py-1 text-xs font-medium text-crown-gold-700">
                  {post.category}
                </span>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                <span aria-hidden="true">&middot;</span>
                <span>{post.readingTime}</span>
              </div>
            </Reveal>
            <Reveal>
              <h1 className="mt-4 max-w-3xl">{post.title}</h1>
            </Reveal>
            <Reveal>
              <p className="lead mt-4 max-w-2xl">{post.description}</p>
            </Reveal>
          </div>
        </section>

        {/* Content */}
        <section className="section">
          <div className="page-container">
            <div className="prose prose-lg prose-crown mx-auto max-w-3xl">
              <MDXRemote source={post.content} components={mdxComponents} />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-gradient-to-b from-crown-gold-50/30 to-background">
          <div className="page-container section text-center">
            <Reveal>
              <h2 className="text-2xl sm:text-3xl">
                Ready to take the next step?
              </h2>
            </Reveal>
            <Reveal>
              <p className="lead mx-auto mt-3 max-w-xl">
                Book a free consultation to discuss your child&apos;s science
                learning goals and how Crown can help.
              </p>
            </Reveal>
            <Reveal>
              <Button size="lg" className="mt-6" asChild>
                <Link href="/consultation">Book a consultation</Link>
              </Button>
            </Reveal>
          </div>
        </section>

        {/* Related posts */}
        {related.length > 0 && (
          <section className="border-t border-border">
            <div className="page-container section">
              <Reveal>
                <h2 className="text-2xl">Related articles</h2>
              </Reveal>
              <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((p) => (
                  <Reveal key={p.slug}>
                    <BlogCard post={p} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  );
}
