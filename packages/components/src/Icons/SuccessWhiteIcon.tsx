import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const SuccessWhiteIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="success-white.icon.svg"
        d="M10 2c-4.416 0-8 3.584-8 8s3.584 8 8 8 8-3.584 8-8-3.584-8-8-8Z"
      />
    </defs>
    <g fill="none" fill-rule="evenodd">
      <use fill="currentColor" href="#success-white.icon.svg" />
      <path
        fill="#FFF"
        d="m8.4 14-4-4 1.128-1.128L8.4 11.736l6.072-6.072L15.6 6.8z"
      />
    </g>
  </SVG>
)
