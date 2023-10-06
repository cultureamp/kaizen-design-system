// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React from "react"
import { v4 as uuidv4 } from "uuid"
import { SVG, IconProps } from "~components/Icon/subcomponents/SVG"

export const DemographicsIcon = (props: IconProps): JSX.Element => {
  const uniqueId = uuidv4()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="M2 14.444v1.778h5.333v-1.778H2ZM2 3.778v1.778h8.889V3.778H2ZM10.889 18v-1.778H18v-1.778h-7.111v-1.777H9.11V18h1.778ZM5.556 7.333v1.778H2v1.778h3.556v1.778h1.777V7.333H5.556ZM18 10.89V9.11H9.111v1.778H18Zm-5.333-3.556h1.777V5.556H18V3.778h-3.556V2h-1.777v5.333Z"
        />
      </defs>
      <use fill="currentColor" href={`#${uniqueId}`} fillRule="nonzero" />
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
