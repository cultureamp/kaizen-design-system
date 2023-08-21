import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const UndoIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="undo.icon.svg"
        d="M10.24 6.921A9.166 9.166 0 0 0 4.172 9.21L1 6.041v7.92h7.92L5.739 10.78A6.967 6.967 0 0 1 10.24 9.12c3.12 0 5.76 2.028 6.684 4.84l2.08-.686c-1.21-3.688-4.672-6.354-8.764-6.354"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#undo.icon.svg" />
  </SVG>
)
