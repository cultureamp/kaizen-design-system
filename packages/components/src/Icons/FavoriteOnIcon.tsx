import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const FavoriteOnIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="favorite-on.icon.svg"
        d="M13.6 3A4.79 4.79 0 0 0 10 4.672 4.79 4.79 0 0 0 6.4 3 4.357 4.357 0 0 0 2 7.4c0 3.024 2.72 5.488 6.84 9.232L10 17.68l1.16-1.056C15.28 12.888 18 10.424 18 7.4 18 4.936 16.064 3 13.6 3Z"
      />
    </defs>
    <use fill="currentColor" fill-rule="nonzero" href="#favorite-on.icon.svg" />
  </SVG>
)
