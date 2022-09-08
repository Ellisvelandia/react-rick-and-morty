import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://<USERNAME>.github.io/<REPO>/",
  plugins: [react()]
})
