import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ command, isPreview }) => ({
  plugins: [react()],
  // GitHub Pages serves the site from /react-movie-app/; keep the dev server at /
  base: command === 'serve' && !isPreview ? '/' : '/react-movie-app/',
}))
