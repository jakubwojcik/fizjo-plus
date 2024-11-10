import { TanStackRouterVite as tanstackRouterPlugin } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import faviconInjectPlugin from "vite-plugin-favicons-inject";
import svgrPlugin from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    tanstackRouterPlugin(),
    svgrPlugin(),
    faviconInjectPlugin("./src/assets/logos/fizjoplus_favicon_source.svg"),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
