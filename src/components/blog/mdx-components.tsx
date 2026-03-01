import Link from "next/link";
import Image from "next/image";
import type { MDXComponents } from "mdx/types";

function Callout({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "tip" | "warning" }) {
  const styles = {
    info: "border-crown-gold-300 bg-crown-gold-50/50",
    tip: "border-crown-teal-300 bg-crown-teal-50/50",
    warning: "border-amber-300 bg-amber-50/50",
  };

  const labels = {
    info: "Note",
    tip: "Tip",
    warning: "Warning",
  };

  return (
    <div className={`my-6 rounded-lg border-l-4 p-4 ${styles[type]}`}>
      <p className="mb-1 text-sm font-semibold text-foreground">{labels[type]}</p>
      <div className="text-sm text-muted-foreground [&>p]:mb-0">{children}</div>
    </div>
  );
}

export const mdxComponents: MDXComponents = {
  a: ({ href, children, ...props }) => {
    if (href?.startsWith("/")) {
      return (
        <Link href={href} {...props}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  },
  img: ({ src, alt, ...props }) => {
    if (!src) return null;
    return (
      <Image
        src={src}
        alt={alt || ""}
        width={800}
        height={450}
        className="rounded-lg"
        {...props}
      />
    );
  },
  Callout,
};
