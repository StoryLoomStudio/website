# Contributing to StoryLoom

Thanks for wanting to help. StoryLoom is built in the open by writers, for writers, and the roadmap is a conversation rather than a marketing plan.

By participating you agree to the [Code of Conduct](CODE_OF_CONDUCT.md).

## Before you start

**Open an issue before writing code for anything non-trivial.** A typo fix or a broken link needs no ceremony. A new section, a dependency, or a change to the design system needs agreement first — it is a waste of your time to build something we then decline for a reason you had no way to know.

Good places to start:

- [Good first issues](https://github.com/StoryLoomStudio/website/labels/good%20first%20issue)
- [Discussions](https://github.com/StoryLoomStudio/StoryLoom/discussions) for questions and ideas that are not yet bug reports

## Development setup

```sh
git clone https://github.com/StoryLoomStudio/website.git
cd website
pnpm install
pnpm dev
```

Node 20+ and pnpm 9+. See the [README](README.md) for project structure.

Before you open a pull request:

```sh
pnpm lint     # must pass clean
pnpm build    # must succeed — it type-checks
```

Please verify both commands pass cleanly before submitting a PR.

## What we look for

Match the code that is already there. Read a neighbouring file before adding a new one — naming, comment density, and structure should be indistinguishable from what surrounds them.

Beyond that, a handful of rules exist for reasons that are easy to trip over:

**Do not hardcode colours.** Every colour lives in `app/globals.css` as a semantic token. Use `text-ink-soft`, not `text-gray-500`. If you need a colour that does not exist, propose the token in your issue.

**Measure new colours.** The site holds a WCAG AA floor (4.5:1 for body text). The logo's own teal stops are 2.68:1 and 1.92:1 on paper — they are `--brand`/`--brand-bright` and are decorative only. Anything carrying text uses `--primary`. If you introduce a colour, state its measured contrast in the PR.

**No dark mode.** Light is the only theme, deliberately. `dark:` variants are dead code and will be removed.

**Keep sections as server components.** Only the navbar, the accordion, and `Reveal` are client components. If you think you need a fourth, say why in the issue — it is usually avoidable.

**Do not import `@radix-ui/react-slot` into a server component.** It calls `createContext` at module scope with no `"use client"` directive and will break the build. Style plain `<a>`/`<Link>` elements with `buttonVariants` from `components/ui/button-variants.ts` instead.

**Respect reduced motion.** New animation must be invisible under `prefers-reduced-motion: reduce`, and content must remain readable if JavaScript never runs.

**Accessibility is not a follow-up.** Semantic elements, real focus states, labelled controls, sensible heading order. A PR that regresses keyboard navigation will be sent back.

## Commits and pull requests

Write commit subjects in the imperative — `fix mobile nav focus trap`, not `fixed` or `fixes`. Conventional Commits are welcome but not required.

In the PR description, say what changed and why. If it is visual, attach before/after screenshots — at both mobile and desktop widths. Reviewers should not have to check out your branch to see what you did.

Keep pull requests focused. A drive-by refactor bundled into a bug fix makes both harder to review and to revert.

## Reporting bugs

Use the [bug report template](https://github.com/StoryLoomStudio/website/issues/new?template=bug_report.yml). The two things that matter most are what you expected and what actually happened, plus browser and OS.

Do not open a public issue for a security problem — see [SECURITY.md](SECURITY.md).

## Licence

Contributions are licensed under the [Apache License 2.0](LICENSE), the same terms as the project. You retain copyright in your work; the Apache 2.0 grant in section 5 covers the contribution itself, so no separate CLA is required.
