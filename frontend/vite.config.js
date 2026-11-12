import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/mern-fullstack-crud-app/',
  plugins: [react()],
})
