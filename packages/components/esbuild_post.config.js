const esbuild = require("esbuild")

esbuild
  .build({
    entryPoints: ["./styles/styles.css"],
    outfile: "dist/styles.css",
    bundle: true,
  })
  .catch(e => {
    process.exit()
  })
