import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const ThumbsUpIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="thumbs-up.icon.svg"
        d="M5.228 16.817v-8.18H2.502v8.18h2.726Zm10.907-8.862h-4.301l.647-3.115.02-.218c0-.28-.115-.539-.3-.723l-.722-.716-4.485 4.493a1.333 1.333 0 0 0-.402.96v6.817c0 .75.613 1.364 1.363 1.364h6.135c.566 0 1.05-.341 1.254-.832l2.059-4.806c.061-.156.095-.32.095-.497V9.318c0-.75-.613-1.363-1.363-1.363Z"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#thumbs-up.icon.svg" />
  </SVG>
)
