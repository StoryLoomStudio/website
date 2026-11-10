import { Logo } from "@/components/site/logo";
import { site } from "@/lib/site";

const columns = [
  {
    heading: "Project",
    links: [
      { label: "GitHub", href: site.links.github },
      { label: "Documentation", href: site.links.docs },
      { label: "Changelog", href: site.links.changelog },
      { label: "License", href: site.links.license },
    ],
  },
  {
    heading: "Community",
    links: [
      { label: "Discussions", href: site.links.discussions },
      { label: "Discord", href: site.links.discord },
      { label: "Contribute", href: site.links.contribute },
      { label: "Code of Conduct", href: site.links.conduct },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Report an issue", href: site.links.issues },
      { label: "Plugins", href: site.links.docs },
      { label: "Scrivener import", href: site.links.docs },
      { label: "Roadmap", href: site.links.issues },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-soft">
              A calm, open-source workspace for writers who make long things. Made with care, in
              the open.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.heading}>
              <h2 className="text-sm font-medium text-ink">{column.heading}</h2>
              <ul className="mt-4 space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="link-draw text-ink-soft transition-colors hover:text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-14 border-t border-rule pt-6 text-xs text-ink-faint">
          © {new Date().getFullYear()} StoryLoom. Apache 2.0 licensed.
        </p>
      </div>
    </footer>
  );
}
