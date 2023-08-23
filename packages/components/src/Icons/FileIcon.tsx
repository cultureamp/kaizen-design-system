// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"
import { v4 as uuidv4 } from "uuid"

export const FileIcon = (props: Omit<SVGProps, "children">): JSX.Element => {
  const uniqueId = uuidv4()
  return (
    <SVG {...props}>
      <defs>
        <path
          id={uniqueId}
          d="m11.613 2 4.39 4.657V16.4a1.6 1.6 0 0 1-1.6 1.6H5.59a1.593 1.593 0 0 1-1.592-1.6l.008-12.8c0-.884.708-1.6 1.592-1.6h6.015Zm-.8 5.6h4.4l-4.4-4.4v4.4Zm-4 4h6.4V10h-6.4v1.6Zm0 3.2h6.4v-1.6h-6.4v1.6Z"
        />
      </defs>
      <use fill="currentColor" href={`#${uniqueId}`} fillRule="evenodd" />
    </SVG>
  )
}
