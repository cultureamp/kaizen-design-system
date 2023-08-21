import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const CommentAddWhiteIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="comment-add-white.icon.svg"
        d="M16.4 2H3.6C2.715 2 2 2.716 2 3.6V18l3.2-3.2h11.2a1.6 1.6 0 0 0 1.6-1.6V3.6A1.6 1.6 0 0 0 16.4 2Z"
      />
    </defs>
    <g fill="none" fill-rule="evenodd">
      <use fill="currentColor" href="#comment-add-white.icon.svg" />
      <path
        fill="#FFF"
        d="M13.226 9.218h-2.398v2.399H9.233V9.218l-2.404.006V7.629l2.404-.006V5.225h1.595v2.398h2.398z"
      />
    </g>
  </SVG>
)
