// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React from "react"
import { v4 as uuidv4 } from "uuid"
import { SVG, IconProps } from "~components/Icon/subcomponents/SVG"

export const EmailIcon = (props: IconProps): JSX.Element => {
  const uniqueId = uuidv4()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="M16.4 3.5H3.6c-.88 0-1.592.72-1.592 1.6L2 14.7c0 .88.72 1.6 1.6 1.6h12.8c.88 0 1.6-.72 1.6-1.6V5.1c0-.88-.72-1.6-1.6-1.6Zm0 3.2-6.4 4-6.4-4V5.1l6.4 4 6.4-4v1.6Z"
        />
      </defs>
      <use fill="currentColor" href={`#${uniqueId}`} fillRule="nonzero" />
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
