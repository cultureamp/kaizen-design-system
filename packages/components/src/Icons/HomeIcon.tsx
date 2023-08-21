import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const HomeIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="home.icon.svg"
        d="M8.118 18v-5.647h3.764V18h4.706v-7.53h2.824L10 2 .588 10.47h2.824V18z"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#home.icon.svg" />
  </SVG>
)
