import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const BookmarkOffIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <path
      fill="currentColor"
      d="M15 1H5c-1.1 0-1.99.9-1.99 2L3 19l7-3 7 3V3c0-1.1-.9-2-2-2zm0 15-5-2.18L5 16V3h10v13z"
    />
  </SVG>
)
