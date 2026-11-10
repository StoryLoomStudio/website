import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import { Reveal } from "@/components/site/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { site } from "@/lib/site";

const faqs = [
  {
    question: "Which platforms are supported?",
    answer:
      "StoryLoom is built exclusively for macOS, on Apple Silicon and on Intel Macs running macOS 14.0 or later. All of the craft goes into one deeply integrated, native Mac experience.",
  },
  {
    question: "Why open source?",
    answer:
      "Writing tools are too important to depend on a company's runway. Open source under Apache 2.0 keeps StoryLoom around as long as writers want it, and lets anyone fork, extend or build on it.",
  },
  {
    question: "Does StoryLoom use AI?",
    answer:
      "Not in 1.0. There is no AI layer in the shipping release: no model, no provider, no API key, nothing sent anywhere. Assistance is planned for a future release, and when it arrives it will be strictly optional, off by default, and your manuscript will never be used as training data.",
  },
  {
    question: "Does it work offline?",
    answer:
      "Yes. StoryLoom is local-first. Your projects live as plain files on your machine and every feature works without a network. Sync is opt-in and bring-your-own backend.",
  },
  {
    question: "Is Markdown supported?",
    answer:
      "Markdown is the native format. Every chapter, note and character sheet is a plain .md file you can open with any editor.",
  },
  {
    question: "Will plugins exist?",
    answer:
      "Yes. A first-class plugin API is on the roadmap. The core is intentionally small so the community can shape the rest.",
  },
  {
    question: "Can I import Scrivener projects?",
    answer:
      "Not yet. An importer is planned for a future release, and will carry your binder structure, notes and metadata into a StoryLoom project folder.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="border-t border-rule">
      <div className="container-page py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <h2 className="font-display text-4xl leading-[1.1] text-balance text-ink md:text-5xl">
                Questions, answered.
              </h2>
              <p className="mt-5 max-w-xs text-base leading-relaxed text-ink-soft">
                Anything else is welcome in the open. The maintainers reply in public.
              </p>
              <div className="mt-7 flex flex-col items-start gap-3 text-sm">
                <a
                  href={site.links.discussions}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-accent"
                >
                  <span className="link-draw">GitHub Discussions</span>
                  <ArrowUpRight className="size-3.5" weight="bold" />
                </a>
                <a
                  href={site.links.discord}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-accent"
                >
                  <span className="link-draw">Join the Discord</span>
                  <ArrowUpRight className="size-3.5" weight="bold" />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={90} className="lg:col-span-8">
            <Accordion
              type="single"
              collapsible
              defaultValue="faq-0"
              className="w-full border-t border-rule"
            >
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`faq-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
