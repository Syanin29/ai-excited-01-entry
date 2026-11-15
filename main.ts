// A bioluminescent whale breaching over a tiny lighthouse.
import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const source = join(import.meta.dirname, 'entry.png');
if (!existsSync(source)) {
  throw new Error(`Entry image not found: ${source}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outputDir, { recursive: true });
copyFileSync(source, join(outputDir, 'entry.png'));
