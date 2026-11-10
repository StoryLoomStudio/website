import fs from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";

import { site } from "@/lib/site";

export const alt = `${site.name}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Read at module scope: this route is statically generated at build time.
const markDataUri = `data:image/svg+xml;base64,${fs
  .readFileSync(path.join(process.cwd(), "public", "storyloom.svg"))
  .toString("base64")}`;

type LoadedFont = { data: ArrayBuffer; style: "normal" | "italic" };

/**
 * Satori (which powers ImageResponse) has no access to next/font, so the
 * display serif (Newsreader) is fetched directly. The bare User-Agent matters: without a
 * recognisable modern browser string Google serves legacy TrueType rather than
 * woff2, which is the only format Satori can parse.
 *
 * Both the upright and italic faces are needed — Satori does not synthesise
 * obliques, so `fontStyle: "italic"` silently renders upright without them.
 * A network failure at build time degrades to the bundled sans instead of
 * failing the build.
 */
async function loadNewsreader(): Promise<LoadedFont[]> {
  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,600;1,6..72,600&display=swap",
      { headers: { "User-Agent": "Mozilla/5.0" } }
    ).then((res) => res.text());

    // Google emits one @font-face per style per unicode subset; keep the first
    // of each style, which is the latin subset.
    const seen = new Set<string>();
    const wanted: { url: string; style: "normal" | "italic" }[] = [];

    for (const block of css.split("@font-face")) {
      const url = block.match(
        /src:\s*url\((.+?)\)\s*format\('(?:opentype|truetype)'\)/
      )?.[1];
      if (!url) continue;

      const style = /font-style:\s*italic/.test(block) ? "italic" : "normal";
      if (seen.has(style)) continue;

      seen.add(style);
      wanted.push({ url, style });
    }

    return await Promise.all(
      wanted.map(async ({ url, style }) => ({
        data: await fetch(url).then((res) => res.arrayBuffer()),
        style,
      }))
    );
  } catch {
    return [];
  }
}

export default async function OpengraphImage() {
  const newsreader = await loadNewsreader();
  const display = newsreader.length > 0 ? "Newsreader" : "sans-serif";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#fbfaf7",
          padding: "72px 80px",
        }}
      >
        {/* Brand lockup */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={markDataUri} width={64} height={64} alt="" />
          <span
            style={{
              marginLeft: 20,
              fontFamily: display,
              fontSize: 38,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "#101f24",
            }}
          >
            {site.name}
          </span>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontFamily: display,
              fontSize: 92,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#101f24",
            }}
          >
            Write stories,
          </span>
          <span
            style={{
              fontFamily: display,
              fontSize: 92,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              fontStyle: "italic",
              color: "#0a6c71",
            }}
          >
            not distractions.
          </span>
        </div>

        {/* Meta row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #dfe2de",
            paddingTop: 28,
          }}
        >
          <span style={{ fontSize: 26, color: "#3a494f" }}>
            Open source · Local-first · Native macOS
          </span>
          <span style={{ fontSize: 26, fontWeight: 600, color: "#0a6c71" }}>
            storyloom.app
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: newsreader.map(({ data, style }) => ({
        name: "Newsreader",
        data,
        style,
        weight: 600 as const,
      })),
    }
  );
}
