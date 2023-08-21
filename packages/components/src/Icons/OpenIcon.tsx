import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const OpenIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="open.icon.svg"
        d="M15.361 2.636c.9 0 1.636.737 1.636 1.637v13.09c0 .9-.737 1.637-1.636 1.637H4.636c-.9 0-1.637-.736-1.637-1.636V4.273c0-.9.737-1.637 1.637-1.637h3.056A2.464 2.464 0 0 1 10 1c1.063 0 1.964.687 2.307 1.636h3.054ZM5.909 14.91h1.636V9.182H5.91v5.727Zm3.273 0h1.636V6.727H9.182v8.182Zm3.273 0h1.636v-3.273h-1.636v3.273ZM10.818 3.455A.821.821 0 0 0 10 2.636a.82.82 0 0 0-.818.819c0 .45.368.818.818.818.45 0 .818-.368.818-.818Z"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#open.icon.svg" />
  </SVG>
)
