import ts from "typescript"

export const updateJsxElementWithNewProps = (
  node: ts.Node,
  newAttributes: ts.JsxAttributeLike[]
): ts.Node => {
  if (ts.isJsxOpeningElement(node)) {
    return ts.factory.updateJsxOpeningElement(
      node,
      node.tagName,
      node.typeArguments,
      ts.factory.createJsxAttributes(newAttributes)
    )
  } else if (ts.isJsxSelfClosingElement(node)) {
    return ts.factory.updateJsxSelfClosingElement(
      node,
      node.tagName,
      node.typeArguments,
      ts.factory.createJsxAttributes(newAttributes)
    )
  }

  return node
}
