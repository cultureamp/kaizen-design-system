// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React, { useId } from 'react'
import { SVG } from '~components/Icon/subcomponents/SVG'
import type { IconProps } from '~components/Icon/types'

export const SurveysIcon = (props: IconProps): JSX.Element => {
  const uniqueId = useId()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="M12.193 2.454h3.251c.856 0 1.556.655 1.556 1.455v13.636c0 .8-.7 1.455-1.556 1.455H4.556C3.7 19 3 18.345 3 17.545V3.91c0-.8.7-1.455 1.556-1.455h3.25C8.134 1.611 8.99 1 10 1s1.867.61 2.193 1.454m-5.83 6.091h7.273V7.091H6.363zm0 2.909h7.273V9.999H6.363zm0 2.908h5.091v-1.454h-5.09zM10 2.454a.73.73 0 0 0-.727.728c0 .4.327.727.727.727a.73.73 0 0 0 .726-.727.73.73 0 0 0-.726-.728"
        />
      </defs>
      <use fill="currentColor" href={`#${uniqueId}`} fillRule="evenodd" />
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
