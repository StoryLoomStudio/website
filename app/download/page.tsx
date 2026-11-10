"use client";

import * as React from "react";
import { Check, Copy, DownloadSimple } from "@phosphor-icons/react";

import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import { Reveal } from "@/components/site/reveal";
import { buttonVariants } from "@/components/ui/button-variants";
import { site } from "@/lib/site";

const brewCommand = "brew install --cask storyloom";

const steps = [
  {
    title: "Download",
    body: "Get the latest .dmg disk image for macOS.",
  },
  {
    title: "Drag to Applications",
    body: "Open the disk image and drag StoryLoom into your Applications folder.",
  },
  {
    title: "Write",
    body: "Launch StoryLoom and open any local folder to start your novel.",
  },
];

export default function DownloadPage() {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(brewCommand);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // The command stays selectable if the clipboard is unavailable.
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <Navbar />

      <main className="flex-1">
        <section className="container-page pt-16 pb-24 md:pt-24 md:pb-32">
          <Reveal className="max-w-3xl">
            <h1 className="font-display text-5xl leading-[1.05] text-balance text-ink md:text-7xl">
              Get StoryLoom for <span className="text-accent italic">macOS.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-ink-soft">
              Native on Apple Silicon and Intel. Plain Markdown files on your own disk, with nothing
              leaving your machine.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-px border border-rule-strong bg-rule-strong lg:grid-cols-12">
            <Reveal delay={60} className="flex flex-col justify-between bg-paper p-8 sm:p-10 lg:col-span-7">
              <div>
                <p className="font-mono text-xs text-accent">
                  v{site.version}, universal
                </p>
                <h2 className="mt-4 font-display text-3xl text-ink">The disk image</h2>
                <p className="mt-3 max-w-md text-base leading-relaxed text-ink-soft">
                  One build for Apple Silicon (M1 and later) and Intel Macs, running macOS{" "}
                  {site.minMacOS} Sonoma or later. Signed and notarized by Apple.
                </p>
              </div>

              <div className="mt-10">
                <a
                  href={`${site.links.changelog}/latest`}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants({ size: "lg", className: "w-full sm:w-auto" })}
                >
                  <DownloadSimple className="size-4" weight="bold" />
                  Download StoryLoom.dmg
                </a>
              </div>
            </Reveal>

            <Reveal delay={120} className="flex flex-col justify-between bg-paper p-8 sm:p-10 lg:col-span-5">
              <div>
                <p className="font-mono text-xs text-ink-faint">Homebrew</p>
                <h2 className="mt-4 font-display text-3xl text-ink">Or use the terminal</h2>
                <p className="mt-3 max-w-md text-base leading-relaxed text-ink-soft">
                  Install, and later update, with one command if you already use Homebrew.
                </p>
              </div>

              <div className="mt-10">
                <div className="flex items-center justify-between gap-3 border border-rule-strong bg-accent-wash px-4 py-3 font-mono text-[13px] text-ink">
                  <span className="truncate">{brewCommand}</span>
                  <button
                    type="button"
                    onClick={handleCopy}
                    aria-label={copied ? "Copied to clipboard" : "Copy Homebrew command"}
                    className="shrink-0 p-1 text-ink-soft transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
                  >
                    {copied ? <Check className="size-4 text-accent" weight="bold" /> : <Copy className="size-4" />}
                  </button>
                </div>
                <p className="mt-3 text-xs text-ink-faint" aria-live="polite">
                  {copied ? "Copied to clipboard." : "Copy the command, then paste it into Terminal."}
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className="mt-24">
            <h2 className="font-display text-3xl text-ink">Three steps</h2>
            <ol className="mt-8 grid gap-10 border-t border-rule pt-8 sm:grid-cols-3">
              {steps.map((step) => (
                <li key={step.title}>
                  <p className="font-display text-xl text-ink">{step.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.body}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
