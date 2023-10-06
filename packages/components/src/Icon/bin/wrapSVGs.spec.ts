const fs = require("fs")
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
  const reactTemplate = fs
    .readFileSync("./src/Icon/subcomponents/Template.tsx")
    .toString()

  it("Returns the template with component title and svg content inserted", () => {
    const componentTitle = "MyIcon"
    const svgContent = "<use></use>"
    const result = insertSvgData(reactTemplate, componentTitle, svgContent)
    const expected = `import React from "react"

import { SVG, IconProps } from "~components/Icon/subcomponents/SVG"

export const MyIcon = (props: IconProps): JSX.Element => {

  const svgContent = <><use></use></>
  return <SVG {...props}>{svgContent}</SVG>
}
`

    expect(result).toBe(expected)
  })
})
