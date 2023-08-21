import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const FlagOffWhiteIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <g fill="none" fill-rule="evenodd">
      <path
        fill="currentColor"
        d="M11.788 3.882 11.412 2h-8.47v16h1.882v-6.588h5.27l.377 1.882h6.588V3.882z"
      />
      <path
        fill="#FFF"
        d="M4.825 3.878h5.012l.515 1.871h4.86l.01 5.654h-2.945l-.451-1.837-7.001-.02z"
      />
    </g>
  </SVG>
)
