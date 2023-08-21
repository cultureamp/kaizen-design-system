import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const DeltaBareWhiteIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path id="delta-bare-white.icon.svg" d="m10.482 3.37-8 12.8h16z" />
    </defs>
    <g fill="none" fill-rule="evenodd">
      <use fill="currentColor" href="#delta-bare-white.icon.svg" />
      <path fill="#FFF" d="M15.181 14.199H5.783l4.7-7.523z" />
    </g>
  </SVG>
)
