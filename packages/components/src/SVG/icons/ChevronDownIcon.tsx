import React from "react"
import { SVG, IconProps } from "~components/SVG"

export const ChevronDownIcon = (props: IconProps): JSX.Element => (
  <SVG {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.179 6.845 10 10.747l3.821-3.902L15 8.049l-5 5.106-5-5.106z"
    />
  </SVG>
)
