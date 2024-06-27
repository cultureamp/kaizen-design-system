// import { js } from "@ast-grep/napi"
// import { splitIntoFamilies } from "./codemod-migrate-v1-to-v2"
import { inspect } from "util"
import ts from "typescript"
import {
  codemodRunner,
  getImportFromAstSourcefile,
} from "./codemod-migrate-v1-to-v2"

describe("codemod-migrate-v1-to-v2", () => {
  it("should migrate v1 to v2", () => {
    const result = codemodRunner("mockRoot.ts")

    const imports = getImportFromAstSourcefile(result)

    // console.log(imports)

    // let indent = 0

    // function printTree(node: any) {
    //   console.log(new Array(indent + 1).join(" ") + ts.SyntaxKind[node.kind])
    //   indent++
    //   ts.forEachChild(node, printTree)
    //   indent--
    // }
    // printTree(result)

    // inspect(result, true, 1000)
    // console.log(JSON.parse(result.kind.toString()))

    expect(true).toBe(false)
  })
})
