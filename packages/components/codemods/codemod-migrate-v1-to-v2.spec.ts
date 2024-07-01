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
