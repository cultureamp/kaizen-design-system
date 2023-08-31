import React from "react"
import { SVG, IconProps } from "~components/SVG"

export const ChevronUpIcon = (props: IconProps): JSX.Element => (
  <SVG {...props}>
    <path
      fillRule="evenodd"
      fill="currentColor"
      d="M6.179 13.155 10 9.253l3.821 3.902 1.18-1.204L10 6.845l-5.001 5.106z"
    />
  </SVG>
)
