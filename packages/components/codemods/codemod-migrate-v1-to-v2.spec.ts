// import { js } from "@ast-grep/napi"
import { splitIntoFamilies } from "./codemod-migrate-v1-to-v2"

describe("codemod-migrate-v1-to-v2", () => {
  it("should migrate v1 to v2", () => {
    const result = splitIntoFamilies(
      "import { Tag, Modal } from '@kaizen/components'"
    )

    expect(result).toBe("import { Modal } from '@kaizen/components/overlays'")
  })
})
