import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const TemplateIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="template.icon.svg"
        d="M12.307 2.636h3.061c.9 0 1.637.737 1.637 1.637v13.09c0 .9-.737 1.637-1.637 1.637H4.641c-.9 0-1.636-.736-1.636-1.636V4.273c0-.9.736-1.637 1.636-1.637h3.052A2.463 2.463 0 0 1 10 1c1.064 0 1.964.687 2.307 1.636Zm-.302 8.637h1.455V9.818h-1.455v1.455ZM9.182 3.455c0 .45.368.818.818.818a.82.82 0 0 0 .818-.818.82.82 0 0 0-.818-.819.82.82 0 0 0-.818.819Zm.106 7.818h1.454V9.818H9.288v1.455Zm-2.745 0h1.455V9.818H6.543v1.455Z"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#template.icon.svg" />
  </SVG>
)
