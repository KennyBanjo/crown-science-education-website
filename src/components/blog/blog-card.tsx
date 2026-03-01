import Link from "next/link";
import Image from "next/image";
import type { BlogPostMeta } from "@/types";

export function BlogCard({ post }: { post: BlogPostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block overflow-hidden rounded-lg border border-border bg-background transition-shadow hover:shadow-crown"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-muted">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-5">
        <span className="inline-block rounded-full bg-crown-gold-50 px-3 py-1 text-xs font-medium text-crown-gold-700">
          {post.category}
        </span>
        <h3 className="mt-3 font-display text-lg leading-snug text-foreground group-hover:text-crown-gold-600 transition-colors">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
          {post.description}
        </p>
        <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
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
      </div>
    </Link>
  );
}
