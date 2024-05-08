import replace from "replace-in-file"

const options = {
  files: "dist/esm/**/*.module.scss.mjs",
  from: "styleInject(",
  to: "/*#__PURE__*/styleInject(",
}

replace(options)
