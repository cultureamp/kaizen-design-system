import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const CheckIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="check.icon.svg"
        d="m8.333 14.342-4.166-4.167L5.342 9l2.991 2.983 6.325-6.325 1.175 1.184z"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#check.icon.svg" />
  </SVG>
)
