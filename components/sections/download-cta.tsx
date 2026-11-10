import Link from "next/link";
import { ArrowDown } from "@phosphor-icons/react/dist/ssr";

import { Reveal } from "@/components/site/reveal";
import { buttonVariants } from "@/components/ui/button-variants";
import { site } from "@/lib/site";

export function DownloadCTA() {
  return (
    <section id="download" className="border-t border-rule">
      <div className="container-page py-28 md:py-40">
        <Reveal className="grid items-end gap-12 lg:grid-cols-12 lg:gap-10">
          <h2 className="font-display text-5xl leading-[1.08] pb-1 text-balance text-ink md:text-7xl lg:col-span-8">
            Ready to write <span className="text-accent italic">your next novel?</span>
          </h2>

          <div className="lg:col-span-4 lg:pb-3">
            <Link href="/download" className={buttonVariants({ size: "lg", className: "w-full sm:w-auto" })}>
              Download for macOS
              <ArrowDown className="size-4" weight="bold" />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-faint">
              Free and open source. Requires macOS {site.minMacOS} or later, on Apple Silicon or
              Intel.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
