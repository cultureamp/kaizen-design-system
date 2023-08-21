import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const ArrowForwardIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="arrow-forward.icon.svg"
        d="m12.5 5-1.18 1.18 2.988 2.986H2.5v1.666h11.808l-2.987 2.989L12.5 15l5-5z"
      />
    </defs>
    <use
      fill="currentColor"
      fill-rule="evenodd"
      href="#arrow-forward.icon.svg"
    />
  </SVG>
)
