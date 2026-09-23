import { readFile } from "node:fs/promises";
import { join } from "node:path";

const fontDir = join(process.cwd(), "node_modules/@fontsource/oswald/files");

const subsets = ["latin", "cyrillic", "cyrillic-ext"];

// Satori reads woff (not woff2) and only falls back across differently named fonts,
// so each subset file gets its own name. The cyrillic-ext file carries the Kazakh letters.
export const ogFontFamily = subsets.map((subset) => `Oswald-${subset}`).join(", ");

export const loadOswald = () =>
  Promise.all(
    subsets.map(async (subset) => ({
      name: `Oswald-${subset}`,
      data: await readFile(join(fontDir, `oswald-${subset}-700-normal.woff`)),
      weight: 700 as const,
      style: "normal" as const,
    })),
  );

export const brandGradient =
  "radial-gradient(circle at 100% 0%, #0066ff 0%, #0036b3 38%, #051546 70%, #000520 100%)";

export function Mark({ width, color = "#fff" }: { width: number; color?: string }) {
  return (
    <svg width={width} height={(width * 626) / 465} viewBox="0 0 465 626" fill={color}>
      <path d="M0 457 129 383v167L0 625z" />
      <path d="M166 365 296 290v261L166 626z" />
      <path d="M334 267 463 191v360L334 626z" />
      <path d="M132 275 282 184 210 155 465 0v146L132 345z" />
    </svg>
  );
}
