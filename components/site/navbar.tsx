"use client";

import * as React from "react";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react";

import { GithubIcon } from "@/components/icons/github";
import { Logo } from "@/components/site/logo";
import { buttonVariants } from "@/components/ui/button-variants";
import { navItems, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on Escape, and lock the page behind the open mobile panel.
  React.useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled || open
          ? "border-rule bg-paper/90 backdrop-blur-md"
          : "border-transparent bg-paper"
      )}
    >
      <nav className="container-page flex h-16 items-center justify-between gap-8" aria-label="Main">
        <Logo />

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-draw py-1 text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
            className="hidden h-9 items-center gap-2 px-2 text-sm text-ink-soft transition-colors hover:text-ink lg:inline-flex"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>

          <Link
            href="/download"
            className={cn(buttonVariants({ size: "sm" }), "hidden sm:inline-flex")}
          >
            Download for macOS
          </Link>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="-mr-2 grid h-10 w-10 place-items-center text-ink md:hidden"
          >
            {open ? <X className="size-5" /> : <List className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile panel */}
      <div id="mobile-menu" hidden={!open} className="border-t border-rule bg-paper md:hidden">
        <ul className="container-page flex flex-col py-3">
          {navItems.map((item) => (
            <li key={item.href} className="border-b border-rule last:border-b-0">
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-4 font-display text-2xl text-ink transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="mt-4">
            <Link
              href="/download"
              onClick={() => setOpen(false)}
              className={cn(buttonVariants({ size: "lg" }), "w-full")}
            >
              Download for macOS
            </Link>
          </li>
          <li className="mt-3 mb-4">
            <a
              href={site.links.github}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className={cn(buttonVariants({ size: "lg", variant: "outline" }), "w-full")}
            >
              <GithubIcon className="h-4 w-4" />
              View on GitHub
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
