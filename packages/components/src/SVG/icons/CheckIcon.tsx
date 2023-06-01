import React from "react"
import { SVG, SVGProps } from "~components/SVG"

export const CheckIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <path
      id="a"
      d="m8.333 14.342-4.166-4.167L5.342 9l2.991 2.983 6.325-6.325 1.175 1.184z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </SVG>
)
