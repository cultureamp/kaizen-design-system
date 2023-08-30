const Utils = require("./wrapSVGUtils")

describe("svgToComponentTitle", () => {
  it("converts kebab case to pascal case, and replaces .icon with Icon", () => {
    const original = "academy.icon"
    const expected = "AcademyIcon"
    expect(Utils.svgToComponentTitle(original)).toEqual(expected)
  })
  it("handles multiple dashes in kebab case", () => {
    const original = "action-off-white.icon"
    const expected = "ActionOffWhiteIcon"
    expect(Utils.svgToComponentTitle(original)).toEqual(expected)
  })
})

describe("svgToAriaLabel", () => {
  it("replaces '-' in the filename with spaces, and adds ' icon' at the end.", () => {
    const original = "action-off-white.icon"
    const expected = "action off white icon"
    expect(Utils.svgToAriaLabel(original)).toEqual(expected)
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
  const ariaLabel = "my icon"
  const result = Utils.insertSvgData(
    reactTemplate,
    componentTitle,
    svgContent,
    ariaLabel
  )

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
