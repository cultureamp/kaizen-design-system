import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const UnderlineIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <path
      fill="currentColor"
      d="M10 13.667c-1.428 0-2.643-.486-3.643-1.459-1-.972-1.5-2.16-1.5-3.562V3h2.229v5.646c0 .791.282 1.465.846 2.021.564.555 1.253.833 2.068.833.815 0 1.504-.278 2.068-.833.564-.556.846-1.23.846-2.021V3h2.23v5.646c0 1.403-.5 2.59-1.5 3.562-1.001.973-2.216 1.459-3.644 1.459ZM4 17v-2h12v2H4Z"
    />
  </SVG>
)
