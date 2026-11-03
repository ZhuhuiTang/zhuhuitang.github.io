import { mkdir, readFile, writeFile } from "node:fs/promises"
import { join } from "node:path"
import { fileURLToPath } from "node:url"

const outputDirectory = fileURLToPath(new URL("../dist/", import.meta.url))
const html = await readFile(join(outputDirectory, "index.html"), "utf8")

// GitHub Pages needs a real HTML entry for each browser-router URL.
// Keep these paths aligned with src/app/routes.tsx when adding new pages.
const routes = [
  "projects",
  "publications",
  "projects/multimodal-physiological-sensing",
  "projects/interactive-insomnia-knowledge-system",
]

for (const route of routes) {
  const directory = join(outputDirectory, route)
  await mkdir(directory, { recursive: true })
  await writeFile(join(directory, "index.html"), html)
}

await writeFile(join(outputDirectory, "404.html"), html)
await writeFile(join(outputDirectory, ".nojekyll"), "")

console.log(`Prepared ${routes.length} page routes and a 404 page for GitHub Pages.`)
