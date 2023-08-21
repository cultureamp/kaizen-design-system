import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const EqualWhiteIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="equal-white.icon.svg"
        d="M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8Z"
      />
    </defs>
    <g fill="none" fill-rule="evenodd">
      <use fill="currentColor" href="#equal-white.icon.svg" />
      <path
        fill="#FFF"
        d="M6.153 12.1h7.694v-1.6H6.153zM6.153 9.219h7.694v-1.6H6.153z"
      />
    </g>
  </SVG>
)
