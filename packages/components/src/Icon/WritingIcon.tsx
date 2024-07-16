// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React, { useId } from "react"
import { SVG } from "~components/Icon/subcomponents/SVG"
import type { IconProps } from "~components/Icon/types"

export const WritingIcon = (props: IconProps): JSX.Element => {
  const uniqueId = useId()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="M1 18.55h18.002V15.7H1zM16.53 4.333a.69.69 0 0 0 0-1.009L14.78 1.66a.78.78 0 0 0-1.061 0L12.25 3.052l2.813 2.673zm-2.216 2.105-2.813-2.672-7.5 7.126v2.672h2.812z"
        />
      </defs>
      <use fill="currentColor" href={`#${uniqueId}`} fillRule="evenodd" />
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
