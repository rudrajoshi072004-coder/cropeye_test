import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // Gateway is served at root (/) on Render
  base: "/",
  server: {
    port: 5173,
    strictPort: true,
  },
}));

