// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React from "react"
import { v4 as uuidv4 } from "uuid"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const AcademyIcon = (props: Omit<SVGProps, "children">): JSX.Element => {
  const uniqueId = uuidv4()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="M10 2 0 7.455l10 5.454 8.182-4.464v6.281H20V7.455L10 2Zm0 12.726-6.364-3.471v3.636L10 18.364l6.364-3.473v-3.636L10 14.726Z"
        />
      </defs>
      <use fill="currentColor" href={`#${uniqueId}`} fillRule="evenodd" />
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
