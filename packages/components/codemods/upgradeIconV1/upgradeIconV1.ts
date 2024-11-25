import ts from "typescript"
import {
  setImportToRemove,
  type ImportModuleNameTagsMap,
  updateKaioImports,
  type UpdateKaioImportsArgs,
  setImportToAdd,
} from "../utils"
import { getNewIconPropsFromOldIconName } from "./getNewIconPropsFromOldIconName"
import { transformCaMonogramIconToBrand } from "./transformCaMonogramIconToBrand"
import { transformIcon } from "./transformIcon"
import { transformSpinnerIconToLoadingSpinner } from "./transformSpinnerIconToLoadingSpinner"

const reverseStringMap = <Key extends string, Value extends string>(
  map: Map<Key, Value>
): Map<Value, Key> => {
  const reverseMap = new Map<Value, Key>()
  map.forEach((value, key) => reverseMap.set(value, key))
  return reverseMap
}

export const upgradeIconV1 =
  (tagNames: ImportModuleNameTagsMap): ts.TransformerFactory<ts.SourceFile> =>
  context =>
  rootNode => {
    const oldImportSource = "@kaizen/components"

    const kaioTagNames = tagNames.get(oldImportSource)
    if (!kaioTagNames) return rootNode

    const componentToAliasMap = reverseStringMap(kaioTagNames)
    const importsToRemove =
      new Map() satisfies UpdateKaioImportsArgs["importsToRemove"]
    const importsToAdd =
      new Map() satisfies UpdateKaioImportsArgs["importsToAdd"]

    const visit = (node: ts.Node): ts.Node => {
      if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
        const tagName = node.tagName.getText()
        const kaioComponentName = kaioTagNames.get(tagName)

        if (kaioComponentName === "CaMonogramIcon") {
          setImportToRemove(importsToRemove, oldImportSource, kaioComponentName)
          const alias = componentToAliasMap.get("Brand") as string

          if (!kaioTagNames.has(alias)) {
            setImportToAdd(importsToAdd, "@kaizen/components", {
              componentName: "Brand",
              alias: alias !== "Brand" ? alias : undefined,
            })
          }
          return transformCaMonogramIconToBrand(node, alias)
        }

        if (kaioComponentName === "SpinnerIcon") {
          setImportToRemove(importsToRemove, oldImportSource, kaioComponentName)
          const alias = componentToAliasMap.get("LoadingSpinner") as string

          if (!kaioTagNames.has(alias)) {
            setImportToAdd(importsToAdd, "@kaizen/components", {
              componentName: "LoadingSpinner",
              alias: alias !== "LoadingSpinner" ? alias : undefined,
            })
          }
          return transformSpinnerIconToLoadingSpinner(node, alias)
        }

        if (kaioComponentName) {
          const newIconProps = getNewIconPropsFromOldIconName(kaioComponentName)
          if (newIconProps === undefined) {
            // eslint-disable-next-line no-console
            console.info(
              "SKIPPED - No new icon equivalent found for",
              node.tagName.getText()
            )
            return node
          }

          setImportToRemove(importsToRemove, oldImportSource, kaioComponentName)
          setImportToAdd(importsToAdd, "@kaizen/components/future", {
            componentName: "Icon",
          })

          return transformIcon(node, newIconProps.name, newIconProps.isFilled)
        }
      }
      return ts.visitEachChild(node, visit, context)
    }

    const node = ts.visitNode(rootNode, visit)

    return updateKaioImports({ importsToRemove, importsToAdd })(context)(
      node as ts.SourceFile
    )
  }
