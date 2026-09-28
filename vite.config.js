import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Publishing the calibration in readable form is the point of this repo, so the
// build stays plain on purpose.
//
// `base: "./"` keeps built asset URLs relative, so the same bundle works at a
// GitHub Pages project subpath (/coara-action-planner/), at a domain root, or
// served from a local static server.
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    // esbuild (Vite's default). The source is the product: minify for size,
    // nothing more.
    minify: "esbuild",
    sourcemap: true,
  },
});
