import ts from "typescript"
import { createJsxElementWithChildren, createProp } from "../utils"

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
    case "onClick":
      return createProp("onPress", propValue)
    default:
      return undefined
  }
}

export const transformIconButtonToButton = (
  node: ts.JsxSelfClosingElement,
  tagName: string = "Button"
): ts.Node => {
  let childrenValue: ts.JsxAttributeValue | undefined

  const newAttributes = node.attributes.properties.reduce<
    ts.JsxAttributeLike[]
  >((acc, attr) => {
    if (ts.isJsxAttribute(attr)) {
      const propName = attr.name.getText()

      if (propName === "label") {
        childrenValue = attr.initializer
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

  newAttributes.push(createProp("hasHiddenLabel"))

  return createJsxElementWithChildren(tagName, newAttributes, childrenValue)
}
