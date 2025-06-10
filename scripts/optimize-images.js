// optimize-images.mjs or optimize-images.js with "type": "module" in package.json

import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

async function optimizeImage(inputPath) {
    try {
        const imageBuffer = await sharp(inputPath)
            .resize(1200, 800, {
                fit: 'inside',
                withoutEnlargement: true
            })
            .jpeg({
                quality: 65,
                progressive: true,
                mozjpeg: true
            })
            .toBuffer();

        await fs.writeFile(inputPath, imageBuffer);
        console.log(`✅ Optimized: ${inputPath}`);
    } catch (error) {
        console.error(`❌ Error processing ${inputPath}:`, error.message);
    }
}

async function main() {
    const images = [
        'src/assets/about/img1.jpg',
        'src/assets/about/img2.jpg',
        'src/assets/about/img3.jpg',
        'src/assets/about/img4.jpg',
        'src/assets/services/dental-implant.jpg',
        'src/assets/services/laminates.jpg',
        'src/assets/services/dentures.jpg',
        'src/assets/services/teeth-cleaning.jpg'
    ];

    for (const image of images) {
        const resolvedPath = path.resolve(image);
        await optimizeImage(resolvedPath);
    }
}

main().catch(console.error);
