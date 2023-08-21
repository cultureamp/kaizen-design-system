import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const AcademyIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="academy.icon.svg"
        d="M10 2 0 7.455l10 5.454 8.182-4.464v6.281H20V7.455L10 2Zm0 12.726-6.364-3.471v3.636L10 18.364l6.364-3.473v-3.636L10 14.726Z"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#academy.icon.svg" />
  </SVG>
)
