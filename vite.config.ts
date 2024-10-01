import { TanStackRouterVite as tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import { VitePWA as pwa } from "vite-plugin-pwa";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  base: process.env.GITHUB_REPOSITORY ? `/fizjo-plus/` : "/",
  define: {
    "import.meta.env.VITE_SUPABASE_ANON_KEY": JSON.stringify(
      process.env.VITE_SUPABASE_ANON_KEY,
    ),
    "import.meta.env.VITE_SUPABASE_URL": JSON.stringify(
      process.env.VITE_SUPABASE_URL,
    ),
  },
  plugins: [
    react(),
    tanstackRouter(),
    svgr(),
    pwa({
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest: {
        description: "",
        icons: [
          {
            sizes: "192x192",
            src: "/icon-192x192.png",
            type: "image/png",
          },
          {
            sizes: "512x512",
            src: "/icon-512x512.png",
            type: "image/png",
          },
        ],
        name: "fizjo-plus",
        short_name: "fizjo-plus",
        theme_color: "#ffffff",
      },
      registerType: "autoUpdate",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
