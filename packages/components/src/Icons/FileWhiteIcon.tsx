// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React from "react"
import { v4 as uuidv4 } from "uuid"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const FileWhiteIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => {
  const uniqueId = uuidv4()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="M11.613 2H5.598c-.884 0-1.592.716-1.592 1.6l-.008 12.8c0 .884.708 1.6 1.592 1.6h8.812a1.6 1.6 0 0 0 1.6-1.6V6.657L11.613 2Z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="currentColor" href={`#${uniqueId}`} />
        <path
          fill="#FFF"
          d="M10.813 7.6V3.2l4.4 4.4zM6.813 11.6h6.4V10h-6.4zM6.813 14.8h6.4v-1.6h-6.4z"
        />
      </g>
    </>
  )
  const ariaLabel = props["aria-label"] ?? "file white icon"
  return (
    <SVG {...props} aria-label={ariaLabel}>
      {svgContent}
    </SVG>
  )
}
