// This file is autogenerated
// Changes to this file will be overwritten

import React, { useId } from "react"
import { SVG } from "~components/__illustrations__/Icon/v1/subcomponents/SVG"
import type { IconProps } from "~components/__illustrations__/v1"

export const FeedbackReportIcon = (props: IconProps): JSX.Element => {
  const uniqueId = useId()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="M16.386 2c.873 0 1.57.697 1.613 1.57v9.59c0 .916-.74 1.613-1.613 1.613H5.182L2 18V3.612C2 2.697 2.697 2 3.57 2zm-4.01 10.375h2.049V9.193h-2.05zm-3.227 0h2.05V4.397h-2.05zm-3.618 0H7.58v-5.58H5.53z"
        />
      </defs>
      <use fill="currentColor" href={`#${uniqueId}`} fillRule="evenodd" />
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
