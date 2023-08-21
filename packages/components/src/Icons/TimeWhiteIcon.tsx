import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const TimeWhiteIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="time-white.icon.svg"
        d="M10 2c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Z"
      />
    </defs>
    <g fill="none" fill-rule="evenodd">
      <use fill="currentColor" href="#time-white.icon.svg" />
      <path fill="#FFF" d="M13.36 13.36 9.2 10.8V6h1.2v4.16l3.6 2.16z" />
    </g>
  </SVG>
)
