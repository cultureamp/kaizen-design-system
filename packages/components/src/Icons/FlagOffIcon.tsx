import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const FlagOffIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="flag-off.icon.svg"
        d="M11.788 3.882h5.27v9.412h-6.587l-.377-1.882h-5.27V18H2.94V2h8.47l.377 1.882Zm-6.963-.004v5.668l7 .02.452 1.837h2.945l-.01-5.654h-4.86l-.515-1.871H4.825Z"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#flag-off.icon.svg" />
  </SVG>
)
