import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const ChevronLeftIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="chevron-left.icon.svg"
        d="M13.155 13.82 9.253 10l3.902-3.82L11.951 5l-5.106 5 5.106 5z"
      />
    </defs>
    <use
      fill="currentColor"
      fill-rule="evenodd"
      href="#chevron-left.icon.svg"
    />
  </SVG>
)
