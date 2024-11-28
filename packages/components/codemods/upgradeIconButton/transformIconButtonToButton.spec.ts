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
    const inputAst = parseJsx('<IconButton icon={icon} label="Pancakes" />')
    const outputAst = parseJsx(
      "<Button icon={icon} hasHiddenLabel>Pancakes</Button>"
    )
    expect(transformInput(inputAst)).toEqual(printAst(outputAst))
  })

  it("uses alias if it is defined", () => {
    const inputAst = parseJsx('<IconButton icon={icon} label="Pancakes" />')
    const outputAst = parseJsx(
      "<KzButton icon={icon} hasHiddenLabel>Pancakes</KzButton>"
    )
    expect(transformInput(inputAst, "KzButton")).toEqual(printAst(outputAst))
  })

  describe("transform existing props", () => {
    it("changes onClick to onPress", () => {
      const inputAst = parseJsx(
        '<IconButton icon={icon} label="Pancakes" onClick={handleClick} />'
      )
      const outputAst = parseJsx(
        "<Button icon={icon} onPress={handleClick} hasHiddenLabel>Pancakes</Button>"
      )
      expect(transformInput(inputAst)).toEqual(printAst(outputAst))
    })
  })
})
