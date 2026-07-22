import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// This is the OPEN twin of the hosted tool, so there is deliberately no
// javascript-obfuscator pass and no `domainLock` here. The upstream build locks
// the methodology chunk to metaudits.rijdho.org, which would silently refuse to
// run anywhere else — on github.io the page would load and simply do nothing.
// Publishing the calibration in readable form is the point of this repo.
//
// `base: "./"` keeps built asset URLs relative, so the same bundle works at a
// GitHub Pages project subpath (/coara-action-planner/), at a domain root, or
// served from a local static server.
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    // esbuild (Vite's default) rather than the upstream Terser pass: toplevel
    // mangling and drop_console exist there to make the shipped code hostile to
    // reading. Here the source is the product — minify for size, nothing more.
    minify: "esbuild",
    sourcemap: true,
  },
});
