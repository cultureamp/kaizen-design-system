import React from "react"
import { SVG, IconProps } from "~components/SVG"

export const ArrowRightIcon = (props: IconProps): JSX.Element => (
  <SVG {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m12.5 5-1.179 1.179 2.987 2.987H2.5v1.667h11.808l-2.987 2.988L12.5 15l5-5.001z"
    />
  </SVG>
)

ArrowRightIcon.displayName = "ArrowRightIcon"
