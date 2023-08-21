import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const OpenWhiteIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <g fill="none" fill-rule="evenodd">
      <path
        fill="currentColor"
        d="M15.361 2.636c.9 0 1.636.737 1.636 1.637v13.09c0 .9-.737 1.637-1.636 1.637H4.636c-.9 0-1.637-.736-1.637-1.636V4.273c0-.9.737-1.637 1.637-1.637h3.056A2.464 2.464 0 0 1 10 1c1.063 0 1.964.687 2.307 1.636h3.054Zm-4.543.819A.821.821 0 0 0 10 2.636a.82.82 0 0 0-.818.819c0 .45.368.818.818.818.45 0 .818-.368.818-.818Z"
      />
      <path
        fill="#FFF"
        d="M5.91 14.91h1.635V9.181H5.91zM9.182 14.91h1.636V6.726H9.182zM12.455 14.91h1.636v-3.274h-1.636z"
      />
    </g>
  </SVG>
)
