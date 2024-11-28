import ts from "typescript"
import { parseJsx } from "../__tests__/utils"
import { printAst } from "../utils"
import { transformIconButtonToButton } from "./transformIconButtonToButton"

export const mockedTransformer =
  (alias?: string) =>
  (context: ts.TransformationContext) =>
  (rootNode: ts.Node): ts.Node => {
    const visit = (node: ts.Node): ts.Node => {
      if (ts.isJsxSelfClosingElement(node)) {
        return transformIconButtonToButton(node, alias)
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

describe("transformIconButtonToButton()", () => {
  it("replaces IconButton with Button and changes label to children and adds hasHiddenLabel", () => {
    const inputAst = parseJsx(`
      <IconButton icon={icon} label="Pancakes" />
    `)
    const outputAst = parseJsx(
      "<Button icon={icon} hasHiddenLabel>Pancakes</Button>"
    )
    expect(transformInput(inputAst)).toEqual(printAst(outputAst))
  })

  // it("uses alias if it is defined", () => {
  //   const inputAst = parseJsx("<CaMonogramIcon />")
  //   const outputAst = parseJsx(
  //     '<KzBrand variant="enso" style={{ width: "20px" }} />'
  //   )
  //   expect(transformInput(inputAst, "KzBrand")).toEqual(printAst(outputAst))
  // })

  // describe("transform existing props", () => {
  //   it("removes role and changes aria-label to alt", () => {
  //     const inputAst = parseJsx(`
  //         export const TestComponent = () => (
  //           <>
  //             <CaMonogramIcon role="presentation" />
  //             <CaMonogramIcon role="img" aria-label="Add something" />
  //           </>
  //         )
  //       `)
  //     const outputAst = parseJsx(`
  //         export const TestComponent = () => (
  //           <>
  //             <Brand variant="enso" style={{ width: "20px" }} alt="" />
  //             <Brand variant="enso" style={{ width: "20px" }} alt="Add something" />
  //           </>
  //         )
  //       `)
  //     expect(transformInput(inputAst)).toEqual(printAst(outputAst))
  //   })

  //   it("leaves classNameOverride as is", () => {
  //     const inputAst = parseJsx(`
  //         export const TestComponent = () => <CaMonogramIcon classNameOverride="mt-16" />
  //       `)
  //     const outputAst = parseJsx(`
  //         export const TestComponent = () => <Brand variant="enso" style={{ width: "20px" }} classNameOverride="mt-16" />
  //       `)
  //     expect(transformInput(inputAst)).toEqual(printAst(outputAst))
  //   })

  //   it("removes inheritSize and does not add size", () => {
  //     const inputAst = parseJsx(`
  //         export const TestComponent = () => <CaMonogramIcon inheritSize />
  //       `)
  //     const outputAst = parseJsx(`
  //         export const TestComponent = () => <Brand variant="enso" />
  //       `)
  //     expect(transformInput(inputAst)).toEqual(printAst(outputAst))
  //   })
  // })
})
