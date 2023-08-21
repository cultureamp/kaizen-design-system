import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const FeedbackClassifyWhiteIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="feedback-classify-white.icon.svg"
        d="M16.387 2H3.57C2.698 2 2 2.698 2 3.613V18l3.183-3.226h11.204c.872 0 1.613-.698 1.613-1.613V3.57C17.957 2.698 17.26 2 16.387 2Z"
      />
    </defs>
    <g fill="none" fill-rule="evenodd">
      <use fill="currentColor" href="#feedback-classify-white.icon.svg" />
      <path
        fill="#FFF"
        d="m12.246 11.94-2.312-1.395-2.223 1.439.306-2.66-1.744-1.831 2.485-.349 1.22-2.571L11.2 7.144l2.486.349-1.745 1.831z"
      />
    </g>
  </SVG>
)
