import Link from "next/link";

import { buttonVariants } from "@/components/ui/button-variants";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <Navbar />

      <main className="flex flex-1 items-center">
        <div className="container-page py-24 md:py-32">
          <h1 className="max-w-3xl font-display text-5xl leading-[1.05] text-balance text-ink md:text-7xl">
            This page went <span className="text-accent italic">unwritten.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-pretty text-ink-soft">
            The link may be out of date, or the page may have moved. Everything else is still where
            you left it.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/" className={buttonVariants({ size: "lg" })}>
              Back to home
            </Link>
            <Link href="/download" className={buttonVariants({ size: "lg", variant: "outline" })}>
              Download for macOS
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
