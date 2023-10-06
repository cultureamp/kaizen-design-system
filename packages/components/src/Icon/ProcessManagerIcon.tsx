// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React from "react"
import { v4 as uuidv4 } from "uuid"
import { SVG, IconProps } from "~components/Icon/subcomponents/SVG"

export const ProcessManagerIcon = (props: IconProps): JSX.Element => {
  const uniqueId = uuidv4()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="M11 7.333H1V9h10V7.333ZM11 4H1v1.667h10V4ZM1 12.333h6.667v-1.666H1v1.666Zm16.25-3.75 1.25 1.25-5.825 5.834-3.758-3.75 1.25-1.25 2.508 2.5 4.575-4.584Z"
        />
      </defs>
      <use fill="currentColor" href={`#${uniqueId}`} fillRule="nonzero" />
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
