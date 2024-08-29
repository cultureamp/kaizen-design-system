// This file is autogenerated
// Changes to this file will be overwritten

import React, { useId } from "react"
import { SVG } from "~components/__illustrations__/Icon/v1/subcomponents/SVG"
import type { IconProps } from "~components/__illustrations__/v1"

export const FeedbackReportWhiteIcon = (props: IconProps): JSX.Element => {
  const uniqueId = useId()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="M16.386 2H3.57C2.697 2 2 2.697 2 3.612V18l3.182-3.227h11.204c.873 0 1.613-.697 1.613-1.613V3.57C17.957 2.696 17.26 2 16.386 2"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="currentColor" href={`#${uniqueId}`} />
        <path
          fill="#FFF"
          d="M12.376 12.375h2.049V9.193h-2.05zM9.15 12.375h2.049V4.397h-2.05zM5.531 12.375H7.58v-5.58H5.53z"
        />
      </g>
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
