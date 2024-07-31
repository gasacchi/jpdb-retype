import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'jpdb-retype',
      // the proper extensions will be added
      fileName: 'jpdb-retype',
    },
  },
})
