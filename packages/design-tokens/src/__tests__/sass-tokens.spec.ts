import fs from "fs"
import path from "path"
import PostCSS, { Declaration } from "postcss"

import { heartColorNamePattern } from "../patterns"

const readSassFile = (fileName: string) =>
  fs.readFileSync(path.join(`${__dirname}../../../sass/`, fileName))

describe("SASS tokens", () => {
  describe("colors", () => {
    const colors = PostCSS.parse(readSassFile("color.scss"))

    test("new un-prefixed tokens only contain heart color names", () => {
      const newColors = colors.nodes.filter(
        (n): n is Declaration =>
          n.type === "decl" && n.prop.startsWith("$color")
      )
      const newColorsWithHeartNames = newColors.filter(
        n =>
          heartColorNamePattern.test(n.prop) ||
          n.prop.startsWith("$color-white")
      )
      expect(newColors.length).not.toBe(0)
      expect(newColors.length).toBe(newColorsWithHeartNames.length)
    })
  })

  describe("layout", () => {
    const layout = PostCSS.parse(readSassFile("layout.scss"))

    test("new un-prefixed layout tokens are not CSS variables", () => {
      expect(
        layout.nodes.filter(
          n =>
            n.type === "decl" &&
            n.prop.startsWith("$layout") &&
            n.value.startsWith("var(")
        )
      ).toHaveLength(0)
    })
  })
})
