import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const FeedbackReviewWhiteIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="feedback-review-white.icon.svg"
        d="M16.39 2H3.61c-.87 0-1.608.74-1.608 1.613V18l3.216-3.183H16.39c.87 0 1.608-.74 1.608-1.613V3.613C17.955 2.74 17.26 2 16.39 2Z"
      />
    </defs>
    <g fill="none" fill-rule="evenodd">
      <use fill="currentColor" href="#feedback-review-white.icon.svg" />
      <path
        fill="#FFF"
        d="M14.781 11.635H8.782l1.609-1.613h4.39zM5.218 11.635V9.672l5.478-5.492c.174-.175.39-.175.564 0l1.391 1.395c.174.174.174.392 0 .566l-5.476 5.494H5.218Z"
      />
    </g>
  </SVG>
)
