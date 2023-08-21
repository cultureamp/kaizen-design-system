import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const DeltaPositiveIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M6.775 4H16v9.225h-2.05V7.5L5.45 16 4 14.55l8.5-8.5H6.775V4z"
      clip-rule="evenodd"
    />
  </SVG>
)
