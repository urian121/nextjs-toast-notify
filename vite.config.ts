import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'nextjs-toast-notify',
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      output: {
        entryFileNames: 'index.js',
      },
    },
  },
  plugins: [
    dts({
      outDir: 'dist',
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'src/styles/nextjs-toast-notify.css',
          dest: 'styles',
        },
        {
          src: 'src/sonidos/*',
          dest: 'sonidos',
        },
      ],
    }),
  ],
});