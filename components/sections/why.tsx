import { Reveal } from "@/components/site/reveal";

/**
 * The page's one manifesto. Set as running prose so it reads like a paragraph
 * from a book, with the three comparisons doing the persuading.
 */
export function Why() {
  return (
    <section id="why" className="border-t border-rule">
      <div className="container-page py-28 md:py-40">
        <Reveal className="max-w-5xl">
          <p className="font-display text-[2rem] leading-[1.18] text-balance text-ink sm:text-5xl md:text-[3.5rem]">
            Google Docs is a page. Notion is a notebook.{" "}
            <span className="text-accent italic">StoryLoom is a studio</span>, with rooms for
            research, characters and structure beside the manuscript.
          </p>
        </Reveal>

        <Reveal delay={90} className="mt-14 grid gap-8 md:ml-auto md:max-w-3xl md:grid-cols-2 md:gap-12">
          <p className="text-base leading-relaxed text-ink-soft">
            Obsidian and Notion weren&apos;t built for chapters, scenes and revision. StoryLoom is
            shaped around the way books actually get written.
          </p>
          <p className="text-base leading-relaxed text-ink-soft">
            Plain Markdown files in a plain folder. No lock-in, no subscription held over your
            draft, no vanishing service.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
