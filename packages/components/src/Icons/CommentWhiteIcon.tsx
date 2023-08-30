// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React from "react"
import { v4 as uuidv4 } from "uuid"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const CommentWhiteIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => {
  const uniqueId = uuidv4()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="M16.4 2H3.6c-.884 0-1.592.716-1.592 1.6L2 18l3.2-3.2h11.2a1.6 1.6 0 0 0 1.6-1.6V3.6A1.6 1.6 0 0 0 16.4 2Z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="currentColor" href={`#${uniqueId}`} />
        <path
          fill="#FFF"
          d="M12.4 9.2H14V7.6h-1.6zM9.2 9.2h1.6V7.6H9.2zM6 9.2h1.6V7.6H6z"
        />
      </g>
    </>
  )
  const ariaLabel = props["aria-label"] ?? "comment white icon"
  return (
    <SVG {...props} aria-label={ariaLabel}>
      {svgContent}
    </SVG>
  )
}
