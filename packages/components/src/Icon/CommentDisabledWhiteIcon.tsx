// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React from "react"
import { v4 as uuidv4 } from "uuid"
import { SVG, IconProps } from "~components/Icon/subcomponents/SVG"

export const CommentDisabledWhiteIcon = (props: IconProps): JSX.Element => {
  const uniqueId = uuidv4()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="M16.4 2H3.6C2.715 2 2 2.715 2 3.6V18l3.2-3.2h11.2a1.6 1.6 0 0 0 1.6-1.6V3.6c0-.885-.716-1.6-1.6-1.6Z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="currentColor" href={`#${uniqueId}`} />
        <path
          fill="#FFF"
          d="m12.856 10.12-1.128 1.127-1.696-1.696-1.696 1.696-1.129-1.128 1.697-1.696L7.2 6.727 8.328 5.6l1.704 1.696L11.728 5.6l1.128 1.127-1.696 1.696z"
        />
      </g>
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
