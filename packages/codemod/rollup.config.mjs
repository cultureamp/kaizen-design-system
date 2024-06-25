import { rollupConfig, pluginsDefault } from "@kaizen/package-bundler";

export default rollupConfig({
  input: { cli: "./src/cli.ts" },
  plugins: pluginsDefault,
})
