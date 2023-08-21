import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const CommentIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="comment.icon.svg"
        d="M16.4 2A1.6 1.6 0 0 1 18 3.6v9.6a1.6 1.6 0 0 1-1.6 1.6H5.2L2 18l.008-14.4c0-.884.708-1.6 1.592-1.6h12.8Zm-4 7.2H14V7.6h-1.6v1.6Zm-3.2 0h1.6V7.6H9.2v1.6ZM6 9.2h1.6V7.6H6v1.6Z"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#comment.icon.svg" />
  </SVG>
)
