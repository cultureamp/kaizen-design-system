import React, { useId } from "react"
import { SVG, IconProps } from "~components/Icon/subcomponents/SVG"

export const COMPONENT_TITLE = (props: IconProps): JSX.Element => {
  const uniqueId = useId()
  const svgContent = <>SVG_CONTENT</>
  return <SVG {...props}>{svgContent}</SVG>
}
