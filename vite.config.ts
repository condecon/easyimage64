import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "EasyImage64",
        short_name: "EasyImage64",
        start_url: "/"
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,webmanifest, woff2}"]
      }
    })
  ],
})
