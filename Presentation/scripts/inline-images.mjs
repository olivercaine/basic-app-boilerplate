import { readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const dist = new URL('../dist/', import.meta.url)
const htmlPath = new URL('../dist/index.html', import.meta.url)
let html = readFileSync(htmlPath, 'utf8')

for (const name of readdirSync(dist)) {
  if (!name.endsWith('.png')) continue
  const bytes = readFileSync(join(dist.pathname, name))
  const dataUrl = `data:image/png;base64,${bytes.toString('base64')}`
  html = html.replaceAll(
    `new URL(\`${name}\`,import.meta.url).href`,
    JSON.stringify(dataUrl),
  )
  html = html.replaceAll(`"./${name}"`, JSON.stringify(dataUrl))
  html = html.replaceAll(`'./${name}'`, JSON.stringify(dataUrl))
  html = html.replaceAll(`\`./${name}\``, JSON.stringify(dataUrl))
}

const out = new URL('../huddle-ai.html', import.meta.url)
writeFileSync(out, html)
console.log(`Wrote ${out.pathname} (${(html.length / 1024 / 1024).toFixed(1)} MB)`)
