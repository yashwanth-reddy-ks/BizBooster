import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/BizBooster/',   // ✅ correct place
  optimizeDeps: {
    exclude: ['lucide-react']
  }
});