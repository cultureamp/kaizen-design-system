import fs from "fs"
import { insertSvgData } from "./insertSvgData"

describe("insertSvgData", () => {
  const reactTemplate = fs
    .readFileSync(`${__dirname}/../Template.tsx`)
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
