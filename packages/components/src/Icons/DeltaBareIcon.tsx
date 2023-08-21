import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const DeltaBareIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="delta-bare.icon.svg"
        d="m10.482 3.37 8 12.8h-16l8-12.8Zm4.7 10.829-4.7-7.523-4.699 7.523h9.398Z"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#delta-bare.icon.svg" />
  </SVG>
)
