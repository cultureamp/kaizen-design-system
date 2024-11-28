import ts from "typescript"
import { parseJsx } from "../__tests__/utils"
import { createJsxElementWithChildren } from "./createJsxElementWithChildren"
import { printAst } from "./printAst"
import { transformSource, type TransformSourceArgs } from "./transformSource"

export const mockedTransformer: ts.TransformerFactory<ts.SourceFile> =
  context => rootNode => {
    const visit = (node: ts.Node): ts.Node => {
      let childrenValue: ts.JsxAttributeValue | undefined

      if (ts.isJsxSelfClosingElement(node)) {
        const tagName = node.tagName.getText()
        const attributes = node.attributes.properties.reduce<
          ts.JsxAttributeLike[]
        >((acc, attr) => {
          if (ts.isJsxAttribute(attr) && attr.name.getText() === "toChildren") {
            childrenValue = attr.initializer
            return acc
          }

          acc.push(attr)
          return acc
        }, [])

        return createJsxElementWithChildren(tagName, attributes, childrenValue)
      }
      return ts.visitEachChild(node, visit, context)
    }
    return ts.visitNode(rootNode, visit) as ts.SourceFile
  }

const testCreateJsxElementWithChildren = (
  sourceFile: TransformSourceArgs["sourceFile"]
): string => transformSource({ sourceFile, transformers: [mockedTransformer] })

describe("createJsxElementWithChildren()", () => {
  it("transforms a string value", () => {
    const inputAst = parseJsx('<Button toChildren="Hello" variant="primary" />')
    const outputAst = parseJsx('<Button variant="primary">Hello</Button>')
    expect(testCreateJsxElementWithChildren(inputAst)).toEqual(
      printAst(outputAst)
    )
  })

  it("transforms a string in brackets", () => {
    const inputAst = parseJsx(
      '<Button toChildren={"Hello"} variant="primary" />'
    )
    const outputAst = parseJsx('<Button variant="primary">Hello</Button>')
    expect(testCreateJsxElementWithChildren(inputAst)).toEqual(
      printAst(outputAst)
    )
  })

  it("transforms a string with comments in brackets", () => {
    const inputAst = parseJsx(`<Button
      toChildren={
        "Hello" // comment
      }
      variant="primary" />
    `)
    const outputAst = parseJsx(`<Button variant="primary">{
      "Hello" // comment
    }</Button>`)
    expect(testCreateJsxElementWithChildren(inputAst)).toEqual(
      printAst(outputAst)
    )
  })

  it("transforms a template literal with variables", () => {
    /* eslint-disable no-template-curly-in-string */
    const inputAst = parseJsx(
      '<Button toChildren={`Hello ${name}`} variant="primary" />'
    )
    const outputAst = parseJsx(
      '<Button variant="primary">{`Hello ${name}`}</Button>'
    )
    /* eslint-enable no-template-curly-in-string */
    expect(testCreateJsxElementWithChildren(inputAst)).toEqual(
      printAst(outputAst)
    )
  })

  it("transforms a variable", () => {
    const inputAst = parseJsx(
      '<Button toChildren={childrenVar} variant="primary" />'
    )
    const outputAst = parseJsx(
      '<Button variant="primary">{childrenVar}</Button>'
    )
    expect(testCreateJsxElementWithChildren(inputAst)).toEqual(
      printAst(outputAst)
    )
  })

  it("transforms a ternary", () => {
    const inputAst = parseJsx(
      '<Button toChildren={isPancake ? "Pancake" : "Waffle"} variant="primary" />'
    )
    const outputAst = parseJsx(
      '<Button variant="primary">{isPancake ? "Pancake" : "Waffle"}</Button>'
    )
    expect(testCreateJsxElementWithChildren(inputAst)).toEqual(
      printAst(outputAst)
    )
  })
})
