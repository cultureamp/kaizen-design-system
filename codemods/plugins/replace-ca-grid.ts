import { Plugin } from "postcss"

export const transformCaGrid: Plugin = {
  postcssPlugin: "Transform Plugin",
  Declaration(decl) {
    if (decl.value.match(/(?:\$ca-grid)/)) {
      decl.value = decl.value.replace(/(?:\$ca-grid)/, "$spacing-medium")
    }
  },
}
