import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const DeltaNegativeIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M6.775 16H16V6.775h-2.05V12.5L5.45 4 4 5.45l8.5 8.5H6.775V16z"
      clip-rule="evenodd"
    />
  </SVG>
)
