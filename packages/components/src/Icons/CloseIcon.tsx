import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const CloseIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="close.icon.svg"
        d="M14.654 4.167 10 8.82 5.346 4.167l-1.18 1.18L8.823 10l-4.655 4.655 1.179 1.178L10 11.18l4.654 4.654 1.18-1.178L11.18 10l4.655-4.653z"
      />
    </defs>
    <use fill-rule="evenodd" href="#close.icon.svg" />
  </SVG>
)
