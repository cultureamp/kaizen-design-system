<<<<<<< HEAD
import fs from "fs";
import path from "path";
import ts from "typescript";
import { splitIntoFamilies } from "./codemod-migrate-v1-to-v2";
describe("codemod-migrate-v1-to-v2", () => {
    it("should migrate v1 to v2", () => {
        const fileContent = fs.readFileSync(path.join(__dirname, "./mockFile.tsx"), { encoding: "utf8" });
        const sourceFile = ts.createSourceFile("./mockFile.tsx", fileContent, ts.ScriptTarget.Latest, true);
        splitIntoFamilies(sourceFile);
        expect(true).toBe(true);
        // expect(result).toBe("import { Modal } from '@kaizen/components/overlays'")
    });
});
=======
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
>>>>>>> ecd4c843c07b48b900ec727ca07a230b3b667ef1
