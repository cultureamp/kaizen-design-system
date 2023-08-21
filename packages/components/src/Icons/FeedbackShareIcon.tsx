import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const FeedbackShareIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="feedback-share.icon.svg"
        d="M16.4 2A1.6 1.6 0 0 1 18 3.6v9.6a1.6 1.6 0 0 1-1.6 1.6H5.2L2 18l.008-14.4c0-.884.708-1.6 1.592-1.6h12.8Zm-5.511 8.92L14 8.014l-3.111-2.904v1.66C7.778 7.186 6.444 9.26 6 11.333c1.111-1.451 2.667-2.115 4.889-2.115v1.701Z"
      />
    </defs>
    <use
      fill="currentColor"
      fill-rule="evenodd"
      href="#feedback-share.icon.svg"
    />
  </SVG>
)
