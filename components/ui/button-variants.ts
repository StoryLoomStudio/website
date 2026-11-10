import { cva, type VariantProps } from "class-variance-authority";

/**
 * Kept separate from button.tsx so server components can style a plain <a>
 * with buttonVariants() without pulling Radix Slot (which calls createContext
 * at module scope and has no "use client" directive) into the server graph.
 *
 * One shape for every button on the site: the --radius corner, never a pill.
 */
export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[background-color,border-color,color,transform] duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:translate-y-px motion-reduce:transform-none",
  {
    variants: {
      variant: {
        default: "border border-accent bg-accent text-accent-ink hover:border-ink hover:bg-ink",
        outline: "border border-rule-strong bg-transparent text-ink hover:border-ink",
        ghost: "text-ink hover:text-accent",
      },
      size: {
        default: "h-10 px-4",
        sm: "h-9 px-3.5 text-[13px]",
        lg: "h-12 px-6 text-[15px]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
