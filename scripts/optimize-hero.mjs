import sharp from 'sharp';
import { readdir, stat, writeFile } from 'fs/promises';
import path from 'path';

const srcDir = path.resolve('src/assets/images');
const heroPattern = /^hero-(ac|washing-machine|refrigerator|microwave)\.png$/i;
const widths = [480, 800, 1200, 1600];
const quality = 80; // target quality

async function processFile(file) {
  const base = path.basename(file, '.png'); // e.g., hero-ac
  const inputPath = path.join(srcDir, file);
  const { size: originalSize } = await stat(inputPath);
  const image = sharp(inputPath);
  const metadata = await image.metadata();
  const { width: origW, height: origH } = metadata;

  console.log(`\nProcessing ${file} (${(originalSize/1024).toFixed(1)}KB) dimensions ${origW}x${origH}`);

  for (const w of widths) {
    if (origW && w > origW) continue; // withoutEnlargement
    const outName = `${base}-${w}.webp`;
    const outPath = path.join(srcDir, outName);
    await image
      .clone()
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality, lossless: false })
      .toFile(outPath);
    const { size: newSize } = await stat(outPath);
    console.log(`  → ${outName}: ${(newSize/1024).toFixed(1)}KB (${((newSize/originalSize)*100).toFixed(1)}% of original)`);
  }
}

async function main() {
  try {
    const files = await readdir(srcDir);
    const heroFiles = files.filter((f) => heroPattern.test(f));
    if (!heroFiles.length) {
      console.log('No hero PNGs found.');
      return;
    }
    for (const file of heroFiles) {
      await processFile(file);
    }
    console.log('\nOptimization complete.');
  } catch (err) {
    console.error('Error during optimization:', err);
    process.exit(1);
  }
}

main();

