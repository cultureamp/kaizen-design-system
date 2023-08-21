import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const ArrowUpIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="arrow-up.icon.svg"
        d="m4 10 1.058 1.057L9.25 6.872V16h1.5V6.872l4.185 4.193L16 10l-6-6z"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#arrow-up.icon.svg" />
  </SVG>
)
