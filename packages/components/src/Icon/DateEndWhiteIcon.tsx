// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React, { useId } from "react"
import { SVG } from "~components/Icon/subcomponents/SVG"
import type { IconProps } from "~components/Icon/types"

export const DateEndWhiteIcon = (props: IconProps): JSX.Element => {
  const uniqueId = useId()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="M13.557 1.111V2.89H6.445V1.111H4.667V2.89h-.889a1.77 1.77 0 0 0-1.77 1.778L2 17.113c0 .982.796 1.778 1.778 1.778h12.446c.982 0 1.778-.796 1.778-1.778V4.667c0-.982-.796-1.778-1.778-1.778h-.889V1.111z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="currentColor" href={`#${uniqueId}`} />
        <path fill="#FFF" d="M16.224 17.113H3.778V7.334h12.446z" />
        <path fill="currentColor" d="M14.446 10.89h-4.445v4.445h4.445z" />
      </g>
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
