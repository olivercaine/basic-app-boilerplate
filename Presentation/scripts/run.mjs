import { spawnSync } from 'node:child_process'
import { readdirSync } from 'node:fs'
import { homedir } from 'node:os'
import { delimiter, join } from 'node:path'

const [major, minor] = process.versions.node.split('.').map(Number)
const supported = major > 20 || (major === 20 && minor >= 12)

function newerNode() {
  const root = join(homedir(), '.nvm/versions/node')
  let versions = []
  try {
    versions = readdirSync(root)
      .map((name) => {
        const [maj, min, pat] = name.slice(1).split('.').map(Number)
        return { name, maj, min, pat }
      })
      .filter((version) => version.maj > 20 || (version.maj === 20 && version.min >= 12))
      .sort((a, b) => a.maj - b.maj || a.min - b.min || a.pat - b.pat)
  } catch {
    versions = []
  }

  const pick = versions.find((version) => version.maj === 22) ?? versions.at(-1)
  if (!pick) {
    console.error(`Slidev needs Node 20.12 or newer. This shell is on ${process.version}.`)
    console.error('Install it with: nvm install 22')
    process.exit(1)
  }

  return join(root, pick.name, 'bin', 'node')
}

const node = supported ? process.execPath : newerNode()
const env = { ...process.env }
if (!supported) {
  env.PATH = `${join(node, '..')}${delimiter}${env.PATH ?? ''}`
}

const result = spawnSync(node, process.argv.slice(2), {
  stdio: 'inherit',
  env,
})

process.exit(result.status ?? 1)
