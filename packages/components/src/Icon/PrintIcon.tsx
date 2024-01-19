// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React, { useId } from "react"
import { SVG } from "~components/Icon/subcomponents/SVG"
import type { IconProps } from "~components/Icon/types"

export const PrintIcon = (props: IconProps): JSX.Element => {
  const uniqueId = useId()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="M5.2 6h9.6V2.8H5.2zm10.4.8c1.328 0 2.4 1.072 2.4 2.4V14h-3.2v3.2H5.2V14H2V9.2c0-1.328 1.072-2.4 2.4-2.4zm0 3.2c.44 0 .8-.36.8-.8 0-.44-.36-.8-.8-.8-.44 0-.8.36-.8.8 0 .44.36.8.8.8m-8.8 5.6h6.4v-4H6.8z"
        />
      </defs>
      <use fill="currentColor" href={`#${uniqueId}`} fillRule="evenodd" />
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
