// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React from "react"
import { v4 as uuidv4 } from "uuid"
import { SVG, IconProps } from "~components/Icon/subcomponents/SVG"

export const ActionOffWhiteIcon = (props: IconProps): JSX.Element => {
  const uniqueId = uuidv4()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="m7.947 1-4.248 9.469 5.271-.144L8.53 19l7.771-13.196H11.72l2.004-4.783z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="currentColor" href={`#${uniqueId}`} />
        <path
          fill="#FFF"
          d="m8.857 2.385 2.776.01-1.207 2.882-.8 1.909h4.243l-3.652 6.2.151-2.992.076-1.49-1.512.04-3.055.084z"
        />
      </g>
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
