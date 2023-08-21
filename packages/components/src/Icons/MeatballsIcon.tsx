import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const MeatballsIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="meatballs.icon.svg"
        d="M4 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Z"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#meatballs.icon.svg" />
  </SVG>
)
