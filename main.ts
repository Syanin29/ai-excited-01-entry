// ai-excited-01 — "Make the AI judge excited" ($250)
// Entry: a colossal bioluminescent whale breaching over a tiny lighthouse
// at night — a single glowing subject, a scale twist, frozen mid-breach.
// The program copies the entry image beside it to the output directory.
// Rebuild in a recorded session for submission.

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(here, "entry.png");
if (!existsSync(source)) {
  throw new Error(`entry image not found: ${source}`);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, join(outputDir, "entry.png"));
