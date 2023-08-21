import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const PermissionsIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="permissions.icon.svg"
        d="M5.91 11.638c-.9 0-1.637-.737-1.637-1.637S5.01 8.364 5.91 8.364s1.637.737 1.637 1.637-.737 1.637-1.637 1.637Zm4.624-3.274A4.903 4.903 0 0 0 5.91 5.091 4.913 4.913 0 0 0 1 10c0 2.709 2.2 4.91 4.91 4.91a4.903 4.903 0 0 0 4.624-3.273h3.56v3.273h3.273v-3.273h1.636V8.364h-8.47Z"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#permissions.icon.svg" />
  </SVG>
)
