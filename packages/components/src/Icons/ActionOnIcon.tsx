import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const ActionOnIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="action-on.icon.svg"
        d="m3.699 10.469 5.271-.143L8.53 19l7.771-13.195H11.72l2.004-4.784L7.947 1z"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#action-on.icon.svg" />
  </SVG>
)
