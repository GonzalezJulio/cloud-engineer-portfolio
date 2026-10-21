import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "next/navigation": fileURLToPath(
        new URL("./src/stubs/next-navigation.ts", import.meta.url)
      ),
      "next/navigation.js": fileURLToPath(
        new URL("./src/stubs/next-navigation.ts", import.meta.url)
      ),
    },
  },
});