import React from "react"
import { SVG, SVGProps } from "~components/SVG"

export const VisibleIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.831 3.75c-4.09 0-7.583 2.544-8.998 6.135 1.415 3.591 4.908 6.135 8.998 6.135 4.09 0 7.583-2.544 8.998-6.135-1.415-3.591-4.908-6.135-8.998-6.135Zm0 10.225a4.091 4.091 0 0 1-4.09-4.09 4.091 4.091 0 0 1 4.09-4.09 4.091 4.091 0 0 1 4.09 4.09 4.091 4.091 0 0 1-4.09 4.09Zm0-6.544a2.45 2.45 0 0 0-2.454 2.454 2.45 2.45 0 0 0 2.454 2.454 2.45 2.45 0 0 0 2.454-2.454 2.45 2.45 0 0 0-2.454-2.454Z"
    />
  </SVG>
)
