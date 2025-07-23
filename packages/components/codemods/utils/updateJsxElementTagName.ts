import ts from 'typescript'

export type ComponentRenameConfig = {
  newName: string
  fromModule: string
  toModule: string
}

export const updateJsxElementTagName = (
  factory: ts.NodeFactory,
  node: ts.JsxOpeningElement | ts.JsxClosingElement | ts.JsxSelfClosingElement,
  newTagName: string,
  componentRenameMap: Map<string, ComponentRenameConfig>,
): ts.JsxOpeningElement | ts.JsxClosingElement | ts.JsxSelfClosingElement => {
  let newTagNameExpr: ts.JsxTagNameExpression

  if (ts.isPropertyAccessExpression(node.tagName)) {
    const baseComponentName = node.tagName.expression.getText()
    const rename = componentRenameMap.get(baseComponentName)

    if (rename) {
      newTagNameExpr = factory.createPropertyAccessExpression(
        factory.createIdentifier(rename.newName),
        node.tagName.name,
      ) as ts.JsxTagNameExpression
    } else {
      newTagNameExpr = node.tagName
    }
  } else {
    newTagNameExpr = factory.createIdentifier(newTagName)
  }

  if (ts.isJsxSelfClosingElement(node)) {
    return factory.updateJsxSelfClosingElement(
      node,
      newTagNameExpr,
      node.typeArguments,
      node.attributes,
    )
  }

  if (ts.isJsxOpeningElement(node)) {
    return factory.updateJsxOpeningElement(
      node,
      newTagNameExpr,
      node.typeArguments,
      node.attributes,
    )
  }

  if (ts.isJsxClosingElement(node)) {
    return factory.updateJsxClosingElement(node, newTagNameExpr)
  }

  return node
}
