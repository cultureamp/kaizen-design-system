import { Root, atRule, Document } from "postcss"
import { quotesPattern } from "./patterns"

export const getCurrentImports = (stylesheet: Root | Document) => {
  const imports = new Set<string>()
  stylesheet.walkAtRules("import", rule => {
    imports.add(rule.params.replace(quotesPattern, "").replace(/^~/, ""))
  })
  return imports
}

export const addImport = (stylesheetNode: Root | Document, path: string) => {
  stylesheetNode.prepend(
    atRule({
      name: "import",
      params: `"~${path}"`,
    })
  )
}
export const removeImport = (
  stylesheetNode: Root | Document,
  importPathToRemove: string
) => {
  stylesheetNode.walkAtRules("import", atrule => {
    const atruleImportPath = atrule.params
      .replace(quotesPattern, "")
      .replace(/^~/, "")
    if (atruleImportPath === importPathToRemove) {
      atrule.remove()
    }
  })
}
