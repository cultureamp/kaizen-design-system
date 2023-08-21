import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const HamburgerIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="hamburger.icon.svg"
        d="M2 16h16v-2H2v2Zm0-5h16V9H2v2Zm0-7v2h16V4H2Z"
      />
    </defs>
    <use fill="currentColor" fill-rule="nonzero" href="#hamburger.icon.svg" />
  </SVG>
)
