// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"
import { v4 as uuidv4 } from "uuid"

export const FeedbackReportWhiteIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => {
  const uniqueId = uuidv4()
  return (
    <SVG {...props}>
      <defs>
        <path
          id={uniqueId}
          d="M16.386 2H3.57C2.697 2 2 2.697 2 3.612V18l3.182-3.227h11.204c.873 0 1.613-.697 1.613-1.613V3.57C17.957 2.696 17.26 2 16.386 2Z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="currentColor" href={`#${uniqueId}`} />
        <path
          fill="#FFF"
          d="M12.376 12.375h2.049V9.193h-2.05zM9.15 12.375h2.049V4.397h-2.05zM5.531 12.375H7.58v-5.58H5.53z"
        />
      </g>
    </SVG>
  )
}
