import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const DeltaIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="delta.icon.svg"
        d="M2 10c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8-8-3.58-8-8Zm8-4.63-5.018 8.028h10.036L10 5.369Zm2.131 6.401H7.87L10 8.36l2.131 3.412Z"
      />
    </defs>
    <g fill="none" fill-rule="evenodd">
      <circle cx="10" cy="10" r="7" />
      <use fill="currentColor" href="#delta.icon.svg" />
    </g>
  </SVG>
)
