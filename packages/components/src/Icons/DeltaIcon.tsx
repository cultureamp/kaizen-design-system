// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React from "react"
import { v4 as uuidv4 } from "uuid"
import { SVG, IconProps } from "~components/Icons/subComponents/SVG"

export const DeltaIcon = (props: IconProps): JSX.Element => {
  const uniqueId = uuidv4()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="M2 10c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8-8-3.58-8-8Zm8-4.63-5.018 8.028h10.036L10 5.369Zm2.131 6.401H7.87L10 8.36l2.131 3.412Z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <circle cx="10" cy="10" r="7" />
        <use fill="currentColor" href={`#${uniqueId}`} />
      </g>
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
