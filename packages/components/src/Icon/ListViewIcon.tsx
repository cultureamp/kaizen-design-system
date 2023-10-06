// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React from "react"
import { v4 as uuidv4 } from "uuid"
import { SVG, IconProps } from "~components/Icon/subcomponents/SVG"

export const ListViewIcon = (props: IconProps): JSX.Element => {
  const uniqueId = uuidv4()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="M2 10.89h1.778V9.112H2v1.778Zm0 3.556h1.778v-1.778H2v1.778Zm0-7.112h1.778V5.556H2v1.778Zm3.556 3.556h12.446V9.112H5.556v1.778Zm0 3.556h12.446v-1.778H5.556v1.778Zm0-8.89v1.778h12.446V5.556H5.556Z"
        />
      </defs>
      <use fill="currentColor" href={`#${uniqueId}`} fillRule="evenodd" />
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
