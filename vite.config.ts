import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "react-nextjs-toast-notify",
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      output: {
        format: "es",
        entryFileNames: "index.js",
      },
    },
  },
  plugins: [
    dts({
      outDir: "dist",
    }),
  ],
});
