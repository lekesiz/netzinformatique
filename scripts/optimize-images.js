#!/usr/bin/env node

import sharp from 'sharp'
import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PUBLIC_DIR = path.join(__dirname, '../public')
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images')

// Image optimization settings
const QUALITY = {
  webp: 80,
  jpeg: 85,
  png: 90,
}

const FORMATS = ['webp', 'jpeg']

/**
 * Get all image files recursively
 */
async function getImageFiles(dir) {
  const files = []

  async function traverse(currentDir) {
    const entries = await fs.readdir(currentDir, { withFileTypes: true })

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name)

      if (entry.isDirectory()) {
        await traverse(fullPath)
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase()
        if (['.jpg', '.jpeg', '.png'].includes(ext)) {
          files.push(fullPath)
        }
      }
    }
  }

  await traverse(dir)
  return files
}

/**
 * Optimize a single image
 */
async function optimizeImage(filePath) {
  const filename = path.basename(filePath)
  const dir = path.dirname(filePath)
  const ext = path.extname(filename)
  const name = path.basename(filename, ext)

  console.log(`Optimizing ${filename}...`)

  try {
    const image = sharp(filePath)
    const metadata = await image.metadata()

    // Get file size before optimization
    const statsBefore = await fs.stat(filePath)
    const sizeBefore = statsBefore.size

    let optimized = false

    // Generate WebP version
    const webpPath = path.join(dir, `${name}.webp`)
    try {
      await image
        .clone()
        .webp({ quality: QUALITY.webp })
        .toFile(webpPath)

      const statsWebP = await fs.stat(webpPath)
      console.log(`  ✓ Generated WebP: ${(statsWebP.size / 1024).toFixed(2)} KB`)
      optimized = true
    } catch (error) {
      console.error(`  ✗ WebP conversion failed:`, error.message)
    }

    // Optimize original format
    if (ext === '.jpg' || ext === '.jpeg') {
      const tempPath = path.join(dir, `${name}.temp.jpg`)
      await image
        .clone()
        .jpeg({ quality: QUALITY.jpeg, progressive: true })
        .toFile(tempPath)

      const statsAfter = await fs.stat(tempPath)
      const sizeAfter = statsAfter.size

      if (sizeAfter < sizeBefore) {
        await fs.rename(tempPath, filePath)
        const saved = ((sizeBefore - sizeAfter) / 1024).toFixed(2)
        console.log(`  ✓ Optimized JPEG: saved ${saved} KB`)
        optimized = true
      } else {
        await fs.unlink(tempPath)
        console.log(`  ℹ JPEG already optimized`)
      }
    } else if (ext === '.png') {
      const tempPath = path.join(dir, `${name}.temp.png`)
      await image
        .clone()
        .png({ quality: QUALITY.png, compressionLevel: 9 })
        .toFile(tempPath)

      const statsAfter = await fs.stat(tempPath)
      const sizeAfter = statsAfter.size

      if (sizeAfter < sizeBefore) {
        await fs.rename(tempPath, filePath)
        const saved = ((sizeBefore - sizeAfter) / 1024).toFixed(2)
        console.log(`  ✓ Optimized PNG: saved ${saved} KB`)
        optimized = true
      } else {
        await fs.unlink(tempPath)
        console.log(`  ℹ PNG already optimized`)
      }
    }

    return optimized
  } catch (error) {
    console.error(`  ✗ Error optimizing ${filename}:`, error.message)
    return false
  }
}

/**
 * Main optimization function
 */
async function main() {
  console.log('🖼️  Image Optimization Script\n')
  console.log(`📁 Scanning directory: ${IMAGES_DIR}\n`)

  try {
    // Check if images directory exists
    await fs.access(IMAGES_DIR)
  } catch (error) {
    console.error(`❌ Images directory not found: ${IMAGES_DIR}`)
    process.exit(1)
  }

  // Get all image files
  const imageFiles = await getImageFiles(IMAGES_DIR)

  if (imageFiles.length === 0) {
    console.log('ℹ️  No images found to optimize')
    return
  }

  console.log(`Found ${imageFiles.length} images to process\n`)

  let optimizedCount = 0
  let totalSizeBefore = 0
  let totalSizeAfter = 0

  // Process each image
  for (const filePath of imageFiles) {
    const statsBefore = await fs.stat(filePath)
    totalSizeBefore += statsBefore.size

    const wasOptimized = await optimizeImage(filePath)

    const statsAfter = await fs.stat(filePath)
    totalSizeAfter += statsAfter.size

    if (wasOptimized) {
      optimizedCount++
    }

    console.log('') // Empty line for readability
  }

  // Summary
  const savedKB = ((totalSizeBefore - totalSizeAfter) / 1024).toFixed(2)
  const savedPercent = ((1 - totalSizeAfter / totalSizeBefore) * 100).toFixed(1)

  console.log('═'.repeat(50))
  console.log('✅ Optimization Complete!')
  console.log(`📊 Processed: ${imageFiles.length} images`)
  console.log(`✨ Optimized: ${optimizedCount} images`)
  console.log(`💾 Space saved: ${savedKB} KB (${savedPercent}%)`)
  console.log('═'.repeat(50))
}

// Run the script
main().catch(error => {
  console.error('❌ Script failed:', error)
  process.exit(1)
})
