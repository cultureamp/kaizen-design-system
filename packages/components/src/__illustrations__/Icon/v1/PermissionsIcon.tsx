// This file is autogenerated
// Changes to this file will be overwritten

import React, { useId } from "react"
import { SVG } from "~components/__illustrations__/Icon/v1/subcomponents/SVG"
import type { IconProps } from "~components/__illustrations__/v1"

export const PermissionsIcon = (props: IconProps): JSX.Element => {
  const uniqueId = useId()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="M5.91 11.638c-.9 0-1.637-.737-1.637-1.637S5.01 8.364 5.91 8.364s1.637.737 1.637 1.637-.737 1.637-1.637 1.637m4.624-3.274A4.9 4.9 0 0 0 5.91 5.091 4.913 4.913 0 0 0 1 10c0 2.709 2.2 4.91 4.91 4.91a4.9 4.9 0 0 0 4.624-3.273h3.56v3.273h3.273v-3.273h1.636V8.364z"
        />
      </defs>
      <use fill="currentColor" href={`#${uniqueId}`} fillRule="evenodd" />
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
