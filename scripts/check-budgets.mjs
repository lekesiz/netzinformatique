import { readdir, readFile, stat } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../dist/', import.meta.url))
const html = await readFile(join(root, 'index.html'), 'utf8')
const initialPaths = [...html.matchAll(/<(?:script|link)[^>]+(?:src|href)="(\/assets\/(?:js|css)\/[^"]+)"/g)].map((match) => match[1])
const uniqueInitial = [...new Set(initialPaths)]
const initialBytes = (await Promise.all(uniqueInitial.map((path) => stat(join(root, path))))).reduce((sum, file) => sum + file.size, 0)

const walk = async (directory) => (await Promise.all((await readdir(directory, { withFileTypes: true })).map(async (entry) => {
  const path = join(directory, entry.name)
  return entry.isDirectory() ? walk(path) : [{ path, size: (await stat(path)).size }]
}))).flat()

const assets = await walk(join(root, 'assets'))
const allFiles = await walk(root)
const js = assets.filter((file) => file.path.endsWith('.js'))
const css = assets.filter((file) => file.path.endsWith('.css'))
const images = allFiles.filter((file) => /\.(?:avif|webp|png|jpe?g)$/i.test(file.path))
const largest = (files) => Math.max(0, ...files.map((file) => file.size))
const budgets = [
  ['initial JS/CSS', initialBytes, 900_000],
  ['largest JS chunk', largest(js), 550_000],
  ['largest CSS file', largest(css), 150_000],
  ['largest built image', largest(images), 500_000],
]
let failed = false
for (const [label, actual, limit] of budgets) {
  console.log(`${label}: ${Math.round(actual / 1024)} KiB / ${Math.round(limit / 1024)} KiB`)
  if (actual > limit) failed = true
}
if (failed) throw new Error('One or more production asset budgets were exceeded.')
