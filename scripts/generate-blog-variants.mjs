import sharp from 'sharp'
import { readdir } from 'node:fs/promises'
import { basename, extname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const directory = fileURLToPath(new URL('../public/images/blog/', import.meta.url))
const sourceNames = (await readdir(directory)).filter((name) => name.endsWith('.webp') && !/-(?:600|1200)\.webp$/.test(name))

for (const name of sourceNames) {
  const source = join(directory, name)
  const stem = basename(name, extname(name))
  for (const width of [600, 1200]) {
    await sharp(source).resize({ width, withoutEnlargement: true }).webp({ quality: 78 }).toFile(join(directory, `${stem}-${width}.webp`))
    await sharp(source).resize({ width, withoutEnlargement: true }).avif({ quality: 55 }).toFile(join(directory, `${stem}-${width}.avif`))
  }
}
console.log(`Generated responsive variants for ${sourceNames.length} blog images.`)
