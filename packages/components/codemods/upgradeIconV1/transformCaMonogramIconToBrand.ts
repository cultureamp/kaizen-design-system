import ts from "typescript"
import {
  createStringProp,
  createStyleProp,
  getPropValueText,
  updateJsxElementWithNewProps,
} from "../utils"

export const transformCaMonogramIconToBrand = (
  node: ts.JsxOpeningElement | ts.JsxSelfClosingElement,
  tagName: string = "Brand",
): ts.Node => {
  let shouldInheritSize = false
  const newAttributes = node.attributes.properties.reduce<
    ts.JsxAttributeLike[]
  >((acc, attr) => {
    if (ts.isJsxAttribute(attr)) {
      const propName = attr.name.getText()

      if (propName === "role") {
        if (
          attr.initializer &&
          getPropValueText(attr.initializer) === "presentation"
        ) {
          acc.push(createStringProp("alt", ""))
        }
        return acc
      }

      if (propName === "aria-label") {
        const value = attr.initializer && getPropValueText(attr.initializer)
        if (value) acc.push(createStringProp("alt", value))
        return acc
      }

      if (propName === "inheritSize") {
        shouldInheritSize = true
        return acc
      }
    }

    acc.push(attr)
    return acc
  }, [])

  if (!shouldInheritSize) {
    newAttributes.unshift(createStyleProp({ width: "20px" }))
  }

  newAttributes.unshift(createStringProp("variant", "enso"))

  return updateJsxElementWithNewProps(node, newAttributes, tagName)
}
