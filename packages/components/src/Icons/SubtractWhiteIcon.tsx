import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const SubtractWhiteIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="subtract-white.icon.svg"
        d="M10 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8Z"
      />
    </defs>
    <g fill="none" fill-rule="evenodd">
      <use fill="currentColor" href="#subtract-white.icon.svg" />
      <path fill="#FFF" d="M14 10.8H6V9.2h8z" />
    </g>
  </SVG>
)
