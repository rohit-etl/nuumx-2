import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: [
      '2f27-2401-4900-8842-26be-b1be-4789-36f0-3e1.ngrok-free.app'
    ]
  }
})
