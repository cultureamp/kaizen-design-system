import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const DateEndWhiteIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="date-end-white.icon.svg"
        d="M13.557 1.111V2.89H6.445V1.111H4.667V2.89h-.889a1.77 1.77 0 0 0-1.77 1.778L2 17.113c0 .982.796 1.778 1.778 1.778h12.446c.982 0 1.778-.796 1.778-1.778V4.667c0-.982-.796-1.778-1.778-1.778h-.889V1.111h-1.778Z"
      />
    </defs>
    <g fill="none" fill-rule="evenodd">
      <use fill="currentColor" href="#date-end-white.icon.svg" />
      <path fill="#FFF" d="M16.224 17.113H3.778V7.334h12.446z" />
      <path fill="currentColor" d="M14.446 10.89h-4.445v4.445h4.445z" />
    </g>
  </SVG>
)
