import React from "react"
import {
  OverlayArrow as RACOverlayArrow,
  type OverlayArrowProps,
} from "react-aria-components"
import { useReversedColors } from "~components/__utilities__/v3"
import { mergeClassNames } from "~components/utils/mergeClassNames"

import styles from "./OverlayArrow.module.scss"

export { type OverlayArrowProps }

/**
 * An OverlayArrow renders a custom arrow element relative to an overlay element
 * such as a popover or tooltip such that it aligns with a trigger element.
 */
export const OverlayArrow = (props: OverlayArrowProps): JSX.Element => {
  const reverseColors = useReversedColors()

  return (
    <RACOverlayArrow
      {...props}
      className={mergeClassNames(
        styles.overlayArrow,
        reverseColors && styles.reversed,
        props.className
      )}
    >
      <svg width={8} height={8} viewBox="0 0 8 8">
        <path d="M0 0 L4 4 L8 0" />
      </svg>
    </RACOverlayArrow>
  )
}
