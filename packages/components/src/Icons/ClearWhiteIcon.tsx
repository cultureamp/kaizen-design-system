import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const ClearWhiteIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="clear-white.icon.svg"
        d="M10 2c-4.424 0-8 3.576-8 8 0 4.424 3.576 8 8 8 4.424 0 8-3.576 8-8 0-4.424-3.576-8-8-8Z"
      />
    </defs>
    <g fill="none" fill-rule="evenodd">
      <use fill="currentColor" href="#clear-white.icon.svg" />
      <path
        fill="#FFF"
        d="M14 12.872 12.872 14 10 11.128 7.128 14 6 12.872 8.872 10 6 7.128 7.128 6 10 8.872 12.872 6 14 7.128 11.128 10z"
      />
    </g>
  </SVG>
)
