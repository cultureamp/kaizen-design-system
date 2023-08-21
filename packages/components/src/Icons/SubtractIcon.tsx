import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const SubtractIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="subtract.icon.svg"
        d="M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8Zm4 8.8V9.2H6v1.6h8Z"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#subtract.icon.svg" />
  </SVG>
)
