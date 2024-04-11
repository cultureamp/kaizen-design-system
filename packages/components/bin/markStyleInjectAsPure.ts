import replace from "replace-in-file"
// import replace from "replace-in-file"

// const replace = require("replace-in-file");

const options = {
  files: "dist/esm/**/*.module.scss.mjs",
  from: "styleInject(",
  to: "/*#__PURE__*/styleInject(",
}

replace(options)
