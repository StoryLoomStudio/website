import Image from "next/image";

import appShot from "@/public/images/storyloom-app.jpg";

type ShotCropProps = {
  /** Region of the 1600 x 1104 product screenshot to show, in source pixels. */
  x: number;
  y: number;
  w: number;
  h: number;
  /** Width of the crop on desktop, in vw, so the browser fetches enough pixels. */
  vw: number;
  alt: string;
  /** Edges that dissolve into the page instead of ending in a hard cut. */
  fade?: ("right" | "bottom")[];
  className?: string;
};

/**
 * Shows one region of the real product screenshot, so the page can point at a
 * single part of the app (the manuscript tree, a character card) without a
 * second, hand-built mock of it. The full screenshot is scaled up behind a
 * clipping box; `sizes` is written for that scaled width so it stays sharp.
 */
export function ShotCrop({ x, y, w, h, vw, alt, fade = [], className }: ShotCropProps) {
  const { width } = appShot;
  const scale = width / w;

  const masks = fade.map((edge) =>
    edge === "right"
      ? "linear-gradient(to right, #000 68%, transparent 100%)"
      : "linear-gradient(to bottom, #000 76%, transparent 100%)"
  );
  const mask = masks.length > 0 ? masks.join(", ") : undefined;

  return (
    <div
      className={className}
      style={{
        aspectRatio: `${w} / ${h}`,
        position: "relative",
        overflow: "hidden",
        maskImage: mask,
        WebkitMaskImage: mask,
        maskComposite: masks.length > 1 ? "intersect" : undefined,
        WebkitMaskComposite: masks.length > 1 ? "source-in" : undefined,
      }}
    >
      <Image
        src={appShot}
        alt={alt}
        sizes={`(min-width: 1024px) ${Math.round(vw * scale)}vw, ${Math.round(100 * scale)}vw`}
        quality={85}
        style={{
          position: "absolute",
          maxWidth: "none",
          width: `${scale * 100}%`,
          height: "auto",
          left: `${(-x / w) * 100}%`,
          top: `${(-y / h) * 100}%`,
        }}
      />
    </div>
  );
}
