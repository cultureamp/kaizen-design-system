// @ts-ignore: Redeclared module error
const { insertSvgData, svgToComponentTitle } = require("./wrapSVGUtils")

describe("svgToComponentTitle", () => {
  it("converts kebab case to pascal case, and replaces .icon with Icon", () => {
    const original = "academy.icon"
    const expected = "AcademyIcon"
    expect(svgToComponentTitle(original)).toEqual(expected)
  })
  it("handles multiple dashes in kebab case", () => {
    const original = "action-off-white.icon"
    const expected = "ActionOffWhiteIcon"
    expect(svgToComponentTitle(original)).toEqual(expected)
  })
})

describe("insertSvgData", () => {
  const reactTemplate = `
    import React from "react"
    import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

    export const COMPONENT_TITLE = (props: Omit<SVGProps, "children">): JSX.Element => (
      <SVG {...props}>SVG_CONTENT</SVG>
    )
  `
  const componentTitle = "MyIcon"
  const svgContent = "<use></use>"
  const result = insertSvgData(reactTemplate, componentTitle, svgContent)

  it("replaces COMPONENT_TITLE with the name of the icon component", () => {
    expect(result.includes("COMPONENT_TITLE")).toBe(false)
    expect(result.includes(componentTitle)).toBe(true)
  })

  it("replaces SVG_CONTENT with the contents of the svg", () => {
    expect(result.includes("SVG_CONTENT")).toBe(false)
    expect(result.includes(svgContent)).toBe(true)
  })
  it("replaces SVG_CONTENT with the contents of the svg", () => {
    expect(result.includes("SVG_CONTENT")).toBe(false)
    expect(result.includes(svgContent)).toBe(true)
  })
})
