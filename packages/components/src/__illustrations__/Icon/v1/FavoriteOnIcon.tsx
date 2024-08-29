// This file is autogenerated
// Changes to this file will be overwritten

import React, { useId } from "react"
import { SVG } from "~components/__illustrations__/Icon/v1/subcomponents/SVG"
import type { IconProps } from "~components/__illustrations__/v1"

export const FavoriteOnIcon = (props: IconProps): JSX.Element => {
  const uniqueId = useId()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="M13.6 3A4.8 4.8 0 0 0 10 4.672 4.8 4.8 0 0 0 6.4 3 4.357 4.357 0 0 0 2 7.4c0 3.024 2.72 5.488 6.84 9.232L10 17.68l1.16-1.056C15.28 12.888 18 10.424 18 7.4 18 4.936 16.064 3 13.6 3"
        />
      </defs>
      <use fill="currentColor" href={`#${uniqueId}`} fillRule="nonzero" />
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
