import React from "react"
import { SVG, SVGProps } from "~components/SVG"

// formally named "empty"
export const IndicatorInactiveIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <path
      d="M2 10c0-4.416 3.584-8 8-8s8 3.584 8 8-3.584 8-8 8-8-3.584-8-8Zm8 6.4c3.536 0 6.4-2.864 6.4-6.4 0-3.536-2.864-6.4-6.4-6.4A6.398 6.398 0 0 0 3.6 10c0 3.536 2.864 6.4 6.4 6.4Z"
      fill="currentColor"
    />
  </SVG>
)
