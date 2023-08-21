import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const BlankIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="blank.icon.svg"
        d="M12.303 2.636A2.446 2.446 0 0 0 10 1a2.446 2.446 0 0 0-2.303 1.636H4.635c-.904 0-1.637.733-1.637 1.637v13.09c0 .905.733 1.637 1.637 1.637H15.36c.904 0 1.636-.732 1.636-1.636V4.273c0-.904-.732-1.637-1.636-1.637h-3.057Zm-1.485.819a.818.818 0 1 1-1.636 0 .818.818 0 0 1 1.636 0Z"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#blank.icon.svg" />
  </SVG>
)
