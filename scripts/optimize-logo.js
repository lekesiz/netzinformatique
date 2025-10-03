import sharp from 'sharp';
import { promises as fs } from 'fs';

async function optimizeLogo() {
  try {
    // Original logo'yu oku
    const logoBuffer = await fs.readFile('public/logo.png');
    
    // Web için optimize edilmiş logo (header için)
    await sharp(logoBuffer)
      .resize(200, null, { withoutEnlargement: true })
      .png({ quality: 90, compressionLevel: 9 })
      .toFile('public/logo-optimized.png');
    
    // Favicon için küçük versiyon
    await sharp(logoBuffer)
      .resize(32, 32)
      .png()
      .toFile('public/favicon-32x32.png');
    
    await sharp(logoBuffer)
      .resize(16, 16)
      .png()
      .toFile('public/favicon-16x16.png');
    
    // ICO formatında favicon
    await sharp(logoBuffer)
      .resize(32, 32)
      .toFormat('ico')
      .toFile('public/favicon.ico');
    
    console.log('✅ Logo optimization complete!');
  } catch (error) {
    console.error('Error optimizing logo:', error);
  }
}

optimizeLogo();