import { Plugin } from "postcss"

export const transformKzTypography: Plugin = {
  postcssPlugin: "Transform Plugin",
  AtRule(rule) {
    if (rule.params.match(/(?:\kz-typography-paragraph-body)/)) {
      const paragraphReplacement = `\nfont-family: $typography-paragraph-body-font-family;\n
      font-size: $typography-paragraph-body-font-size;\n
      font-weight: $typography-paragraph-body-font-weight;\n
      line-height: $typography-paragraph-body-line-height;\n
      letter-spacing: $typography-paragraph-body-letter-spacing;\n`
      rule.after(paragraphReplacement)
      rule.remove()
    }
  },
}
