import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const ChevronRightIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="chevron-right.icon.svg"
        d="M6.845 13.82 10.747 10 6.845 6.18 8.049 5l5.106 5-5.106 5z"
      />
    </defs>
    <use
      fill="currentColor"
      fill-rule="evenodd"
      href="#chevron-right.icon.svg"
    />
  </SVG>
)
