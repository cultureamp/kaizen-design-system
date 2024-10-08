import ts from "typescript"
import { parseJsx } from "../__tests__/utils"
import { printAst } from "../utils"
import { transformCaMonogramIconToBrand } from "./transformCaMonogramIconToBrand"

export const mockedTransformer =
  (alias?: string) =>
  (context: ts.TransformationContext) =>
  (rootNode: ts.Node): ts.Node => {
    const visit = (node: ts.Node): ts.Node => {
      if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
        return transformCaMonogramIconToBrand(node, alias)
      }
      return ts.visitEachChild(node, visit, context)
    }
    return ts.visitNode(rootNode, visit)
  }

const transformInput = (sourceFile: ts.SourceFile, alias?: string): string => {
  const result = ts.transform(sourceFile, [mockedTransformer(alias)])
  const transformedSource = result.transformed[0] as ts.SourceFile
  return printAst(transformedSource)
}

describe("transformCaMonogramIconToBrand()", () => {
  it("replaces CaMonogramIcon with Brand variant enso and adds size", () => {
    const inputAst = parseJsx("<CaMonogramIcon />")
    const outputAst = parseJsx(
      `<Brand variant="enso" style={{ width: "20px" }} />`
    )
    expect(transformInput(inputAst)).toEqual(printAst(outputAst))
  })

  it("uses alias if it is defined", () => {
    const inputAst = parseJsx("<CaMonogramIcon />")
    const outputAst = parseJsx(
      `<KzBrand variant="enso" style={{ width: "20px" }} />`
    )
    expect(transformInput(inputAst, "KzBrand")).toEqual(printAst(outputAst))
  })

  describe("transform existing props", () => {
    it("leaves role and aria-label as is", () => {
      const inputAst = parseJsx(`
          export const TestComponent = () => (
            <>
              <CaMonogramIcon role="presentation" />
              <CaMonogramIcon role="img" aria-label="Add something" />
            </>
          )
        `)
      const outputAst = parseJsx(`
          export const TestComponent = () => (
            <>
              <Brand variant="enso" style={{ width: "20px" }} role="presentation" />
              <Brand variant="enso" style={{ width: "20px" }} role="img" aria-label="Add something" />
            </>
          )
        `)
      expect(transformInput(inputAst)).toEqual(printAst(outputAst))
    })

    it("leaves classNameOverride as is", () => {
      const inputAst = parseJsx(`
          export const TestComponent = () => <CaMonogramIcon classNameOverride="mt-16" />
        `)
      const outputAst = parseJsx(`
          export const TestComponent = () => <Brand variant="enso" style={{ width: "20px" }} classNameOverride="mt-16" />
        `)
      expect(transformInput(inputAst)).toEqual(printAst(outputAst))
    })

    it("removes inheritSize and does not add size", () => {
      const inputAst = parseJsx(`
          export const TestComponent = () => <CaMonogramIcon inheritSize />
        `)
      const outputAst = parseJsx(`
          export const TestComponent = () => <Brand variant="enso" />
        `)
      expect(transformInput(inputAst)).toEqual(printAst(outputAst))
    })
  })
})
