import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const SortDescendingIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path id="sort-descending.icon.svg" d="m5.833 8.333 4 4 4-4z" />
    </defs>
    <use
      fill="currentColor"
      fill-rule="evenodd"
      href="#sort-descending.icon.svg"
    />
  </SVG>
)
