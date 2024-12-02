import React, { forwardRef } from "react"
import {
  ModalOverlay as RACModalOverlay,
  ModalOverlayProps as RACModalOverlayProps,
} from "react-aria-components"
import { mergeClassNames } from "~components/utils/mergeClassNames"
import styles from "./ModalOverlay.module.css"

/**
 * A modal overlay...
 */
export const ModalOverlay = ({
  className,
  children,
  ...props
}: RACModalOverlayProps): JSX.Element => {
  console.log(children)
  return (
    <RACModalOverlay
      className={mergeClassNames(styles.overlay, className)}
      {...props}
    >
      {children}
    </RACModalOverlay>
  )
}
