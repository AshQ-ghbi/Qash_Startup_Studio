import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    sourcemap: false,
  },
  server: {
    proxy: {
      // In local dev, run `vercel dev` instead to serve /api. This is a fallback no-op.
    },
  },
});
