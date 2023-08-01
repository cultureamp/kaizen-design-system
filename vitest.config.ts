import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vitest/config"

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    globalSetup: "./vitest.globals.ts",
    setupFiles: ["./vitest.setup.ts"],
    include: ["?(draft-)packages/**/*.spec.ts?(x)"],
  },
  resolve: {
    alias: {
      "~types": path.resolve(__dirname, "packages/components/src/types"),
      "~utils": path.resolve(__dirname, "packages/components/src/utils"),
      "~components": path.resolve(__dirname, "packages/components/src"),
      "~icons": path.resolve(__dirname, "packages/components/src/SVG/icons"),
    },
  },
})
