import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const DashboardIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="dashboard.icon.svg"
        d="M10.889 7.333H18V2h-7.111v5.333ZM2 10.89h7.111V2H2v8.889ZM10.889 18H18V9.111h-7.111V18ZM2 18h7.111v-5.333H2V18Z"
      />
    </defs>
    <use
      fill="currentColor"
      fill-rule="evenodd"
      transform="translate(-2 -2)"
      href="#dashboard.icon.svg"
    />
  </SVG>
)
