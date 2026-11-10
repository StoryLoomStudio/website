import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "group flex items-center gap-2.5 outline-offset-4 transition-opacity duration-200 hover:opacity-80",
        className
      )}
      aria-label="StoryLoom home"
    >
      <Image src="/storyloom.svg" alt="" width={28} height={28} className="h-7 w-7" priority />
      <span className="font-display text-[1.4rem] leading-none font-semibold text-ink">
        StoryLoom
      </span>
    </Link>
  );
}
