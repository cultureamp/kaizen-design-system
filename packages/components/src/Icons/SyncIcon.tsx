import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const SyncIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="sync.icon.svg"
        d="m3.638 6.365 3.637 3.638H4.547a5.461 5.461 0 0 0 5.456 5.456c.919 0 1.792-.228 2.546-.637l1.328 1.327a7.216 7.216 0 0 1-3.874 1.128 7.273 7.273 0 0 1-7.275-7.274H0l3.638-3.638Zm11.82 3.638a5.46 5.46 0 0 0-5.455-5.457c-.919 0-1.791.227-2.547.637L6.13 3.855a7.214 7.214 0 0 1 3.874-1.128 7.273 7.273 0 0 1 7.275 7.276h2.728l-3.638 3.637-3.637-3.637h2.728Z"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#sync.icon.svg" />
  </SVG>
)
