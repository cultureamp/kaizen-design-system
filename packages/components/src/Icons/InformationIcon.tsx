// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React from "react"
import { v4 as uuidv4 } from "uuid"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const InformationIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => {
  const uniqueId = uuidv4()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8Zm-.8 5.6h1.6V6H9.2v1.6Zm0 6.4h1.6V9.2H9.2V14Z"
        />
      </defs>
      <use fill="currentColor" href={`#${uniqueId}`} fillRule="evenodd" />
    </>
  )
  const ariaLabel = props["aria-label"] ?? "information icon"
  return (
    <SVG {...props} aria-label={ariaLabel}>
      {svgContent}
    </SVG>
  )
}
