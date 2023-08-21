import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const ProcessManagerIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="process-manager.icon.svg"
        d="M11 7.333H1V9h10V7.333ZM11 4H1v1.667h10V4ZM1 12.333h6.667v-1.666H1v1.666Zm16.25-3.75 1.25 1.25-5.825 5.834-3.758-3.75 1.25-1.25 2.508 2.5 4.575-4.584Z"
      />
    </defs>
    <use
      fill="currentColor"
      fill-rule="nonzero"
      href="#process-manager.icon.svg"
    />
  </SVG>
)
