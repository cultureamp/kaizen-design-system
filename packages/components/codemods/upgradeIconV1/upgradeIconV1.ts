import ts from "typescript"
import * as OLD_ICONS from "~components/Icon"
import { IconNames } from "~components/__future__/Icon/types"
import { StringSuggestions } from "~components/types/StringSuggestions"
import { getPropValueText, updateJsxElementWithNewProps } from "../utils"

const createProp = (
  name: string,
  value?: ts.JsxAttributeValue | undefined
): ts.JsxAttribute =>
  ts.factory.createJsxAttribute(ts.factory.createIdentifier(name), value)

const createStringProp = (name: string, value: string): ts.JsxAttribute =>
  createProp(name, ts.factory.createStringLiteral(value))

const getNewIconName = (
  oldValue: StringSuggestions<keyof typeof OLD_ICONS>
): IconNames | undefined => {
  switch (oldValue) {
    case "AddIcon":
      return "add"
    case "HamburgerIcon":
      return "menu"
    case "MeatballsIcon":
      return "more_horiz"
    default:
      // Unlisted old Icons are unused, thus skipped
      return undefined
  }
}

const transformRoleProp = (
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
const transformProp = (
  propName: string,
  propValue: ts.JsxAttributeValue | undefined
): ts.JsxAttribute | null | undefined => {
  switch (propName) {
    case "role":
      const oldValue = propValue && getPropValueText(propValue)
      return oldValue ? transformRoleProp(oldValue) : undefined
    case "aria-label":
      return createProp("alt", propValue)
    case "classNameOverride":
      return createProp("className", propValue)
    default:
      return undefined
  }
}

export const upgradeIconV1 =
  (context: ts.TransformationContext, tagNames: Map<string, string>) =>
  (rootNode: ts.Node): ts.Node => {
    const visit = (node: ts.Node): ts.Node => {
      if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
        const tagName = node.tagName.getText()
        if (tagNames.has(tagName)) {
          // Above has checked the key exists, so the value should also exist and not be undefined
          const nameValue = getNewIconName(tagNames.get(tagName) as string)
          if (nameValue === undefined) {
            // eslint-disable-next-line no-console
            console.info(
              "SKIPPED - No new icon equivalent found for",
              node.tagName.getText()
            )
            return node
          }

          const newAttributes = node.attributes.properties.reduce<
            ts.JsxAttributeLike[]
          >((acc, attr) => {
            if (ts.isJsxAttribute(attr)) {
              const propName = attr.name.getText()

              const newProp = transformProp(propName, attr.initializer)

              if (newProp === null) return acc

              if (newProp) {
                acc.push(newProp)
                return acc
              }
            }

            acc.push(attr)
            return acc
          }, [])

          const nameProp = createStringProp("name", nameValue)
          newAttributes.unshift(nameProp)

          return updateJsxElementWithNewProps(node, newAttributes, "Icon")
        }
      }
      return ts.visitEachChild(node, visit, context)
    }
    return ts.visitNode(rootNode, visit)
  }
