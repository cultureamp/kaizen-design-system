import ts from "typescript"
import { getPropValueText, updateJsxElementWithNewProps } from "../utils"
import { getNewIconPropsFromOldIconName } from "./getNewIconPropsFromOldIconName"

const createProp = (
  name: string,
  value?: ts.JsxAttributeValue | undefined
): ts.JsxAttribute =>
  ts.factory.createJsxAttribute(ts.factory.createIdentifier(name), value)

const createStringProp = (name: string, value: string): ts.JsxAttribute =>
  createProp(name, ts.factory.createStringLiteral(value))

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
          const newIconProps = getNewIconPropsFromOldIconName(
            tagNames.get(tagName) as string
          )
          if (newIconProps === undefined) {
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

          if (newIconProps.isFilled) {
            newAttributes.unshift(createProp("isFilled"))
          }
          newAttributes.unshift(createStringProp("name", newIconProps.name))

          return updateJsxElementWithNewProps(node, newAttributes, "Icon")
        }
      }
      return ts.visitEachChild(node, visit, context)
    }
    return ts.visitNode(rootNode, visit)
  }
