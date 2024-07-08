import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src', // Set the root directory to 'src'
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        create: resolve(__dirname, 'src/pages/create.html')
      }
    }
  },
  server: {
    open: '/', // Automatically open the main page
    fs: {
      strict: false // Allow serving files outside the root
    }
  }
});
