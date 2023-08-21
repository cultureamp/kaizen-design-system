import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const FeedbackCompletedIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="feedback-completed.icon.svg"
        d="M10 2c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm4 12.8H6v-1.6h8v1.6Zm-5.36-3.2L6 8.96l1.12-1.12 1.52 1.52 4.24-4.24L14 6.24 8.64 11.6Z"
      />
    </defs>
    <use
      fill="currentColor"
      fill-rule="nonzero"
      href="#feedback-completed.icon.svg"
    />
  </SVG>
)
