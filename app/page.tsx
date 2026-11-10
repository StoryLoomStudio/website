import { DownloadCTA } from "@/components/sections/download-cta";
import { FAQ } from "@/components/sections/faq";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { OpenSource } from "@/components/sections/open-source";
import { Why } from "@/components/sections/why";
import { Writing } from "@/components/sections/writing";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-accent-ink"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main" className="flex-1">
        <Hero />
        <Features />
        <Writing />
        <Why />
        <OpenSource />
        <DownloadCTA />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
