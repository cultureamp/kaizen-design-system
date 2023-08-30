// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React from "react"
import { v4 as uuidv4 } from "uuid"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const ArrowLeftIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => {
  const uniqueId = uuidv4()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="M17.5 9.167H5.692l2.987-2.988L7.5 5l-5 5 5 5 1.18-1.18-2.988-2.987H17.5z"
        />
      </defs>
      <use fill="currentColor" href={`#${uniqueId}`} fillRule="evenodd" />
    </>
  )
  const ariaLabel = props["aria-label"] ?? "arrow left icon"
  return (
    <SVG {...props} aria-label={ariaLabel}>
      {svgContent}
    </SVG>
  )
}
