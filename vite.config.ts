import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // This is a common setup for shadcn/ui
      // You might need to adjust this based on your tsconfig.json
      '@': path.resolve(import.meta.dirname, 'client', 'src'),
      '@shared': path.resolve(import.meta.dirname, 'shared'),
      '@assets': path.resolve(import.meta.dirname, 'attached_assets'),
    },
  },
  root: path.resolve(import.meta.dirname, 'client'),
  build: {
    outDir: path.resolve(import.meta.dirname, 'dist/public'),
    emptyOutDir: true,
  },
  // THIS IS THE MOST IMPORTANT PART
  // The Replit plugins were handling this for you.
  // This tells your Vite dev server (frontend) to send
  // any requests to /api/... to your Express backend.
  server: {
    host: '127.0.0.1',
    port: 5000,
    // fs: {
    //   strict: true,
    //   deny: ['**/.*'],
    // },
    proxy: {
      // Assuming your Express server API routes
      // are something like /api/v1/users
      // Adjust this '/api' path if your backend routes are different.
      '/api': {
        // We're running 'tsx server/index.ts', which likely
        // starts the server on port 3001.
        // Change this if your Express server runs on a different port.
        target: 'http://127.0.0.1:5000',
        changeOrigin: true,
      },
    },
  },
});
