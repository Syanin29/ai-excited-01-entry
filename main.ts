// ai-excited-01 — "Make the AI judge excited" ($250, make.fun)
// Entry: a bioluminescent whale breaching over a tiny lighthouse.
// This program copies the entry image (entry.png, beside this file) into the
// output directory given by MAKEFUN_OUTPUT_DIR (default /output).
// Rebuild in a recorded session for submission.

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

if (!existsSync(source)) {
  throw new Error(`entry image not found: ${source}`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "entry.png"));
console.log(`wrote ${join(outDir, "entry.png")}`);
