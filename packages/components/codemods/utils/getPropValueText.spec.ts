import ts from "typescript"
import { parseJsx } from "../__tests__/utils"
import { getPropValueText } from "./getPropValueText"

export const getJsxAttributeValue = (
  node: ts.Node,
): ts.JsxAttributeValue | undefined => {
  const visitNode = (
    visitedNode: ts.Node,
  ): ts.JsxAttributeValue | undefined => {
    if (ts.isJsxAttribute(visitedNode)) {
      return visitedNode.initializer
    }

    return visitedNode.forEachChild(visitNode)
  }

  return visitNode(node)
}

describe("getPropValueText", () => {
  it("will return the text value of a string literal", () => {
    const pancakeAst = parseJsx('<Pancake topping="jam" />')
    const mockAttribute = getJsxAttributeValue(
      pancakeAst,
    ) as ts.JsxAttributeValue

    expect(getPropValueText(mockAttribute)).toEqual("jam")
  })

  it("will return the text value of a expression with double quotes", () => {
    const pancakeAst = parseJsx('<Pancake topping={"jam"} />')
    const mockAttribute = getJsxAttributeValue(
      pancakeAst,
    ) as ts.JsxAttributeValue

    expect(getPropValueText(mockAttribute)).toEqual("jam")
  })

  it("will return the text value of a expression with single quotes", () => {
    const pancakeAst = parseJsx("<Pancake topping={'jam'} />")
    const mockAttribute = getJsxAttributeValue(
      pancakeAst,
    ) as ts.JsxAttributeValue

    expect(getPropValueText(mockAttribute)).toEqual("jam")
  })

  it("will return the text value of a expression with backticks", () => {
    const pancakeAst = parseJsx("<Pancake topping={`jam`} />")
    const mockAttribute = getJsxAttributeValue(
      pancakeAst,
    ) as ts.JsxAttributeValue

    expect(getPropValueText(mockAttribute)).toEqual("jam")
  })

  it("will return undefined if a JSX element is used as a value", () => {
    const pancakeAst = parseJsx("<Pancake topping={<Cheese />} />")
    const mockAttribute = getJsxAttributeValue(
      pancakeAst,
    ) as ts.JsxAttributeValue

    expect(getPropValueText(mockAttribute)).toBeUndefined()
  })

  it("will return undefined if a boolean value", () => {
    const pancakeAst = parseJsx("<Pancake topping={false} />")
    const mockAttribute = getJsxAttributeValue(
      pancakeAst,
    ) as ts.JsxAttributeValue

    expect(getPropValueText(mockAttribute)).toBeUndefined()
  })
})
