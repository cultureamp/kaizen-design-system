import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const CommentDisabledWhiteIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="comment-disabled-white.icon.svg"
        d="M16.4 2H3.6C2.715 2 2 2.715 2 3.6V18l3.2-3.2h11.2a1.6 1.6 0 0 0 1.6-1.6V3.6c0-.885-.716-1.6-1.6-1.6Z"
      />
    </defs>
    <g fill="none" fill-rule="evenodd">
      <use fill="currentColor" href="#comment-disabled-white.icon.svg" />
      <path
        fill="#FFF"
        d="m12.856 10.12-1.128 1.127-1.696-1.696-1.696 1.696-1.129-1.128 1.697-1.696L7.2 6.727 8.328 5.6l1.704 1.696L11.728 5.6l1.128 1.127-1.696 1.696z"
      />
    </g>
  </SVG>
)
