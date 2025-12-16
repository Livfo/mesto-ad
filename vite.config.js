import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    open: true, 
    port: 3000, 
    host: true,  
  },
  build: {
    outDir: 'Mesto-build',
    emptyOutDir: true,
  }
})