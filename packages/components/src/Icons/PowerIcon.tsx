import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const PowerIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="power.icon.svg"
        d="M9.111 10.889h1.778V2H9.11v8.889Zm6.076-6.965-1.258 1.258A6.21 6.21 0 0 1 16.222 10a6.223 6.223 0 0 1-12.444 0A6.21 6.21 0 0 1 6.07 5.182L4.813 3.924A7.972 7.972 0 0 0 2 10a8 8 0 0 0 16 0 7.972 7.972 0 0 0-2.813-6.076Z"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#power.icon.svg" />
  </SVG>
)
