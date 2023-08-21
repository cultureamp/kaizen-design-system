import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const LaunchWhiteIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="launch-white.icon.svg"
        d="M10 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8Z"
      />
    </defs>
    <g fill="none" fill-rule="evenodd">
      <use fill="currentColor" href="#launch-white.icon.svg" />
      <path fill="#FFF" d="M8.4 13.6V6.4l4.8 3.6z" />
    </g>
  </SVG>
)
