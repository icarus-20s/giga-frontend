import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  build: {
    chunkSizeWarningLimit: 1000, // optional: increases limit from 500 → 1000 kB

    rollupOptions: {
      output: {
        // Smart chunk splitting
        manualChunks(id) {
          // Split node_modules into one vendor chunk
          if (id.includes("node_modules")) {
            return "vendor";
          }

          // Create separate chunk for heavy libraries
          if (id.includes("framer-motion")) return "motion";
          if (id.includes("lucide-react")) return "icons";
        },
      },
    },
  },
});
