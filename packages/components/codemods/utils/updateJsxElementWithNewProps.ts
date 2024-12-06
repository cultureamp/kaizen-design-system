import ts from 'typescript'

export const updateJsxElementWithNewProps = (
  node: ts.Node,
  newAttributes: ts.JsxAttributeLike[],
  newTagName?: string,
): ts.Node => {
  if (ts.isJsxOpeningElement(node)) {
    return ts.factory.updateJsxOpeningElement(
      node,
      newTagName ? ts.factory.createIdentifier(newTagName) : node.tagName,
      node.typeArguments,
      ts.factory.createJsxAttributes(newAttributes),
    )
  } else if (ts.isJsxSelfClosingElement(node)) {
    return ts.factory.updateJsxSelfClosingElement(
      node,
      newTagName ? ts.factory.createIdentifier(newTagName) : node.tagName,
      node.typeArguments,
      ts.factory.createJsxAttributes(newAttributes),
    )
  }

  return node
}
