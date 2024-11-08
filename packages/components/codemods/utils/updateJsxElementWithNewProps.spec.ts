import ts from "typescript"
import { parseJsx } from "../__tests__/utils"
import { updateJsxElementWithNewProps } from "./updateJsxElementWithNewProps"

const printNode = (node: ts.Node, source: ts.SourceFile): string => {
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed })
  return printer.printNode(ts.EmitHint.Unspecified, node, source)
}

describe("updateJsxElementWithNewProps()", () => {
  it("adds a prop to a self closing element", () => {
    const source = parseJsx("<Pancakes />")
    const jsxElement = source.statements[0] as ts.ExpressionStatement

    const newAttributes = [
      ts.factory.createJsxAttribute(
        ts.factory.createIdentifier("topping"),
        ts.factory.createStringLiteral("butter"),
      ),
    ]
    const updatedNode = updateJsxElementWithNewProps(jsxElement.expression, newAttributes)

    const result = printNode(updatedNode, source)
    expect(result).toBe('<Pancakes topping="butter"/>')
  })

  it("removes a prop to a self closing element", () => {
    const source = parseJsx('<Pancakes topping="butter" />')
    const jsxElement = source.statements[0] as ts.ExpressionStatement

    const updatedNode = updateJsxElementWithNewProps(jsxElement.expression, [])

    const result = printNode(updatedNode, source)
    expect(result).toBe("<Pancakes />")
  })

  it("adds a prop to a JSX opening element", () => {
    const source = parseJsx("<Pancakes>Hello</Pancakes>")
    const jsxElement = source.statements[0] as ts.ExpressionStatement
    const node = (jsxElement.expression as ts.JsxElement).openingElement

    const newAttributes = [
      ts.factory.createJsxAttribute(
        ts.factory.createIdentifier("topping"),
        ts.factory.createStringLiteral("butter"),
      ),
    ]
    const updatedNode = updateJsxElementWithNewProps(node, newAttributes)

    const result = printNode(updatedNode, source)
    expect(result).toBe('<Pancakes topping="butter">')
  })

  it("removes a prop to a JSX opening element", () => {
    const source = parseJsx('<Pancakes topping="butter">Hello</Pancakes>')
    const jsxElement = source.statements[0] as ts.ExpressionStatement
    const node = (jsxElement.expression as ts.JsxElement).openingElement

    const updatedNode = updateJsxElementWithNewProps(node, [])

    const result = printNode(updatedNode, source)
    expect(result).toBe("<Pancakes>")
  })
})
