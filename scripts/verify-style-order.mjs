import { readFile } from "node:fs/promises"

const output = new URL("../dist/", import.meta.url)
const html = await readFile(new URL("index.html", output), "utf8")
const stylesheets = [...html.matchAll(/<link\b[^>]*>/g)]
  .map(([tag]) => tag)
  .filter((tag) => /rel=["']stylesheet["']/.test(tag))
  .map((tag) => /href=["']([^"']+)["']/.exec(tag)?.[1])

if (!stylesheets.length) throw new Error("No built stylesheet found")

const order = []
for (const href of stylesheets) {
  if (!href || !href.startsWith("/assets/")) {
    throw new Error("Expected a local built stylesheet")
  }
  const css = await readFile(new URL(href.slice(1), output), "utf8")
  for (const match of css.matchAll(/@layer\s+([^;{]+)/g)) {
    for (const name of match[1].split(",").map((value) => value.trim())) {
      if (!order.includes(name)) order.push(name)
    }
  }
}

// The first occurrence fixes layer precedence, even when later rules declare it again.
const expected = ["theme", "base", "components", "utilities"]
const actual = order.filter((name) => expected.includes(name))
if (actual.join(",") !== expected.join(",")) {
  throw new Error(`Invalid CSS layer order: ${order.join(" → ")}`)
}

console.log("Verified CSS layers: theme → base → components → utilities")
