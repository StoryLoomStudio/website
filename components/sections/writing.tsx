import Image from "next/image";

import focusShot from "@/public/images/storyloom-focus.jpg";
import { Reveal } from "@/components/site/reveal";

const points = [
  {
    title: "Typewriter scrolling",
    body: "Keeps the line you are writing at eye level.",
  },
  {
    title: "Typography for long sessions",
    body: "Tuned for hours of reading and rereading.",
  },
  {
    title: "Sentence and scene highlighting",
    body: "Dim everything except the part you are shaping.",
  },
  {
    title: "Nothing but the page",
    body: "Every panel and toolbar fades away.",
  },
];

/** The quiet moment of the page: one large, real screenshot and four short notes beside it. */
export function Writing() {
  return (
    <section id="writing" className="border-t border-rule">
      <div className="container-page py-24 md:py-32">
        <Reveal className="max-w-3xl">
          <h2 className="font-display text-4xl leading-[1.1] text-balance text-ink md:text-6xl">
            A room of one&apos;s own, <span className="text-accent italic">without the walls.</span>
            <span
              aria-hidden="true"
              className="caret ml-1 inline-block h-[0.8em] w-[2px] translate-y-[0.08em] bg-accent"
            />
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-ink-soft">
            When it&apos;s time to write, everything else fades. Just your words, a cursor and a
            page waiting to be filled.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal delay={80} className="lg:order-2 lg:col-span-9">
            <Image
              src={focusShot}
              alt="Focus mode: a single page of prose in a serif typeface with a green text cursor at the end of the last line and a word count in the corner."
              sizes="(min-width: 1024px) 70vw, 100vw"
              className="h-auto w-full border border-rule-strong"
            />
          </Reveal>

          <Reveal className="lg:order-1 lg:col-span-3">
            <ul className="grid gap-7 sm:grid-cols-2 lg:grid-cols-1 lg:pt-6">
              {points.map((point) => (
                <li key={point.title}>
                  <p className="text-[15px] font-medium text-ink">{point.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{point.body}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
