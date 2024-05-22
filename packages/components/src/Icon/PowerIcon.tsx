// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React, { useId } from "react"
import { SVG } from "~components/Icon/subcomponents/SVG"
import type { IconProps } from "~components/Icon/types"

export const PowerIcon = (props: IconProps): JSX.Element => {
  const uniqueId = useId()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="M9.111 10.889h1.778V2H9.11zm6.076-6.965-1.258 1.258A6.21 6.21 0 0 1 16.222 10a6.223 6.223 0 0 1-12.444 0A6.21 6.21 0 0 1 6.07 5.182L4.813 3.924A7.972 7.972 0 0 0 2 10a8 8 0 0 0 16 0 7.972 7.972 0 0 0-2.813-6.076"
        />
      </defs>
      <use fill="currentColor" href={`#${uniqueId}`} fillRule="evenodd" />
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
