// This file is autogenerated
// Changes to this file will be overwritten

import React, { useId } from "react"
import { SVG } from "~components/__illustrations__/Icon/v1/subcomponents/SVG"
import type { IconProps } from "~components/__illustrations__/v1"

export const FlagOffIcon = (props: IconProps): JSX.Element => {
  const uniqueId = useId()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="M11.788 3.882h5.27v9.412h-6.587l-.377-1.882h-5.27V18H2.94V2h8.47zm-6.963-.004v5.668l7 .02.452 1.837h2.945l-.01-5.654h-4.86l-.515-1.871z"
        />
      </defs>
      <use fill="currentColor" href={`#${uniqueId}`} fillRule="evenodd" />
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
