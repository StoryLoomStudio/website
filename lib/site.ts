/**
 * Single source of truth for outbound links and nav structure.
 * Swap these for the real URLs once the repo and docs are public.
 */
export const site = {
  name: "StoryLoom",
  tagline: "A calm workspace for writers",
  description:
    "An open-source, local-first writing platform for novelists. Plan, research, outline, and draft long-form work in one calm workspace.",
  /** Canonical origin. Used for metadataBase, sitemap, robots, and OG tags. */
  url: "https://storyloom.app",
  /** Shipping release, shown on the download page and in structured data. */
  version: "1.0.0",
  /** Minimum supported macOS release. */
  minMacOS: "14.0",
  links: {
    github: "https://github.com/storyloom/storyloom",
    docs: "https://github.com/storyloom/storyloom#documentation",
    discussions: "https://github.com/storyloom/storyloom/discussions",
    issues: "https://github.com/storyloom/storyloom/issues",
    contribute: "https://github.com/storyloom/storyloom/blob/main/CONTRIBUTING.md",
    license: "https://github.com/storyloom/storyloom/blob/main/LICENSE",
    changelog: "https://github.com/storyloom/storyloom/releases",
    conduct: "https://github.com/storyloom/storyloom/blob/main/CODE_OF_CONDUCT.md",
    discord: "https://discord.gg/storyloom",
  },
} as const;

export const navItems = [
  { label: "Workspace", href: "/#features" },
  { label: "Focus mode", href: "/#writing" },
  { label: "Open source", href: "/#open-source" },
  { label: "FAQ", href: "/#faq" },
] as const;
