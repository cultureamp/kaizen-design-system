import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const MinusIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path id="minus.icon.svg" d="M13.996 10.833H6.011V9.167h7.985z" />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#minus.icon.svg" />
  </SVG>
)
