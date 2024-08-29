import React, { useId } from "react"
import { SVG } from "~components/__illustrations__/Icon/v1/subcomponents/SVG"
import type { IconProps } from "~components/__illustrations__/v1"

export const COMPONENT_TITLE = (props: IconProps): JSX.Element => {
  const uniqueId = useId()
  const svgContent = <>SVG_CONTENT</>
  return <SVG {...props}>{svgContent}</SVG>
}
