import { Metadata } from "next";
import { Suspense } from "react";
import { Reveal } from "@/components/motion/reveal";
import { getAllPosts } from "@/lib/blog";
import { BlogCard } from "@/components/blog/blog-card";
import { CategoryFilter } from "@/components/blog/category-filter";
import type { BlogCategory } from "@/types";

export const metadata: Metadata = {
  title: "Blog | Crown Science Education",
  description:
    "Study tips, exam strategies, and science education insights from Crown Science Education. Helping GCSE and secondary students excel in science.",
  openGraph: {
    title: "Blog | Crown Science Education",
    description:
      "Study tips, exam strategies, and science education insights from Crown Science Education.",
    url: "https://crownscience.edu/blog",
    siteName: "Crown Science Education",
    locale: "en_GB",
    type: "website",
  },
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const allPosts = getAllPosts();

  const posts = category
    ? allPosts.filter((p) => p.category === (category as BlogCategory))
    : allPosts;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-b from-crown-gold-50/50 to-background">
        <div className="page-container py-16 text-center sm:py-20">
          <Reveal>
            <p className="eyebrow">Insights &amp; Resources</p>
          </Reveal>
          <Reveal>
            <h1 className="mt-4">The Crown Science Blog</h1>
          </Reveal>
          <Reveal>
            <p className="lead mx-auto mt-4 max-w-2xl">
              Study tips, exam strategies, and science education insights to
              help your child succeed.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Posts */}
      <section className="section">
        <div className="page-container">
          <Reveal>
            <Suspense fallback={null}>
              <CategoryFilter />
            </Suspense>
          </Reveal>

          {posts.length === 0 ? (
            <p className="mt-12 text-center text-muted-foreground">
              No posts found in this category.
            </p>
          ) : (
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Reveal key={post.slug}>
                  <BlogCard post={post} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
