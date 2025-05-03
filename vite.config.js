import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'  // Closing quote added
import tailwindcss from '@tailwindcss/vite'  // Closing quote added

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
