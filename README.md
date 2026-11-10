# StoryLoom — website

Marketing site for [StoryLoom](https://storyloom.app), the open-source, local-first writing workspace for novelists.

Built with Next.js (App Router), TypeScript, and Tailwind CSS v4. Statically generated — there is no server runtime, no database, and no analytics.

## Getting started

```sh
pnpm install
pnpm dev          # http://localhost:3000
```

| Script | Purpose |
| --- | --- |
| `pnpm dev` | Dev server with Turbopack and HMR. |
| `pnpm build` | Production build. Fails on type errors. |
| `pnpm start` | Serve the production build locally. |
| `pnpm lint` | ESLint (`eslint-config-next`). |

Requires Node 20+ and pnpm 9+.

## Structure

```
app/
  page.tsx                 Landing page — server component, composes sections
  download/page.tsx        Download page
  layout.tsx               Fonts, metadata, viewport
  globals.css              Design tokens, utilities, keyframes
  opengraph-image.tsx      Generated 1200×630 social card
  robots.ts / sitemap.ts   Generated at build time
  manifest.ts              Web app manifest
  not-found.tsx            404
components/
  sections/                One file per landing-page section
  site/                    Navbar, footer, logo, scroll-reveal
  ui/                      Button, accordion primitives
lib/
  site.ts                  Product name, URLs, version — single source of truth
```

**Change outbound links in `lib/site.ts`, not in components.** Every GitHub, Discord, and docs URL on the site resolves from that file.

## Design system

All colour and motion tokens live in `app/globals.css`. Components reference semantic names (`bg-paper`, `text-ink`, `text-ink-soft`, `border-rule`, `bg-accent`) and **never hardcode colour values.**

**Palette.** An off-white page that matches the backdrop baked into the product screenshots (`#fbfaf7`, so they sit on it with no halo), a blue-green ink, and exactly one accent: the logo's teal, darkened until it can carry text. The logo's own teal stops (`#02AAB0`, `#00CDAC`) are 2.68:1 and 1.92:1 against paper, so they appear only in the logo mark.

| Token | Role | Contrast on paper |
| --- | --- | --- |
| `--ink` | Headlines, strong text | 16.2:1 |
| `--ink-soft` | Body copy | 9.0:1 |
| `--ink-faint` | Secondary labels | 5.5:1 |
| `--accent` | Links, italic emphasis, primary button | 5.9:1 |
| `--accent-wash` | The one tinted band, code panels | ink on wash: 14.4:1 |

If you add a colour, measure it before shipping it. The floor is WCAG AA (4.5:1 for body text).

**Type.** Newsreader (a reading serif with optical sizes, close to the manuscript face inside the app) for headlines and anything read as prose, Geist for interface and body, Geist Mono for file names and code. Emphasis in a headline is the italic of the same face, in the accent colour.

**Shape.** One corner radius, `--radius` (4px), on every button, input and panel. There are no pills. The only large radii on the site are inside the product screenshots.

**Imagery.** Real product screenshots only. `components/site/shot-crop.tsx` shows one region of the main screenshot at full sharpness (the manuscript tree, a character card), so the page never needs a hand-built mock of the app.

### Light theme only

There is deliberately no dark mode. `color-scheme: light` is declared in `globals.css` and in the viewport export in `app/layout.tsx`. Do not add `dark:` variants — they will be dead code.

## Motion

Entrance animation is CSS-driven: the hero staggers in on load, and `components/site/reveal.tsx` (IntersectionObserver toggling a class). There is no animation library.

`<Reveal>` renders **visible by default** and only hides itself client-side, so content is never invisible if JavaScript fails. `prefers-reduced-motion: reduce` disables transforms and animations globally in `globals.css`.

## Gotchas

- **`@radix-ui/react-slot` cannot be imported from a server component.** It calls `createContext` at module scope without a `"use client"` directive, which throws `e.createContext is not a function` during static generation. That is why `buttonVariants` lives in its own file (`components/ui/button-variants.ts`) — server components style plain `<a>`/`<Link>` elements with it, and only `Button` itself pulls in Slot.
- **The hero screenshot has no frame.** `public/images/storyloom-app.jpg` ships with its own macOS window chrome, drop shadow, and `#fbfaf6` backdrop — near-identical to `--background`. Wrapping it in a bordered card produces a visible double border.
- **Only a few things are client components**: the navbar (scroll state + mobile menu), the accordion, `Reveal`, and the download page (copy button). Keep new sections as server components.
- **Icons are Phosphor** (`@phosphor-icons/react`; import from `/dist/ssr` in server components). The GitHub mark is the local `GithubIcon`.
- **`app/opengraph-image.tsx` fetches Newsreader from Google Fonts at build time.** It falls back to the bundled sans if the network is unavailable, so an offline build still succeeds — the card just renders in a different face.

## Deployment

Any static host. The build emits fully prerendered routes:

```sh
pnpm build && pnpm start
```

Set the canonical origin in `lib/site.ts` (`site.url`) before deploying — `metadataBase`, `sitemap.xml`, `robots.txt`, and all OG tags derive from it.

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request — it covers the design-system rules, the server/client component split, and the Radix Slot pitfall above. All participation is governed by the [Code of Conduct](CODE_OF_CONDUCT.md).

Security issues go to [SECURITY.md](SECURITY.md), never a public issue.

Release history lives in [CHANGELOG.md](CHANGELOG.md).

## License

Apache License 2.0. See [LICENSE](LICENSE).
