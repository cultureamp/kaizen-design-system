// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React, { useId } from "react"
import { SVG } from "~components/Icon/subcomponents/SVG"
import type { IconProps } from "~components/Icon/types"

export const ExclamationOctagonIcon = (props: IconProps): JSX.Element => {
  const uniqueId = useId()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="M13.316 2H6.684L2 6.684v6.632L6.684 18h6.632L18 13.316V6.684zM10 14.711c-.64 0-1.156-.515-1.156-1.155S9.36 12.4 10 12.4s1.156.516 1.156 1.156S10.64 14.71 10 14.71m.889-3.822H9.11V5.556h1.778z"
        />
      </defs>
      <use fill="currentColor" href={`#${uniqueId}`} fillRule="nonzero" />
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
