import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const SaveIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="save.icon.svg"
        d="M14.444 2H3.778C2.79 2 2 2.8 2 3.778v12.444C2 17.2 2.791 18 3.778 18h12.444C17.2 18 18 17.2 18 16.222V5.556L14.444 2ZM10 16.222a2.663 2.663 0 0 1-2.667-2.666A2.663 2.663 0 0 1 10 10.889a2.663 2.663 0 0 1 2.667 2.667A2.663 2.663 0 0 1 10 16.222Zm2.667-8.889h-8.89V3.778h8.89v3.555Z"
      />
    </defs>
    <use fill="currentColor" fill-rule="nonzero" href="#save.icon.svg" />
  </SVG>
)
