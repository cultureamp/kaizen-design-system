// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React from "react"
import { v4 as uuidv4 } from "uuid"
import { SVG, IconProps } from "~components/Icon/subcomponents/SVG"

export const FlagOffIcon = (props: IconProps): JSX.Element => {
  const uniqueId = uuidv4()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="M11.788 3.882h5.27v9.412h-6.587l-.377-1.882h-5.27V18H2.94V2h8.47l.377 1.882Zm-6.963-.004v5.668l7 .02.452 1.837h2.945l-.01-5.654h-4.86l-.515-1.871H4.825Z"
        />
      </defs>
      <use fill="currentColor" href={`#${uniqueId}`} fillRule="evenodd" />
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
