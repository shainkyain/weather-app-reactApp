import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Directory for the build output
  },
  base: '/weather-app-reactApp/', // Base URL for GitHub Pages
})
