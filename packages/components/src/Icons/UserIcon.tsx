import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const UserIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="user.icon.svg"
        d="M10 12c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#user.icon.svg" />
  </SVG>
)
