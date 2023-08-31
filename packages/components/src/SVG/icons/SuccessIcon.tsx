import React from "react"
import { SVG, IconProps } from "~components/SVG"

export const SuccessIcon = (props: IconProps): JSX.Element => (
  <SVG {...props}>
    <path
      fill="currentColor"
      d="M10 2c4.416 0 8 3.584 8 8s-3.584 8-8 8-8-3.584-8-8 3.584-8 8-8ZM8.4 14l7.2-7.2-1.128-1.136L8.4 11.736 5.528 8.872 4.4 10l4 4Z"
    />
  </SVG>
)
