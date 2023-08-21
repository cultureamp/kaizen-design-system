import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const ImportWhiteIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="import-white.icon.svg"
        d="M15.823 8.444A5.938 5.938 0 0 0 10 3.667 5.943 5.943 0 0 0 4.735 6.86 4.752 4.752 0 0 0 .5 11.583a4.749 4.749 0 0 0 4.75 4.75h10.292a3.96 3.96 0 0 0 3.958-3.958c0-2.09-1.627-3.784-3.677-3.93Z"
      />
    </defs>
    <g fill="none" fill-rule="evenodd">
      <use fill="currentColor" href="#import-white.icon.svg" />
      <path
        fill="#FFF"
        d="M11.583 13.958H8.417v-3.166H6.042L10 6.833l3.958 3.959h-2.375z"
      />
    </g>
  </SVG>
)
