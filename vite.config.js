import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync, mkdirSync } from 'fs'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-assets',
      closeBundle() {
        const srcDir = resolve(__dirname, 'public/assets')
        const destDir = resolve(__dirname, 'dist/assets')
        
        if (!existsSync(destDir)) {
          mkdirSync(destDir, { recursive: true })
        }
        
        const files = ['belco.jpeg', 'CV_pro.pdf']
        files.forEach(file => {
          const src = resolve(srcDir, file)
          const dest = resolve(destDir, file)
          if (existsSync(src)) {
            copyFileSync(src, dest)
          }
        })
      }
    }
  ],
  base: '/portfolio/',
  server: {
    port: 5173,
    host: true,
  },
})