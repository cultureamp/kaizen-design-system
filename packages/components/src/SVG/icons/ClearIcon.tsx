import React from "react"
import { SVG, IconProps } from "~components/SVG"

export const ClearIcon = (props: IconProps): JSX.Element => (
  <SVG {...props}>
    <path
      fillRule="evenodd"
      fill="currentColor"
      d="M10 2c-4.424 0-8 3.576-8 8 0 4.424 3.576 8 8 8 4.424 0 8-3.576 8-8 0-4.424-3.576-8-8-8Zm4 10.872L12.872 14 10 11.128 7.128 14 6 12.872 8.872 10 6 7.128 7.128 6 10 8.872 12.872 6 14 7.128 11.128 10 14 12.872Z"
    />
  </SVG>
)
