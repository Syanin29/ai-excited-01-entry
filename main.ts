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
const sourceBytes = readFileSync(source);
const outputBytes = readFileSync(output);
if (!sourceBytes.equals(outputBytes)) {
  throw new Error('Written output differs from source image');
}
if (statSync(output).size > 1048576) {
  throw new Error('Output image exceeds 1048576 bytes');
}
