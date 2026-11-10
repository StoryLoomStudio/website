import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Several lockfiles exist above this directory; pin the root so Next stops
  // inferring the wrong one.
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
