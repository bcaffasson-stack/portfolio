import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // ✅ Utilise le mode pour détecter la production
  base: mode === 'production' ? '/portfolio/' : '/',
  server: {
    port: 5173,
    host: true,
  },
}))