// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React from "react"
import { v4 as uuidv4 } from "uuid"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const FeedbackReviewWhiteIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => {
  const uniqueId = uuidv4()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="M16.39 2H3.61c-.87 0-1.608.74-1.608 1.613V18l3.216-3.183H16.39c.87 0 1.608-.74 1.608-1.613V3.613C17.955 2.74 17.26 2 16.39 2Z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="currentColor" href={`#${uniqueId}`} />
        <path
          fill="#FFF"
          d="M14.781 11.635H8.782l1.609-1.613h4.39zM5.218 11.635V9.672l5.478-5.492c.174-.175.39-.175.564 0l1.391 1.395c.174.174.174.392 0 .566l-5.476 5.494H5.218Z"
        />
      </g>
    </>
  )
  const ariaLabel = props["aria-label"] ?? "feedback review white icon"
  return (
    <SVG {...props} aria-label={ariaLabel}>
      {svgContent}
    </SVG>
  )
}
