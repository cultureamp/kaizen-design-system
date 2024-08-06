import ts from "typescript"
import { TransformConfig, transformSource } from "./transformSource"

const mockSourceFile = ts.createSourceFile(
  "test.ts",
  "const x = 1;",
  ts.ScriptTarget.Latest
)

const mockAstTransformer = jest
  .fn()
  .mockImplementation(() => (rootNode: ts.Node) => rootNode)

describe("transformSource", () => {
  it("should take a transform config and return a string once", () => {
    const mockTransformConfig: TransformConfig = {
      sourceFile: mockSourceFile,
      astTransformer: mockAstTransformer,
      importAlias: "mockAlias",
    }

    const transformed = transformSource(mockTransformConfig)
    expect(typeof transformed).toBe("string")
    expect(mockAstTransformer).toHaveBeenCalledTimes(1)
  })
})
