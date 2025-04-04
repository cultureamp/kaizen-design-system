// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React from 'react'
import { SVG } from '~components/Icon/subcomponents/SVG'
import styles from './LiveIcon.module.css'

type LiveIconSvgProps = { classNameOverride: string }

const LiveIconSvg = ({ classNameOverride }: LiveIconSvgProps): JSX.Element => (
  <SVG
    role="presentation"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    classNameOverride={classNameOverride}
  >
    <path
      stroke="currentColor"
      d="M3.266 12.733c-2.6-2.6-2.6-6.866 0-9.466M5.2 10.8c-1.534-1.533-1.534-4.067 0-5.667"
      strokeWidth="1.5"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    <path fill="currentColor" d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
    <path
      stroke="currentColor"
      d="M10.8 5.2c1.533 1.533 1.533 4.067 0 5.667M12.733 3.267c2.6 2.6 2.6 6.8 0 9.4"
      strokeWidth="1.5"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </SVG>
)

LiveIconSvg.displayName = 'LiveIconSvg'

export const LiveIcon = (): JSX.Element => (
  <span className={styles.liveIcon}>
    <LiveIconSvg classNameOverride={styles.liveIcon_base} />
    <LiveIconSvg classNameOverride={styles.liveIcon_1} />
    <LiveIconSvg classNameOverride={styles.liveIcon_2} />
    <LiveIconSvg classNameOverride={styles.liveIcon_3} />
  </span>
)

LiveIcon.displayName = 'LiveIcon'
