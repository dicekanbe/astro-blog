import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, parse } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const imagesDir = join(__dirname, '../public/images');

async function convertToWebP() {
  try {
    const files = await readdir(imagesDir);
    const pngFiles = files.filter(file => file.endsWith('.png'));

    console.log(`Found ${pngFiles.length} PNG files to convert...\n`);

    let successCount = 0;
    let totalOriginalSize = 0;
    let totalWebPSize = 0;

    for (const file of pngFiles) {
      const inputPath = join(imagesDir, file);
      const { name } = parse(file);
      const outputPath = join(imagesDir, `${name}.webp`);

      try {
        // Get original file size
        const originalStats = await stat(inputPath);
        const originalSize = originalStats.size;

        // Convert to WebP with quality 85
        await sharp(inputPath)
          .webp({ quality: 85 })
          .toFile(outputPath);

        // Get WebP file size
        const webpStats = await stat(outputPath);
        const webpSize = webpStats.size;

        const savedPercent = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
        const originalMB = (originalSize / 1024 / 1024).toFixed(2);
        const webpMB = (webpSize / 1024 / 1024).toFixed(2);

        console.log(`✓ ${file}`);
        console.log(`  Original: ${originalMB}MB → WebP: ${webpMB}MB (saved ${savedPercent}%)`);

        totalOriginalSize += originalSize;
        totalWebPSize += webpSize;
        successCount++;
      } catch (error) {
        console.error(`✗ Failed to convert ${file}:`, error.message);
      }
    }

    const totalSavedPercent = ((totalOriginalSize - totalWebPSize) / totalOriginalSize * 100).toFixed(1);
    const totalOriginalMB = (totalOriginalSize / 1024 / 1024).toFixed(2);
    const totalWebPMB = (totalWebPSize / 1024 / 1024).toFixed(2);
    const totalSavedMB = ((totalOriginalSize - totalWebPSize) / 1024 / 1024).toFixed(2);

    console.log(`\n=== Conversion Complete ===`);
    console.log(`Successfully converted: ${successCount}/${pngFiles.length} files`);
    console.log(`Total original size: ${totalOriginalMB}MB`);
    console.log(`Total WebP size: ${totalWebPMB}MB`);
    console.log(`Total saved: ${totalSavedMB}MB (${totalSavedPercent}%)`);
    console.log(`\nNote: Original PNG files are kept for backup.`);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

convertToWebP();
