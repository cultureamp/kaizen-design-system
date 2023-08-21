import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const SkipWhiteIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="skip-white.icon.svg"
        d="M10 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8Z"
      />
    </defs>
    <g fill="none" fill-rule="evenodd">
      <use fill="currentColor" href="#skip-white.icon.svg" />
      <path
        fill="#FFF"
        d="m6.8 12.935 4.272-3.068L6.8 6.8zM11.6 6.8v6.135h1.005V6.8z"
      />
    </g>
  </SVG>
)
