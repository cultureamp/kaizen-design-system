import ts from "typescript"
import {
  setImportToRemove,
  createProp,
  createStringProp,
  createStyleProp,
  getPropValueText,
  ImportModuleNameTagsMap,
  updateJsxElementWithNewProps,
  updateKaioImports,
  UpdateKaioImportsArgs,
  setImportToAdd,
} from "../utils"
import { getNewIconPropsFromOldIconName } from "./getNewIconPropsFromOldIconName"
import { transformCaMonogramIconToBrand } from "./transformCaMonogramIconToBrand"

const propsToStyleMap = new Map<string, string>([
  ["color", "color"],
  ["height", "height"],
  ["width", "width"],
])

const transformPropRole = (
  oldValue: string
): ts.JsxAttribute | null | undefined => {
  switch (oldValue) {
    case "presentation":
      return createProp("isPresentational")
    case "img":
      // `role` is removed and `aria-label` transforms to `alt`
      return null
    default:
      return undefined
  }
}

/**
 * @returns
 * - `ts.JsxAttribute` if the prop should be transformed
 * - `null` if the prop should be removed
 * - `undefined` if the prop should be kept as is
 */
const transformIconProp = (
  propName: string,
  propValue: ts.JsxAttributeValue | undefined
): ts.JsxAttribute | null | undefined => {
  switch (propName) {
    case "role":
      const oldValue = propValue && getPropValueText(propValue)
      return oldValue ? transformPropRole(oldValue) : undefined
    case "aria-label":
      return createProp("alt", propValue)
    case "classNameOverride":
      return createProp("className", propValue)
    // `aria-hidden` is not necessary as `role` will cater for presentational icons
    case "aria-hidden":
    // `fontSize` did nothing for svg icons
    case "fontSize":
    // `viewBox` no longer relevant
    case "viewBox":
      return null
    default:
      return undefined
  }
}

const reverseStringMap = <Key extends string, Value extends string>(
  map: Map<Key, Value>
): Map<Value, Key> => {
  const reverseMap = new Map<Value, Key>()
  map.forEach((value, key) => reverseMap.set(value, key))
  return reverseMap
}

export const upgradeIconV1 =
  (context: ts.TransformationContext, tagNames: ImportModuleNameTagsMap) =>
  (rootNode: ts.Node): ts.Node => {
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

          const styles: Map<string, ts.JsxAttributeValue> = new Map()

          const newAttributes = node.attributes.properties.reduce<
            ts.JsxAttributeLike[]
          >((acc, attr) => {
            if (ts.isJsxAttribute(attr)) {
              const propName = attr.name.getText()

              if (propName === "inheritSize") {
                ts.addSyntheticLeadingComment(
                  attr,
                  ts.SyntaxKind.SingleLineCommentTrivia,
                  ' @todo: Apply the correct --icon-size (eg. in Tailwind: className="[--icon-size:48]")',
                  true
                )
                acc.push(attr)
                return acc
              }

              if (propsToStyleMap.has(propName)) {
                if (attr.initializer) {
                  styles.set(
                    propsToStyleMap.get(propName) as string,
                    attr.initializer
                  )
                }
                return acc
              }

              const newProp = transformIconProp(propName, attr.initializer)

              if (newProp === null) return acc

              if (newProp) {
                acc.push(newProp)
                return acc
              }
            }

            acc.push(attr)
            return acc
          }, [])

          if (styles.size > 0) {
            newAttributes.unshift(
              createStyleProp(Object.fromEntries(styles.entries()))
            )
          }

          if (newIconProps.isFilled) {
            newAttributes.unshift(createProp("isFilled"))
          }
          newAttributes.unshift(createStringProp("name", newIconProps.name))

          setImportToRemove(importsToRemove, oldImportSource, kaioComponentName)
          setImportToAdd(importsToAdd, "@kaizen/components/future", {
            componentName: "Icon",
          })
          return updateJsxElementWithNewProps(node, newAttributes, "Icon")
        }
      }
      return ts.visitEachChild(node, visit, context)
    }
    const node = ts.visitNode(rootNode, visit)

    return updateKaioImports({
      importsToRemove: importsToRemove.size > 0 ? importsToRemove : undefined,
      importsToAdd: importsToAdd.size > 0 ? importsToAdd : undefined,
    })(context)(node)
  }
