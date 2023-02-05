import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
export const foo = 12;
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/faq-accordion-card/'
})
