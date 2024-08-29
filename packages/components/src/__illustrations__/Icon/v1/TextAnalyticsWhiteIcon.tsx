// This file is autogenerated
// Changes to this file will be overwritten

import React, { useId } from "react"
import { SVG } from "~components/__illustrations__/Icon/v1/subcomponents/SVG"
import type { IconProps } from "~components/__illustrations__/v1"

export const TextAnalyticsWhiteIcon = (props: IconProps): JSX.Element => {
  const uniqueId = useId()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="M1.57 0C.698 0 0 .698 0 1.613V17l3.183-3.226h11.204c.872 0 1.613-.698 1.613-1.613V1.57C15.957.698 15.26 0 14.387 0z"
        />
      </defs>
      <g fill="none" transform="translate(2 2)" fillRule="evenodd">
        <use fill="currentColor" href={`#${uniqueId}`} />
        <circle cx="6" cy="5" r="3" fill="#FFF" />
        <circle cx="12" cy="6" r="2" fill="#FFF" />
        <circle cx="8.5" cy="10.5" r="1.5" fill="#FFF" />
      </g>
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
