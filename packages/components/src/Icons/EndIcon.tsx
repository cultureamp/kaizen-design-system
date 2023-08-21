import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const EndIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <path
      fill="currentColor"
      d="M14 4h2v12h-2V4Zm-3.7 5.17H2v1.66h8.3l-2.98 3L8.5 15l5-5-5-5-1.18 1.18 2.99 2.99Z"
    />
  </SVG>
)
