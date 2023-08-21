import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const ActionOffIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="action-off.icon.svg"
        d="m7.947 1-4.248 9.469 5.271-.144L8.53 19l7.771-13.196H11.72l2.004-4.783L7.947 1Zm.91 1.385 2.776.01-1.207 2.882-.8 1.909h4.243l-3.652 6.2.151-2.992.076-1.49-1.512.04-3.055.084 2.98-6.643Z"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#action-off.icon.svg" />
  </SVG>
)
