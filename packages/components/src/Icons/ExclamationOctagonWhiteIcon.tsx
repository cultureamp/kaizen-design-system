import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const ExclamationOctagonWhiteIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="exclamation-octagon-white.icon.svg"
        d="M13.316 2H6.684L2 6.684v6.632L6.684 18h6.632L18 13.316V6.684z"
      />
    </defs>
    <g fill="none" fill-rule="evenodd">
      <use
        fill="currentColor"
        fill-rule="nonzero"
        href="#exclamation-octagon-white.icon.svg"
      />
      <path
        fill="#FFF"
        d="M10 14.711c-.64 0-1.156-.515-1.156-1.155S9.36 12.4 10 12.4c.64 0 1.156.516 1.156 1.156 0 .64-.516 1.155-1.156 1.155ZM10.889 10.889H9.11V5.556h1.778z"
      />
    </g>
  </SVG>
)
