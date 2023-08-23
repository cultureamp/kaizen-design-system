// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"
import { v4 as uuidv4 } from "uuid"

export const ExclamationWhiteIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => {
  const uniqueId = uuidv4()
  return (
    <SVG {...props}>
      <defs>
        <path id={uniqueId} d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="currentColor" href={`#${uniqueId}`} />
        <path fill="#FFF" d="M10.8 14H9.2v-1.6h1.6zM10.8 10.8H9.2V6h1.6z" />
      </g>
    </SVG>
  )
}
