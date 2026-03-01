"use client";

import { useRouter, useSearchParams } from "next/navigation";
import type { BlogCategory } from "@/types";

const categories: BlogCategory[] = [
  "Study Tips & Exam Prep",
  "Science Education",
  "Subject Guides",
];

export function CategoryFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const active = searchParams.get("category");

  function handleClick(category: string | null) {
    const params = new URLSearchParams(searchParams.toString());
    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }
    router.push(`/blog?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => handleClick(null)}
        className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
          !active
            ? "bg-crown-gold-400 text-slate-900"
            : "bg-muted text-muted-foreground hover:bg-muted/80"
        }`}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleClick(cat)}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
            active === cat
              ? "bg-crown-gold-400 text-slate-900"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
