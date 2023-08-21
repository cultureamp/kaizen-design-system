import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const TemplateWhiteIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="template-white.icon.svg"
        d="M9.182 3.455A.82.82 0 0 1 10 2.636a.82.82 0 0 1 .818.819.82.82 0 0 1-.818.818.82.82 0 0 1-.818-.818Zm3.125-.819A2.463 2.463 0 0 0 10 1a2.463 2.463 0 0 0-2.307 1.636H4.64c-.9 0-1.636.737-1.636 1.637v13.09c0 .9.736 1.637 1.636 1.637h10.727c.9 0 1.637-.736 1.637-1.636V4.273c0-.9-.737-1.637-1.637-1.637h-3.06Z"
      />
    </defs>
    <g fill="none" fill-rule="evenodd">
      <use fill="currentColor" href="#template-white.icon.svg" />
      <path
        fill="#FFF"
        d="M12.005 11.273h1.455V9.818h-1.455zM9.288 11.273h1.454V9.818H9.288zM6.543 11.273h1.455V9.818H6.543z"
      />
    </g>
  </SVG>
)
