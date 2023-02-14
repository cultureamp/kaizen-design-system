import { Root, atRule } from "postcss"
import { quotesPattern } from "./patterns"

export const getCurrentImports = (stylesheet: Root): Set<string> => {
  const imports = new Set<string>()
  stylesheet.walkAtRules("import", rule => {
    imports.add(rule.params.replace(quotesPattern, "").replace(/^~/, ""))
  })
  return imports
}

export const addImport = (stylesheetNode: Root, path: string): void => {
  stylesheetNode.prepend(
    atRule({
      name: "import",
      params: `"~${path}"`,
    })
  )
}

export const removeImport = (
  stylesheetNode: Root,
  importPathToRemove: string
): void => {
  stylesheetNode.walkAtRules("import", atrule => {
    const atruleImportPath = atrule.params
      .replace(quotesPattern, "")
      .replace(/^~/, "")
    if (atruleImportPath === importPathToRemove) {
      atrule.remove()
    }
  })
}
