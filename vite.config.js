import { defineConfig } from 'vite';
import { readFileSync } from 'node:fs';

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url)));

// Build a tiny bootstrap (assets/main.js) plus the application chunk
// (assets/app.js). The bootstrap guard must run before application dependencies.
export default defineConfig({
  base: './',
  define: {
    __HSC_VERSION__: JSON.stringify(pkg.version),
  },
  server: { cors: true },
  preview: { cors: true },
  build: {
    target: 'es2020',
    rollupOptions: {
      input: 'src/main.js',
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
});
