"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-crown text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        default:
          "bg-crown-gold-400 text-white hover:bg-crown-gold-500 shadow-crown hover:shadow-crown-lg",
        secondary:
          "bg-crown-teal-400 text-white hover:bg-crown-teal-500 shadow-sm hover:shadow-md",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",
        outline:
          "border-2 border-crown-gold-400 text-crown-gold-600 bg-transparent hover:bg-crown-gold-50 hover:text-crown-gold-700",
        ghost: "hover:bg-crown-gold-50 hover:text-crown-gold-600",
        link: "text-crown-gold-600 underline-offset-4 hover:underline hover:text-crown-gold-700",
        gradient:
          "bg-gradient-to-r from-crown-gold-400 to-crown-teal-400 text-white shadow-crown hover:shadow-crown-lg hover:from-crown-gold-500 hover:to-crown-teal-500",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-crown px-8 text-base",
        xl: "h-14 rounded-crown px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };