import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const PauseWhiteIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="pause-white.icon.svg"
        d="M10 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8Z"
      />
    </defs>
    <g fill="none" fill-rule="evenodd">
      <use fill="currentColor" href="#pause-white.icon.svg" />
      <path fill="#FFF" d="M9.2 13.2H7.6V6.8h1.6zM12.4 13.2h-1.6V6.8h1.6z" />
    </g>
  </SVG>
)
