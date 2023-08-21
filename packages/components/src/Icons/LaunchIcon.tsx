import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const LaunchIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8ZM8.4 13.6l4.8-3.6-4.8-3.6v7.2Z"
    />
  </SVG>
)
