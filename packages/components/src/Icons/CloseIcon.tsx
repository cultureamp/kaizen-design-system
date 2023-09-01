// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React from "react"
import { v4 as uuidv4 } from "uuid"
import { SVG, IconProps } from "~components/Icons/subComponents/SVG"

export const CloseIcon = (props: IconProps): JSX.Element => {
  const uniqueId = uuidv4()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="M14.654 4.167 10 8.82 5.346 4.167l-1.18 1.18L8.823 10l-4.655 4.655 1.179 1.178L10 11.18l4.654 4.654 1.18-1.178L11.18 10l4.655-4.653z"
        />
      </defs>
      <use href={`#${uniqueId}`} fillRule="evenodd" />
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
