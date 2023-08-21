import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const ArrowLeftIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="arrow-left.icon.svg"
        d="M17.5 9.167H5.692l2.987-2.988L7.5 5l-5 5 5 5 1.18-1.18-2.988-2.987H17.5z"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#arrow-left.icon.svg" />
  </SVG>
)
