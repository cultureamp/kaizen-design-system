// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React, { useId } from "react"
import { SVG, IconProps } from "~components/Icon/subcomponents/SVG"

export const FactorsIcon = (props: IconProps): JSX.Element => {
  const uniqueId = useId()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="m12.8 14.496-2.8-2.94-2.8 2.94a2.667 2.667 0 1 1-1.144-1.44L9.11 10V7.173C8.08 6.8 7.333 5.823 7.333 4.667A2.663 2.663 0 0 1 10 2a2.663 2.663 0 0 1 2.667 2.667c0 1.155-.747 2.133-1.778 2.506V10l3.056 3.056a2.667 2.667 0 1 1-1.144 1.44Z"
        />
      </defs>
      <use fill="currentColor" href={`#${uniqueId}`} fillRule="nonzero" />
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
