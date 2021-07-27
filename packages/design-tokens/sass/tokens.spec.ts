import fs from "fs"
import path from "path"
import PostCSS, { Declaration } from "postcss"

import { heartColorNamePattern } from "../src/patterns"

const readSassFile = (fileName: string) =>
  fs.readFileSync(path.join(__dirname, fileName))

describe("SASS tokens", () => {
  describe("colors", () => {
    const colors = PostCSS.parse(readSassFile("color.scss"))
    const colorVars = PostCSS.parse(readSassFile("color-vars.scss"))
    test("kz-var tokens don't contain heart color names", () => {
      expect(
        colorVars.nodes.filter(
          n => n.type === "decl" && heartColorNamePattern.test(n.prop)
        )
      ).toHaveLength(0)
    })

    test("kz tokens don't contain heart color names", () => {
      expect(
        colors.nodes.filter(
          n =>
            n.type === "decl" &&
            n.prop.startsWith("$kz") &&
            heartColorNamePattern.test(n.prop)
        )
      ).toHaveLength(0)
    })

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
    const layoutVars = PostCSS.parse(readSassFile("layout-vars.scss"))
    test("kz-var tokens are all CSS variables", () => {
      expect(
        layoutVars.nodes.filter(
          n => n.type === "decl" && !n.value.startsWith("var(")
        )
      ).toHaveLength(0)
    })

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
