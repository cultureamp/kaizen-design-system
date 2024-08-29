// This file is autogenerated
// Changes to this file will be overwritten

import React, { useId } from "react"
import { SVG } from "~components/__illustrations__/Icon/v1/subcomponents/SVG"
import type { IconProps } from "~components/__illustrations__/v1"

export const CustomIcon = (props: IconProps): JSX.Element => {
  const uniqueId = useId()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="m18.615 3.45-1.253-1.19a.967.967 0 0 0-1.32 0L7.66 10.223l2.573 2.444 8.382-7.963a.854.854 0 0 0 0-1.253M5.79 11.779c-1.553 0-2.807 1.19-2.807 2.666 0 1.164-1.085 1.777-1.87 1.777C1.971 17.307 3.44 18 4.852 18c2.068 0 3.743-1.59 3.743-3.555 0-1.475-1.254-2.666-2.807-2.666"
        />
      </defs>
      <use fill="currentColor" href={`#${uniqueId}`} fillRule="evenodd" />
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
