import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const DeltaFlatIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <path fill="currentColor" d="M4 9h12v2H4V9z" />
  </SVG>
)
