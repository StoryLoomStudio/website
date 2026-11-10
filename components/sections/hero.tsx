import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "@phosphor-icons/react/dist/ssr";

import heroShot from "@/public/images/storyloom-app.jpg";
import { GithubIcon } from "@/components/icons/github";
import { buttonVariants } from "@/components/ui/button-variants";
import { site } from "@/lib/site";

/**
 * Asymmetric split. The screenshot is wider than its column and runs off the
 * right edge of the viewport, so the app reads as larger than the page.
 * It ships with its own window chrome and shadow, so it is not framed again.
 */
export function Hero() {
  return (
    <section className="relative overflow-x-clip">
      <div className="container-page grid items-center gap-12 pt-12 pb-16 lg:min-h-[calc(100dvh-4rem)] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-8 lg:pt-8 lg:pb-12">
        <div className="relative z-10">
          <h1 className="font-display text-[2.9rem] leading-[1.04] text-balance text-ink sm:text-6xl lg:text-[4.1rem]">
            <span className="hero-rise block" style={{ "--i": 0 } as React.CSSProperties}>
              Write stories,
            </span>
            <span
              className="hero-rise block pb-1 text-accent italic"
              style={{ "--i": 1 } as React.CSSProperties}
            >
              not distractions.
            </span>
          </h1>

          <p
            className="hero-rise mt-7 max-w-md text-lg leading-relaxed text-pretty text-ink-soft"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            A calm, open-source workspace for novelists. Plan, research and draft long work without
            losing your flow.
          </p>

          <div
            className="hero-rise mt-9 flex flex-wrap items-center gap-3"
            style={{ "--i": 3 } as React.CSSProperties}
          >
            <Link href="/download" className={buttonVariants({ size: "lg" })}>
              Download for macOS
              <ArrowDown className="size-4" weight="bold" />
            </Link>
            <a
              href={site.links.github}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ size: "lg", variant: "outline" })}
            >
              <GithubIcon className="h-4 w-4" />
              View on GitHub
            </a>
          </div>
        </div>

        <div className="hero-slide relative lg:-mr-4">
          <Image
            src={heroShot}
            alt="The StoryLoom app on a Mac: a manuscript tree on the left, Chapter 1 open in a Markdown editor in the middle, and character and research cards on the right."
            sizes="(min-width: 1024px) 62vw, 100vw"
            priority
            className="h-auto w-[158%] max-w-none sm:w-[132%] lg:w-[122%]"
          />
        </div>
      </div>
    </section>
  );
}
