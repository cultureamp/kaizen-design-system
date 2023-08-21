import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const NavigatorIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="navigator.icon.svg"
        d="M12.01 3.997v1.858h2.786V8.64h1.857V3.997H12.01Zm-8.663 0V8.64h1.857V5.855H7.99V3.997H3.347Zm11.449 7.363v2.787H12.01v1.856h4.643V11.36h-1.857Zm-11.449 0v4.643H7.99v-1.856H5.204V11.36H3.347Z"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#navigator.icon.svg" />
  </SVG>
)
