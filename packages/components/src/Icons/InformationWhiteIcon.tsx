import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const InformationWhiteIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="information-white.icon.svg"
        d="M10 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8Z"
      />
    </defs>
    <g fill="none" fill-rule="evenodd">
      <use fill="currentColor" href="#information-white.icon.svg" />
      <path fill="#FFF" d="M9.2 7.6h1.6V6H9.2zM9.2 14h1.6V9.2H9.2z" />
    </g>
  </SVG>
)
