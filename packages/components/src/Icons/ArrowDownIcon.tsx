import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const ArrowDownIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="arrow-down.icon.svg"
        d="m16 8-1.057-1.058-4.193 4.185V2h-1.5v9.127L5.065 6.935 4 8l6 6z"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#arrow-down.icon.svg" />
  </SVG>
)
