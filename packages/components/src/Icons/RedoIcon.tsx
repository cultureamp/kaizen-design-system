import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const RedoIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="redo.icon.svg"
        d="M15.832 9.209A9.168 9.168 0 0 0 9.764 6.92C5.673 6.92 2.21 9.587 1 13.274l2.081.687a7.035 7.035 0 0 1 6.683-4.84 6.97 6.97 0 0 1 4.502 1.659l-3.182 3.18h7.92V6.04L15.832 9.21Z"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#redo.icon.svg" />
  </SVG>
)
