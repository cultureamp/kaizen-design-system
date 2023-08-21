import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const ChevronUpIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <path
      fill-rule="evenodd"
      d="M6.179 13.155 10 9.253l3.821 3.902 1.18-1.204L10 6.845l-5.001 5.106z"
    />
  </SVG>
)
