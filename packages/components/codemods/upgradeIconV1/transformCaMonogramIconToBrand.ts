import ts from "typescript"
import {
  createStringProp,
  createStyleProp,
  updateJsxElementWithNewProps,
} from "../utils"

export const transformCaMonogramIconToBrand = (
  node: ts.JsxOpeningElement | ts.JsxSelfClosingElement
): ts.Node => {
  let shouldInheritSize = false
  const newAttributes = node.attributes.properties.reduce<
    ts.JsxAttributeLike[]
  >((acc, attr) => {
    if (ts.isJsxAttribute(attr)) {
      const propName = attr.name.getText()
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

  return updateJsxElementWithNewProps(node, newAttributes, "Brand")
}
