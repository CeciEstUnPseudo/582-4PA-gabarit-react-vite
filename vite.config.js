import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"", // Ajouter le no du dépot github si on publie sur GH pages : "/NOMduDEPOT/"
})
