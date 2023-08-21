import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const EditIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="edit.icon.svg"
        d="M1.556 14.666V18h3.519l10.383-9.837-3.519-3.334-10.383 9.837ZM18.17 5.594a.858.858 0 0 0 0-1.258L15.979 2.26a.978.978 0 0 0-1.328 0l-1.717 1.627 3.519 3.334 1.717-1.627Z"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#edit.icon.svg" />
  </SVG>
)
