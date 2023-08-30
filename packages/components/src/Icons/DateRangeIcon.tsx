// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React from "react"
import { v4 as uuidv4 } from "uuid"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const DateRangeIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => {
  const uniqueId = uuidv4()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="M16.224 2.89c.978 0 1.778.8 1.778 1.777v12.446c0 .978-.8 1.778-1.778 1.778H3.778c-.987 0-1.778-.8-1.778-1.778l.009-12.446A1.77 1.77 0 0 1 3.778 2.89h.889V1.111h1.778V2.89h7.112V1.111h1.778V2.89h.889Zm0 14.223V7.334H3.778v9.78h12.446Zm-8.89-8H5.556v1.777h1.778V9.112Zm3.556 0H9.112v1.777h1.778V9.112Zm3.556 0h-1.778v1.777h1.778V9.112Z"
        />
      </defs>
      <use fill="currentColor" href={`#${uniqueId}`} fillRule="evenodd" />
    </>
  )
  const ariaLabel = props["aria-label"] ?? "date range icon"
  return (
    <SVG {...props} aria-label={ariaLabel}>
      {svgContent}
    </SVG>
  )
}
