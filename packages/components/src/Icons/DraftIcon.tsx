import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const DraftIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="draft.icon.svg"
        d="M15.376 2.636c.9 0 1.637.737 1.637 1.637v13.09c0 .9-.737 1.637-1.637 1.637H4.631c-.9 0-1.636-.736-1.636-1.636V4.273c0-.9.736-1.637 1.636-1.637h3.062A2.463 2.463 0 0 1 10 1c1.064 0 1.964.687 2.307 1.636h3.07ZM11.15 8.801l-4.813 4.442v1.666h1.805l4.813-4.443-1.805-1.665Zm2.105-1.314a.511.511 0 0 0-.682 0l-.942.87 1.806 1.665.941-.869a.421.421 0 0 0 0-.628l-1.123-1.038Zm-2.437-4.032A.82.82 0 0 0 10 2.636a.82.82 0 0 0-.818.819c0 .45.368.818.818.818a.82.82 0 0 0 .818-.818Z"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#draft.icon.svg" />
  </SVG>
)
