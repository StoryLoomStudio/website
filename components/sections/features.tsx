import { Reveal } from "@/components/site/reveal";
import { ShotCrop } from "@/components/site/shot-crop";

const alsoIn = [
  {
    title: "A quiet Markdown editor",
    body: "Typography first, with everything you need and nothing you don't.",
  },
  {
    title: "Worldbuilding notes",
    body: "Settings, magic systems and lore in linked, browsable notes.",
  },
  {
    title: "A timeline",
    body: "Track chronology across arcs so nothing quietly contradicts itself.",
  },
  {
    title: "Native to the Mac",
    body: "Apple Silicon speed, system keybindings and fluid gestures.",
  },
];

const planned = [
  {
    title: "AI assistance",
    body: "Not in 1.0. When it arrives it will be optional, off by default, and never trained on your work.",
  },
  {
    title: "A plugin API",
    body: "On the roadmap, so the community can shape what the small core leaves out.",
  },
  {
    title: "Scrivener import",
    body: "Planned. It will carry your binder structure, notes and metadata into a StoryLoom folder.",
  },
];

const chapterSource = `# Chapter 1

> The sea remembers everything.
> - Old Mariner's Saying

The wind came in off the black water,
sharp with salt and the memory of storm.
Elara pulled her cloak tighter and climbed
the final stretch of rock toward the lighthouse.

Tonight, she would inherit the light.`;

export function Features() {
  return (
    <section id="features" className="border-t border-rule">
      <div className="container-page py-24 md:py-32">
        <Reveal className="max-w-3xl">
          <h2 className="font-display text-4xl leading-[1.08] text-balance text-ink md:text-6xl">
            Everything a novel needs. <span className="text-ink-faint">Nothing it doesn&apos;t.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-ink-soft">
            Structure, characters and research sit beside the manuscript, in one window, as plain
            files on your own disk.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-x-10 gap-y-16 lg:grid-cols-12">
          {/* Structure */}
          <Reveal className="lg:col-span-7">
            <ShotCrop
              x={52}
              y={108}
              w={700}
              h={600}
              vw={58}
              fade={["right", "bottom"]}
              alt="The StoryLoom sidebar listing the manuscript with Chapter 1 and Chapter 2, then Characters, Research and Notes, beside the open chapter."
            />
            <h3 className="mt-6 font-display text-2xl text-ink">Structure that moves with the story</h3>
            <p className="mt-2 max-w-lg text-base leading-relaxed text-ink-soft">
              Organize the manuscript into acts, chapters and scenes, then reshape it whenever the
              story does.
            </p>
          </Reveal>

          {/* Characters and research */}
          <Reveal delay={90} className="lg:col-span-5">
            <ShotCrop
              x={1140}
              y={182}
              w={416}
              h={508}
              vw={40}
              fade={["bottom"]}
              alt="A character card for Elara Wynshore, the protagonist, above research cards on 19th-century lighthouses and North Sea weather."
            />
            <h3 className="mt-6 font-display text-2xl text-ink">
              Characters and research, one glance away
            </h3>
            <p className="mt-2 max-w-md text-base leading-relaxed text-ink-soft">
              Keep every protagonist, minor character and source beside the chapter it informs.
            </p>
          </Reveal>

          {/* Plain files */}
          <Reveal className="lg:col-span-7">
            <div className="bg-accent-wash p-6 sm:p-8">
              <p className="font-mono text-xs text-ink-faint">chapter-1.md</p>
              <pre className="mt-4 overflow-x-auto font-mono text-[13px] leading-[1.75] whitespace-pre-wrap text-ink">
                {chapterSource}
              </pre>
            </div>
            <h3 className="mt-6 font-display text-2xl text-ink">Plain Markdown, plain folders</h3>
            <p className="mt-2 max-w-lg text-base leading-relaxed text-ink-soft">
              Every chapter, note and character sheet is an ordinary file you can open anywhere and
              version with git.
            </p>
          </Reveal>

          {/* Also in 1.0 */}
          <Reveal delay={90} className="lg:col-span-5">
            <h3 className="font-display text-2xl text-ink">Also in 1.0</h3>
            <dl className="mt-8 space-y-7">
              {alsoIn.map((item) => (
                <div key={item.title} className="border-t border-rule pt-5">
                  <dt className="text-[15px] font-medium text-ink">{item.title}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-ink-soft">{item.body}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal className="mt-24 border-t border-rule pt-12">
          <h3 className="font-display text-2xl text-ink">Planned, not shipped</h3>
          <dl className="mt-8 grid gap-10 sm:grid-cols-3">
            {planned.map((item) => (
              <div key={item.title}>
                <dt className="text-[15px] font-medium text-ink">{item.title}</dt>
                <dd className="mt-1.5 max-w-xs text-sm leading-relaxed text-ink-soft">{item.body}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
