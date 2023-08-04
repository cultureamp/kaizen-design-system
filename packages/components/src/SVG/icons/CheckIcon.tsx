import React from "react"
import { SVG, IconProps } from "~components/SVG"

export const CheckIcon = (props: IconProps): JSX.Element => (
  <SVG {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m8.333 14.342-4.166-4.167L5.342 9l2.991 2.983 6.325-6.325 1.175 1.184z"
    />
  </SVG>
)

CheckIcon.displayName = "CheckIcon"
