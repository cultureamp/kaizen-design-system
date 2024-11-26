import ts from "typescript"
import {
  getKaioTagName,
  setImportToRemove,
  setImportToAdd,
  updateJsxElementWithNewProps,
  updateKaioImports,
  type TagImportAttributesMap,
  type UpdateKaioImportsArgs,
} from "../utils"

export const upgradeIconButtonToButton =
  (tagsMap: TagImportAttributesMap): ts.TransformerFactory<ts.SourceFile> =>
  context =>
  rootNode => {
    const importsToRemove: UpdateKaioImportsArgs["importsToRemove"] = new Map()
    const importsToAdd: UpdateKaioImportsArgs["importsToAdd"] = new Map()

    const importedButtonTagName = getKaioTagName(rootNode, "Button")

    const visit = (node: ts.Node): ts.Node => {
      if (ts.isJsxSelfClosingElement(node)) {
        const tagName = node.tagName.getText()
        const tagImportAttributes = tagsMap.get(tagName)

        if (tagImportAttributes) {
          setImportToRemove(
            importsToRemove,
            tagImportAttributes.importModuleName,
            tagImportAttributes.originalName
          )

          if (!importedButtonTagName) {
            setImportToAdd(importsToAdd, "@kaizen/components/v3/actions", {
              componentName: "Button",
            })
          }

          return updateJsxElementWithNewProps(
            node,
            [...node.attributes.properties],
            importedButtonTagName ?? "Button"
          )
        }
      }
      return ts.visitEachChild(node, visit, context)
    }

    const node = ts.visitNode(rootNode, visit)

    return updateKaioImports({ importsToRemove, importsToAdd })(context)(
      node as ts.SourceFile
    )
  }
