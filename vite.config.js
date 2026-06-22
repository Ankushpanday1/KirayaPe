import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        landlord: resolve(__dirname, 'landlord.html'),
        flatfinder: resolve(__dirname, 'flat-finder.html'),
      },
    },
  },
})
