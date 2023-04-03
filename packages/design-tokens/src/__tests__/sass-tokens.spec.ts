/* eslint-disable jest/consistent-test-it */
import fs from "fs"
import path from "path"
import PostCSS, { Declaration } from "postcss"

import { heartColorNamePattern } from "../lib/patterns"

const readSassFile = (fileName: string): Buffer =>
  fs.readFileSync(path.join(`${__dirname}../../../sass/`, fileName))

describe("SASS tokens", () => {
  const colors = PostCSS.parse(readSassFile("color.scss"))
  const layout = PostCSS.parse(readSassFile("layout.scss"))
  const shadow = PostCSS.parse(readSassFile("shadow.scss"))
  const border = PostCSS.parse(readSassFile("border.scss"))
  const spacing = PostCSS.parse(readSassFile("spacing.scss"))
  const animation = PostCSS.parse(readSassFile("animation.scss"))
  const typography = PostCSS.parse(readSassFile("typography.scss"))
  const everything = PostCSS.parse(
    `
${colors.toString()}
${layout.toString()}
${shadow.toString()}
${border.toString()}
${spacing.toString()}
${animation.toString()}
${typography.toString()}
    `
  )
  describe("everything", () => {
    test("no tokens start with kz", () => {
      const allTokensStartingWithKz = everything.nodes
        .filter(
          (n): n is Declaration => n.type === "decl" && n.prop.startsWith("$kz")
        )
        .map(n => n.prop)
      expect(allTokensStartingWithKz).toHaveLength(0)
    })
  })

  describe("colors", () => {
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
