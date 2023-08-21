import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const StarOffIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="star-off.icon.svg"
        d="m18.667 8.033-5.992-.516L10.333 2 7.992 7.525 2 8.033l4.55 3.942-1.367 5.858 5.15-3.108 5.15 3.108-1.358-5.858 4.542-3.942Zm-8.334 5.134L7.2 15.058l.833-3.566-2.766-2.4 3.65-.317 1.416-3.358 1.425 3.366 3.65.317-2.766 2.4.833 3.567-3.142-1.9Z"
      />
    </defs>
    <use fill="currentColor" fill-rule="nonzero" href="#star-off.icon.svg" />
  </SVG>
)
