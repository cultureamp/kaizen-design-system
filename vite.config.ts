/** @type {import('vite').UserConfig} */
import path from "path"
import tsconfigPaths from "vite-tsconfig-paths"

export default {
  plugins: [tsconfigPaths()],
  test: {
    include: ["**/*.spec.ts?(x)", "!**/*.jest.spec.ts?(x)"],
    environment: "jsdom",
    globals: true,
    setupFiles: path.resolve(__dirname, "./vitest.setup.ts"),
  },
}
