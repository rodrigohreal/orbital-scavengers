import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: Cambia 'nombre-de-tu-repo' por el nombre EXACTO que le pondrás a tu repositorio en GitHub.
  // Si tu repositorio se llamará "orbital-game", pon base: '/orbital-game/'
  base: '/orbital-scavengers/', 
})