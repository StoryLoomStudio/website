"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

// useLayoutEffect warns during SSR; the effect only matters in the browser.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

type RevealProps = React.ComponentProps<"div"> & {
  /** Stagger in ms, for revealing siblings in sequence. */
  delay?: number;
};

/**
 * Fades and lifts its children into view once, on first intersection.
 *
 * The visible state is the CSS default and the hidden class is only added
 * client-side, so server-rendered content is never invisible if JS fails.
 * Reduced-motion users get the content with no transform (see globals.css).
 */
export function Reveal({ className, delay = 0, children, ...props }: RevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = React.useState(false);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Anything already on screen at mount stays put - only animate what the
    // reader actually scrolls down to.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;

    setHidden(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setHidden(false);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", hidden && "reveal-hidden", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...props}
    >
      {children}
    </div>
  );
}
