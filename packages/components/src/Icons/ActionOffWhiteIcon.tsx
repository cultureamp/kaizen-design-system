import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const ActionOffWhiteIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="action-off-white.icon.svg"
        d="m7.947 1-4.248 9.469 5.271-.144L8.53 19l7.771-13.196H11.72l2.004-4.783z"
      />
    </defs>
    <g fill="none" fill-rule="evenodd">
      <use fill="currentColor" href="#action-off-white.icon.svg" />
      <path
        fill="#FFF"
        d="m8.857 2.385 2.776.01-1.207 2.882-.8 1.909h4.243l-3.652 6.2.151-2.992.076-1.49-1.512.04-3.055.084z"
      />
    </g>
  </SVG>
)
