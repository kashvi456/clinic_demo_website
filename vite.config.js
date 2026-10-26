import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base path lets the built site work from any static host or sub-folder.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
