import { defineConfig, type Plugin } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

function dropManualChunks(): Plugin {
  return {
    name: 'drop-manual-chunks',
    enforce: 'post',
    configResolved(config) {
      const output = config.build.rollupOptions.output
      const outputs = Array.isArray(output) ? output : output ? [output] : []
      for (const item of outputs) {
        delete item.manualChunks
      }
    },
  }
}

export default defineConfig({
  plugins: [viteSingleFile(), dropManualChunks()],
})
