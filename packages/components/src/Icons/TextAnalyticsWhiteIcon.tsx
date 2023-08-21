import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const TextAnalyticsWhiteIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="text-analytics-white.icon.svg"
        d="M1.57 0C.698 0 0 .698 0 1.613V17l3.183-3.226h11.204c.872 0 1.613-.698 1.613-1.613V1.57C15.957.698 15.26 0 14.387 0H1.57Z"
      />
    </defs>
    <g fill="none" fill-rule="evenodd" transform="translate(2 2)">
      <use fill="currentColor" href="#text-analytics-white.icon.svg" />
      <circle cx="6" cy="5" r="3" fill="#FFF" />
      <circle cx="12" cy="6" r="2" fill="#FFF" />
      <circle cx="8.5" cy="10.5" r="1.5" fill="#FFF" />
    </g>
  </SVG>
)
