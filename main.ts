// A bioluminescent whale breaching over a tiny lighthouse.
import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const source = join(import.meta.dirname, 'entry.png');
if (!existsSync(source)) {
  throw new Error(`Entry image not found: ${source}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outputDir, { recursive: true });
copyFileSync(source, join(outputDir, 'entry.png'));
const output = join(outputDir, 'entry.png');
if (!readFileSync(output).equals(readFileSync(source))) {
  throw new Error('Written output does not match source bytes');
}
if (statSync(output).size > 1048576) {
  throw new Error('Written output exceeds 1048576 bytes');
}
