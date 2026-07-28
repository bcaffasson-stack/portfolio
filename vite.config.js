import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // ✅ Utilise '/' en local, '/portfolio/' sur GitHub Pages
  base: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',
  server: {
    port: 5173,
    host: true,
  },
})