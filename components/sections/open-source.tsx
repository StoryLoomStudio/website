import { GithubIcon } from "@/components/icons/github";
import { Reveal } from "@/components/site/reveal";
import { buttonVariants } from "@/components/ui/button-variants";
import { site } from "@/lib/site";

const facts = [
  { title: "Apache 2.0", body: "The license. Use it, fork it, build on it." },
  { title: "In public", body: "Roadmap, issues and decisions all happen on GitHub." },
  { title: "On your disk", body: "Projects are plain folders. There is no account." },
  { title: "Extensible", body: "A deliberately small core, with a plugin API on the roadmap." },
];

export function OpenSource() {
  return (
    <section id="open-source" className="bg-accent-wash">
      <div className="container-page py-24 md:py-32">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-6">
            <h2 className="font-display text-4xl leading-[1.1] text-balance text-ink md:text-5xl">
              Built in the open, with the people who use it.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-pretty text-ink-soft">
              StoryLoom is developed in public on GitHub. The roadmap is a conversation, not a
              marketing plan.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={site.links.contribute}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ size: "lg" })}
              >
                <GithubIcon className="h-4 w-4" />
                Contribute
              </a>
              <a
                href={site.links.issues}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ size: "lg", variant: "outline" })}
              >
                Public roadmap
              </a>
            </div>
          </Reveal>

          <Reveal delay={90} className="lg:col-span-6">
            <dl className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
              {facts.map((fact) => (
                <div key={fact.title} className="border-t border-ink/20 pt-5">
                  <dt className="font-display text-3xl text-ink">{fact.title}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-ink-soft">{fact.body}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
