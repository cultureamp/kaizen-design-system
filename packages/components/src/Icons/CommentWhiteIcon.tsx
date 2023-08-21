import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const CommentWhiteIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="comment-white.icon.svg"
        d="M16.4 2H3.6c-.884 0-1.592.716-1.592 1.6L2 18l3.2-3.2h11.2a1.6 1.6 0 0 0 1.6-1.6V3.6A1.6 1.6 0 0 0 16.4 2Z"
      />
    </defs>
    <g fill="none" fill-rule="evenodd">
      <use fill="currentColor" href="#comment-white.icon.svg" />
      <path
        fill="#FFF"
        d="M12.4 9.2H14V7.6h-1.6zM9.2 9.2h1.6V7.6H9.2zM6 9.2h1.6V7.6H6z"
      />
    </g>
  </SVG>
)
