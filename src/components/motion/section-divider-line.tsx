"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface SectionDividerLineProps {
  className?: string;
}

export function SectionDividerLine({ className }: SectionDividerLineProps) {
  const reduceMotion = useReducedMotion();

  const initial = reduceMotion ? { opacity: 1 } : { opacity: 1, scaleX: 0 };
  const whileInView = reduceMotion ? { opacity: 1 } : { opacity: 1, scaleX: 1 };

  return (
    <motion.span
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-x-0 top-0 h-px origin-left bg-border",
        className
      )}
      initial={initial}
      whileInView={whileInView}
      transition={{ duration: reduceMotion ? 0.01 : 0.55, ease: EASE }}
      viewport={{ once: true, amount: 0.2 }}
    />
  );
}
