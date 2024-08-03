import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

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
        // Por defecto no renombra el CSS, lo hacemos en el siguiente paso
      },
    },
  },
  plugins: [
    dts({
      outDir: 'dist',
    }),
  ],
});
