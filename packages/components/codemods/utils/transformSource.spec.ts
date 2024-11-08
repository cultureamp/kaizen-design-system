import fs from "fs"
import path from "path"
import ts from "typescript"
import { parseJsx } from "../__tests__/utils"
import { TransformConfig, transformSource } from "./transformSource"

export const mockedTransformer =
  (context: ts.TransformationContext) =>
  (rootNode: ts.Node): ts.Node => {
    function visit(node: ts.Node): ts.Node {
      if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
        if (node.tagName.getText() === "Pancakes") {
          const newAttributes = node.attributes.properties.map((attr) => {
            if (ts.isJsxAttribute(attr) && attr.name.getText() === "topping") {
              return ts.factory.updateJsxAttribute(
                attr,
                attr.name,
                ts.factory.createStringLiteral("jam"),
              )
            }
            return attr
          })
          if (ts.isJsxSelfClosingElement(node)) {
            return ts.factory.updateJsxSelfClosingElement(
              node,
              node.tagName,
              node.typeArguments,
              ts.factory.createJsxAttributes(newAttributes),
            )
          }
        }
      }
      return ts.visitEachChild(node, visit, context)
    }
    return ts.visitNode(rootNode, visit)
  }

describe("transformSource", () => {
  it("updates the value of Pancakes topping to jam", () => {
    const filePath = path.resolve(path.join(__dirname, "./__fixtures__/KaioComponent.tsx"))
    const fileContent = fs.readFileSync(filePath, "utf8")
    const sourceFile = parseJsx(fileContent)

    const mockTransformConfig = {
      sourceFile,
      astTransformer: mockedTransformer,
      tagName: "mockAlias",
    } satisfies TransformConfig

    const transformed = transformSource(mockTransformConfig)

    expect(transformed).toMatchSnapshot()
  })
})
