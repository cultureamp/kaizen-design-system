import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const FeedbackCompletedWhiteIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="feedback-completed-white.icon.svg"
        d="M10 2c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Z"
      />
    </defs>
    <g fill="none" fill-rule="evenodd">
      <use
        fill="currentColor"
        fill-rule="nonzero"
        href="#feedback-completed-white.icon.svg"
      />
      <path
        fill="#FFF"
        d="M14 14.8H6v-1.6h8zM8.64 11.6 6 8.96l1.12-1.12 1.52 1.52 4.24-4.24L14 6.24z"
      />
    </g>
  </SVG>
)
