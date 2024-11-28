import ts from "typescript"

const createJsxChildren = (
  childrenValue: ts.JsxAttributeValue
): ts.JsxChild => {
  // if (ts.isJsxText(childrenValue)) {
  //   return ts.factory.createJsxText(childrenValue)
  // }

  if (ts.isStringLiteral(childrenValue)) {
    return ts.factory.createJsxText(childrenValue.text)
  }

  if (ts.isJsxExpression(childrenValue)) {
    return ts.factory.createJsxExpression(undefined, childrenValue)
  }

  return childrenValue
}

/**
 * Use this to replace a self-closing JSX element to a JSX element with children
 */
export const createJsxElementWithChildren = (
  tagName: string,
  attributes: ts.JsxAttributeLike[],
  childrenValue: ts.JsxAttributeValue | undefined
): ts.JsxElement => {
  const tagNameId = ts.factory.createIdentifier(tagName)
  const fallbackChildren = [
    ts.factory.createJsxText("\n"),
    ts.factory.createJsxText(
      "/* @todo Children required but a value was not found during the codemod */"
    ),
    ts.factory.createJsxText("\n"),
  ]
  const children = childrenValue
    ? [createJsxChildren(childrenValue)]
    : fallbackChildren

  return ts.factory.createJsxElement(
    ts.factory.createJsxOpeningElement(
      tagNameId,
      [],
      ts.factory.createJsxAttributes(attributes)
    ),
    children,
    ts.factory.createJsxClosingElement(tagNameId)
  )
}
