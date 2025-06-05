import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'NextjsToastNotify',
      fileName: (format) => (format === 'es' ? 'index.es.js' : 'nextjs-toast-notify.js'),
      formats: ['es', 'iife'],
    },
    rollupOptions: {
      output: {
        entryFileNames: '[name].[format].js',
      },
    },
    cssCodeSplit: false, // ✅ IMPORTANTE
  },
  plugins: [
    dts({
      outDir: 'dist',
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'src/sonidos/*',
          dest: 'sonidos',
        },
      ],
    }),
  ],
});
