import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const StarOnIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="star-on.icon.svg"
        d="m18.667 8.033-5.992-.516L10.333 2 7.992 7.525 2 8.033l4.55 3.942-1.367 5.858 5.15-3.108 5.15 3.108-1.358-5.858z"
      />
    </defs>
    <use fill="currentColor" fill-rule="nonzero" href="#star-on.icon.svg" />
  </SVG>
)
