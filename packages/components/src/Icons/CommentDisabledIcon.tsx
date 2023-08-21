import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const CommentDisabledIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="comment-disabled.icon.svg"
        d="M16.4 2c.884 0 1.6.715 1.6 1.6v9.6a1.6 1.6 0 0 1-1.6 1.6H5.2L2 18V3.6C2 2.715 2.715 2 3.6 2h12.8Zm-3.544 8.12L11.16 8.422l1.696-1.696L11.728 5.6l-1.696 1.696L8.328 5.6 7.2 6.727l1.704 1.696-1.697 1.696 1.129 1.128 1.696-1.696 1.696 1.696 1.128-1.128Z"
      />
    </defs>
    <use
      fill="currentColor"
      fill-rule="evenodd"
      href="#comment-disabled.icon.svg"
    />
  </SVG>
)
