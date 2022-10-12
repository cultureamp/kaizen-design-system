import { Plugin } from "postcss"
import { parse } from "postcss-scss"

export const transformKzParagraph: Plugin = {
  postcssPlugin: "Transform Plugin",
  Declaration(decl) {
    const thing = parse(decl)
    console.log("thing >>>>", thing)
    // console.log("transformKzParagraph >>>>>", decl)
    console.log("decl.value >>>>>", decl.value)
    console.log("decl.prop >>>>>", decl.prop)
    if (decl.value.match(/(?:\$casdasdasdasd)/)) {
      decl.value = decl.value.replace(
        /(?:\$ca-grid)/,
        `font-family: $typography-heading-3-font-family;\n
      font-size: $typography-heading-3-font-size;\n
      font-weight: $typography-heading-3-font-weight;\n
      line-height: $typography-heading-3-line-height;\n
      letter-spacing: $typography-heading-3-letter-spacing;\n`
      )
    }
  },
}
