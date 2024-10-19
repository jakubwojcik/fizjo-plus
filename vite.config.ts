import { TanStackRouterVite as tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  base: process.env.GITHUB_REPOSITORY ? `/fizjo-plus/` : "/",
  plugins: [react(), tanstackRouter(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
