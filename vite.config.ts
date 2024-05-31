import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://aborja-dev.github.io/contact-form/',
  plugins: [react()],
})
