// import fs from "fs"
// import path from "path"
// import ts from "typescript"
// import { updateFileContents } from "./transformWell"

// // This function is used to parse a stringified JSX element into an AST
// function parseJsx(jsx: string): ts.SourceFile {
//   return ts.createSourceFile(
//     "tempFile.tsx",
//     jsx,
//     ts.ScriptTarget.Latest,
//     true,
//     ts.ScriptKind.TSX
//   )
// }

// // describe("updateFileContents", () => {
// //   it("should update Well components imported from @kaizen/components", () => {
// //     const filePath = path.resolve(
// //       path.join(__dirname, "./__fixtures__/Well.tsx")
// //     )
// //     const fileContent = fs.readFileSync(filePath, "utf8")
// //     const sourceFile = parseJsx(fileContent)

// //     expect(updateFileContents(sourceFile, "Well")).toMatchSnapshot()
// //   })
// //   it("should update Well components imported from @kaizen/component/path", () => {
// //     const filePath = path.resolve(
// //       path.join(__dirname, "./__fixtures__/WellV3.tsx")
// //     )
// //     const fileContent = fs.readFileSync(filePath, "utf8")
// //     const sourceFile = parseJsx(fileContent)

// //     expect(updateFileContents(sourceFile, "Well")).toMatchSnapshot()
// //   })
// //   it("should update aliased Well components imported from @kaizen/component", () => {
// //     const filePath = path.resolve(
// //       path.join(__dirname, "./__fixtures__/WellAlias.tsx")
// //     )
// //     const fileContent = fs.readFileSync(filePath, "utf8")
// //     const sourceFile = parseJsx(fileContent)

// //     expect(updateFileContents(sourceFile, "KaizenWell")).toMatchSnapshot()
// //   })
// // })
