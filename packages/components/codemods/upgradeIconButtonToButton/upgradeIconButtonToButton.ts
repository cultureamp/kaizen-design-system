import ts from "typescript"
import {
  setImportToRemove,
  type ImportModuleNameTagsMap,
  updateKaioImports,
  type UpdateKaioImportsArgs,
  setImportToAdd,
} from "../utils"

const reverseStringMap = <Key extends string, Value extends string>(
  map: Map<Key, Value>
): Map<Value, Key> => {
  const reverseMap = new Map<Value, Key>()
  map.forEach((value, key) => reverseMap.set(value, key))
  return reverseMap
}

export const upgradeIconButtonToButton =
  // (tagNames: ImportModuleNameTagsMap): ts.TransformerFactory<ts.SourceFile> =>

    (tagName: string): ts.TransformerFactory<ts.SourceFile> =>
    context =>
    rootNode => {
      const oldImportSource = "@kaizen/components"

      // const kaioTagNames = tagNames.get(oldImportSource)
      // if (!kaioTagNames) return rootNode

      // const componentToAliasMap = reverseStringMap(kaioTagNames)
      const importsToRemove =
        new Map() satisfies UpdateKaioImportsArgs["importsToRemove"]
      const importsToAdd =
        new Map() satisfies UpdateKaioImportsArgs["importsToAdd"]

      const visit = (node: ts.Node): ts.Node => {
        if (ts.isJsxSelfClosingElement(node)) {
          // const tagName = node.tagName.getText()
          // const kaioComponentName = kaioTagNames.get(tagName)

          // if (kaioComponentName) {
          setImportToRemove(importsToRemove, oldImportSource, tagName)
          setImportToAdd(importsToAdd, "@kaizen/components/v3/actions", {
            componentName: "Button",
          })

          // return transformIcon(node, newIconProps.name, newIconProps.isFilled)
          // }
        }
        return ts.visitEachChild(node, visit, context)
      }

      const node = ts.visitNode(rootNode, visit)

      return updateKaioImports({ importsToRemove, importsToAdd })(context)(
        node as ts.SourceFile
      )
    }
