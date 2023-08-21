import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const FlagOnIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="flag-on.icon.svg"
        d="M11.788 3.882 11.412 2h-8.47v16h1.882v-6.588h5.27l.377 1.882h6.588V3.882z"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#flag-on.icon.svg" />
  </SVG>
)
