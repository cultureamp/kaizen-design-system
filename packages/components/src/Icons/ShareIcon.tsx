import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const ShareIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="share.icon.svg"
        d="M14.82 13.31c-.611 0-1.158.24-1.575.618l-5.728-3.333c.041-.185.073-.37.073-.563 0-.193-.032-.378-.073-.562L13.18 6.17a2.404 2.404 0 0 0 4.05-1.76A2.407 2.407 0 0 0 14.82 2a2.407 2.407 0 0 0-2.41 2.41c0 .193.03.378.072.562l-5.662 3.3a2.4 2.4 0 0 0-1.64-.65 2.407 2.407 0 0 0-2.41 2.41 2.407 2.407 0 0 0 2.41 2.41 2.4 2.4 0 0 0 1.64-.65l5.719 3.34c-.04.17-.065.345-.065.522A2.349 2.349 0 0 0 14.82 18a2.35 2.35 0 0 0 2.345-2.346 2.349 2.349 0 0 0-2.345-2.345"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#share.icon.svg" />
  </SVG>
)
