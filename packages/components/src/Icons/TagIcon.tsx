import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const TagIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="tag.icon.svg"
        d="m13.315 3.978-10.419.01a1.892 1.892 0 0 0-1.894 1.884v8.256c0 1.042.853 1.885 1.894 1.885l10.419.01c.635 0 1.203-.313 1.544-.796l4.139-5.239-4.14-5.215a1.888 1.888 0 0 0-1.543-.795Z"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#tag.icon.svg" />
  </SVG>
)
