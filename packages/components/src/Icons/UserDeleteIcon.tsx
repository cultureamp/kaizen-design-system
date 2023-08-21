import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const UserDeleteIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="user-delete.icon.svg"
        d="M7.694 10a3.332 3.332 0 1 1 0-6.665 3.332 3.332 0 1 1 0 6.665Zm8.332-2.011 1.767-1.767L18.97 7.4l-1.767 1.767 1.767 1.768-1.178 1.178-1.767-1.767-1.767 1.767-1.179-1.178 1.768-1.768L13.08 7.4l1.179-1.178 1.767 1.767Zm-8.332 3.677c2.225 0 6.665 1.117 6.665 3.333v1.666H1.03v-1.666c0-2.216 4.44-3.333 6.665-3.333Z"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#user-delete.icon.svg" />
  </SVG>
)
