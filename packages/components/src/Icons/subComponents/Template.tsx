import React from "react"
import { v4 as uuidv4 } from "uuid"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const COMPONENT_TITLE = (
  props: Omit<SVGProps, "children">
): JSX.Element => {
  const uniqueId = uuidv4()
  const svgContent = <>SVG_CONTENT</>
  return <SVG {...props}>{svgContent}</SVG>
}
