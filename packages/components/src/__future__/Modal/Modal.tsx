import React, { forwardRef } from "react"
import {
  Modal as RACModal,
  ModalOverlayProps as RACModalProps,
} from "react-aria-components"
import { mergeClassNames } from "~components/utils/mergeClassNames"
import styles from "./Modal.module.css"

/**
 * A modal...
 */
export const Modal = forwardRef<HTMLDivElement, RACModalProps>(
  ({ className, ...props }, ref): JSX.Element => (
    <RACModal
      className={mergeClassNames(styles.modal, className)}
      ref={ref}
      {...props}
    />
  )
)
