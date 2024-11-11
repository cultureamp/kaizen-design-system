import fs from "fs"
import path from "path"
import ts from "typescript"
import { createEncodedSourceFile } from "./createEncodedSourceFile"
import {
  TransformSourceForTagNameArgs,
  transformSource,
  transformSourceForTagName,
} from "./transformSource"

const visit =
  (context: ts.TransformationContext, tagName: string) =>
  (node: ts.Node): ts.Node => {
    if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
      if (node.tagName.getText() === tagName) {
        const newAttributes = node.attributes.properties.map(attr => {
          if (ts.isJsxAttribute(attr) && attr.name.getText() === "topping") {
            return ts.factory.updateJsxAttribute(
              attr,
              attr.name,
              ts.factory.createStringLiteral("jam")
            )
          }
          return attr
        })
        if (ts.isJsxSelfClosingElement(node)) {
          return ts.factory.updateJsxSelfClosingElement(
            node,
            node.tagName,
            node.typeArguments,
            ts.factory.createJsxAttributes(newAttributes)
          )
        }
      }
    }
    return ts.visitEachChild(node, visit(context, tagName), context)
  }

describe("transformSource()", () => {
  it("updates the value of Pancakes topping to jam", () => {
    const filePath = path.resolve(
      path.join(__dirname, "./__fixtures__/KaioComponent.tsx")
    )
    const fileContent = fs.readFileSync(filePath, "utf8")
    const sourceFile = createEncodedSourceFile(filePath, fileContent)
    const mockTransformer =
      (tagName: string): ts.TransformerFactory<ts.SourceFile> =>
      context =>
      rootNode =>
        ts.visitNode(rootNode, visit(context, tagName)) as ts.SourceFile

    const transformed = transformSource({
      sourceFile,
      transformers: [mockTransformer("Pancakes")],
    })

    expect(transformed).toMatchSnapshot()
  })
})

describe("transformSourceForTagName", () => {
  it("updates the value of Pancakes topping to jam", () => {
    const filePath = path.resolve(
      path.join(__dirname, "./__fixtures__/KaioComponent.tsx")
    )
    const fileContent = fs.readFileSync(filePath, "utf8")
    const sourceFile = createEncodedSourceFile(filePath, fileContent)
    const mockTransformer =
      (context: ts.TransformationContext, tagName: string) =>
      (rootNode: ts.SourceFile): ts.SourceFile =>
        ts.visitNode(rootNode, visit(context, tagName)) as ts.SourceFile

    const mockTransformSourceForTagNameArgs = {
      sourceFile,
      astTransformer: mockTransformer,
      tagName: "Pancakes",
    } satisfies TransformSourceForTagNameArgs

    const transformed = transformSourceForTagName(
      mockTransformSourceForTagNameArgs
    )

    expect(transformed).toMatchSnapshot()
  })
})
