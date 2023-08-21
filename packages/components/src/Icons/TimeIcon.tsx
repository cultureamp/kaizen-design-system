import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const TimeIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M10 2c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8Zm3.36 11.36.64-1.04-3.6-2.16V6H9.2v4.8l4.16 2.56Z"
    />
  </SVG>
)
