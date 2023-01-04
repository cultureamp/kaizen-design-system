import React, { HTMLAttributes, useRef } from "react"
import { createPortal } from "react-dom"
import classnames from "classnames"
import { motion, AnimatePresence } from "framer-motion"
import { FocusOn } from "react-focus-on"
import { Backdrop } from "../Backdrop"
import { CloseButton } from "../CloseButton"

import styles from "./Modal.module.scss"

const modalMotion = {
  hidden: {
    y: "-64px",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    animationTimingFunction: "cubic-bezier(0.5, 0.01, 0.01, 0.96)",
    animationDuration: "200ms",
  },
  exit: {
    y: "-64px",
    opacity: 0,
  },
}

export interface RootProps extends HTMLAttributes<HTMLDivElement> {
  /** Sets the open state of the modal. */
  isOpen: boolean
  /**
   * Identifies the element (or elements) that labels the current element.
   */
  accessibleLabelId: string
  /** The contents of the modal. */
  children: React.ReactNode
  /** Handler that is called when the modal should close. */
  onDismiss: () => void
  /**
   * Whether to close the overlay when the user interacts outside it.
   * @default true
   */
  dismissOnBackdropClick?: boolean
  /**
   * Whether to show the close button.
   * @default false
   */
  hideCloseButton?: boolean
  /**
   * Supports three sizes
   *  * @default md
   */
  size?: "sm" | "md" | "lg"
}

export const Modal: React.FC<RootProps> = ({
  isOpen,
  onDismiss,
  dismissOnBackdropClick = true,
  hideCloseButton = false,
  accessibleLabelId,
  size = "md",
  children,
  ...restProps
}) => {
  const dialogRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  return createPortal(
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          <Backdrop />
          <div className={styles.scrollLayer}>
            <div className={styles.modalWrapper} {...restProps}>
              <FocusOn
                onClickOutside={dismissOnBackdropClick ? onDismiss : undefined}
                onEscapeKey={onDismiss}
                shards={[contentRef]}
                onActivation={(): void => dialogRef?.current?.focus()}
                // This linting error is a false positive.
                // The autoFocus prop here is not what the linting library thinks it is.
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus={false}
                scrollLock={false}
              >
                <motion.div
                  ref={dialogRef}
                  role="dialog"
                  aria-modal="true"
                  tabIndex={-1}
                  aria-labelledby={accessibleLabelId}
                  onClick={(e: React.MouseEvent): void => e.stopPropagation()}
                  className={classnames(styles.modal, {
                    [styles.small]: size === "sm",
                    [styles.large]: size === "lg",
                  })}
                  variants={modalMotion}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <div className={styles.content} ref={contentRef}>
                    {!hideCloseButton && <CloseButton onClick={onDismiss} />}
                    {children}
                  </div>
                </motion.div>
              </FocusOn>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  )
}

Modal.displayName = "Modal"
