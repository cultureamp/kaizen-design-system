import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const DateStartWhiteIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="date-start-white.icon.svg"
        d="M16.224 2.89h-.889V1.11h-1.778V2.89H6.445V1.111H4.667V2.89h-.889c-.987 0-1.77.8-1.77 1.778L2 17.113c0 .978.791 1.778 1.778 1.778h12.446c.978 0 1.778-.8 1.778-1.778V4.667c0-.978-.8-1.778-1.778-1.778Z"
      />
    </defs>
    <g fill="none" fill-rule="evenodd">
      <use fill="currentColor" href="#date-start-white.icon.svg" />
      <path fill="#FFF" d="M16.224 17.113H3.778V7.334h12.446z" />
      <path fill="currentColor" d="M5.556 9.112h4.445v4.445H5.556z" />
    </g>
  </SVG>
)
