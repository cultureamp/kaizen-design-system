import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const HierarchyIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="hierarchy.icon.svg"
        d="M8.202 6.434h3.601V4.567h-3.6v1.867Zm.9.834v1.8H1.9v3.601h1.8v-1.8h5.402v1.8h1.801v-1.8h5.402v1.8h1.8v-3.6h-7.202V7.267h-1.8Zm6.302 8.169h3.601v-1.868h-3.6v1.868Zm-7.202 0h3.601v-1.868h-3.6v1.868Zm-7.202 0h3.601v-1.868H1v1.868Z"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#hierarchy.icon.svg" />
  </SVG>
)
