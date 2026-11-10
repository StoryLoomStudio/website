# Changelog

All notable changes to this project are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Open Graph / Twitter card image generated at build time (`app/opengraph-image.tsx`), matching the hero lockup.
- `robots.txt`, `sitemap.xml`, and a web app manifest, all generated from `site.url`.
- Branded 404 page.
- Apache 2.0 `LICENSE`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`, GitHub issue and PR templates, and a CI workflow.
- `site.url`, `site.version`, and `site.minMacOS` in `lib/site.ts`.

### Changed

- The "AI assistance" feature card and a new FAQ entry now state plainly that there is **no AI layer in 1.0** and that assistance is planned for a later release. The previous copy implied it already shipped.
- Replaced the `create-next-app` boilerplate README with real project documentation.

### Removed

- Unused `create-next-app` scaffold assets (`file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`).

## [1.0.0] — 2026-07-25

First public release. Native macOS, Universal binary for Apple Silicon and Intel, requires macOS 14.0 Sonoma or later.

### Added

- Markdown editor with typewriter scrolling, focus mode, and sentence/paragraph/scene highlighting.
- Project organization into acts, chapters, and scenes.
- Character sheets, worldbuilding notes, and a research workspace alongside the manuscript.
- Timeline for tracking chronology across arcs.
- Local-first storage — every project is a plain folder of Markdown files, safe to version with git.
- Distribution via signed `.dmg` and Homebrew cask (`brew install --cask storyloom`).

### Notes

- There is no AI layer in this release: no model, no provider, no API key, and nothing sent off the machine.
- Scrivener import is planned but not included.

[Unreleased]: https://github.com/storyloom/storyloom/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/storyloom/storyloom/releases/tag/v1.0.0
