import React, { useId } from "react"
import { SVG } from "~components/Icon/subcomponents/SVG"
import type { IconProps } from "~components/Icon/types"

export const COMPONENT_TITLE = (props: IconProps): JSX.Element => {
  const uniqueId = useId()
  const svgContent = <>SVG_CONTENT</>
  return <SVG {...props}>{svgContent}</SVG>
}
