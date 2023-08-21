import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const SortAscendingIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path id="sort-ascending.icon.svg" d="m6 12 4-4 4 4z" />
    </defs>
    <use
      fill="currentColor"
      fill-rule="evenodd"
      href="#sort-ascending.icon.svg"
    />
  </SVG>
)
