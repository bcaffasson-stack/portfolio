import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // ✅ '/' en local, '/portfolio/' sur GitHub Pages
  base: command === 'build' ? '/portfolio/' : '/',
  server: {
    port: 5173,
    host: true,
  },
}))