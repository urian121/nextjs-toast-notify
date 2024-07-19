import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/main.tsx",
      name: "ReactNextjsToastNotify",
      formats: ["es", "umd"],
      fileName: (format) => `react-nextjs-toast-notify.${format}.js`,
    },
    rollupOptions: {
      // Configura dependencias externas y globals
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
