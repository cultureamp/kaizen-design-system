import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const CommentAddIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="comment-add.icon.svg"
        d="M16.4 2A1.6 1.6 0 0 1 18 3.6v9.6a1.6 1.6 0 0 1-1.6 1.6H5.2L2 18V3.6C2 2.716 2.715 2 3.6 2h12.8Zm-3.174 7.218V7.623h-2.398V5.225H9.233v2.398l-2.404.006v1.595l2.404-.006v2.399h1.595V9.218h2.398Z"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#comment-add.icon.svg" />
  </SVG>
)
