import ts from "typescript"
import { createProp } from "../utils"

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

const createJsxChildren = (
  childrenValue: ts.JsxAttributeValue
): ts.JsxChild => {
  if (ts.isJsxText(childrenValue)) {
    return ts.factory.createJsxText(childrenValue)
  }

  if (ts.isStringLiteral(childrenValue)) {
    return ts.factory.createJsxText(childrenValue.text)
  }

  if (ts.isJsxExpression(childrenValue)) {
    return ts.factory.createJsxExpression(undefined, childrenValue)
  }

  return childrenValue
}

/**
 * Transforms a self-closing JSX element to a JSX element with children
 */
const createElementWithChildren = (
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

  return createElementWithChildren(tagName, newAttributes, childrenValue)
}
