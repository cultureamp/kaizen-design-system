// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"
import { v4 as uuidv4 } from "uuid"

export const FaceNeutralIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => {
  const uniqueId = uuidv4()
  return (
    <SVG {...props}>
      <defs>
        <path
          id={uniqueId}
          d="M12.8 6.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM8.4 8A1.2 1.2 0 1 0 6 8a1.2 1.2 0 0 0 2.4 0Zm1.6 8.4A6.398 6.398 0 0 1 3.6 10c0-3.536 2.864-6.4 6.4-6.4 3.536 0 6.4 2.864 6.4 6.4 0 3.536-2.864 6.4-6.4 6.4ZM9.992 2C5.576 2 2 5.584 2 10s3.576 8 7.992 8C14.416 18 18 14.416 18 10s-3.584-8-8.008-8ZM7.6 12.8h4.8v-1.2H7.6v1.2Z"
        />
      </defs>
      <use fill="currentColor" href={`#${uniqueId}`} fillRule="evenodd" />
    </SVG>
  )
}
