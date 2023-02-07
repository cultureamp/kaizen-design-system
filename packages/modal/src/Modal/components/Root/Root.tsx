import React, { HTMLAttributes, useRef } from "react"
import { createPortal } from "react-dom"
import classnames from "classnames"
import { motion, AnimatePresence } from "framer-motion"
import { FocusOn } from "react-focus-on"
import { Backdrop } from "../Backdrop"
import { CloseButton } from "../CloseButton"
import styles from "./Root.scss"

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
}

export interface RootProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean
  accessibleLabelId: string
  children: React.ReactNode
  onDismiss: () => void
  dismissOnBackdropClick?: boolean
  hideCloseButton?: boolean
  size?: "sm" | "md" | "lg"
}

export const Root: React.FC<RootProps> = ({
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
    <AnimatePresence exitBeforeEnter={true}>
      {isOpen && (
        <>
          <Backdrop />
          <div className={styles.modalWrapper}>
            <FocusOn
              onClickOutside={dismissOnBackdropClick ? onDismiss : undefined}
              onEscapeKey={onDismiss}
              shards={[contentRef]}
              onActivation={() => dialogRef?.current?.focus()}
              // This linting error is a false positive.
              // The autoFocus prop here is not what the linting library thinks it is.
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus={false}
            >
              <motion.div
                onClick={e => e.stopPropagation()}
                className={classnames(styles.modal, {
                  [styles.small]: size === "sm",
                  [styles.large]: size === "lg",
                })}
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
                role="dialog"
                aria-modal="true"
                tabIndex={-1}
                aria-labelledby={accessibleLabelId}
                ref={dialogRef}
                {...restProps}
              >
                {!hideCloseButton && <CloseButton onClick={onDismiss} />}
                <div className={styles.content} ref={contentRef}>
                  {children}
                </div>
              </motion.div>
            </FocusOn>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  )
}

Root.displayName = "Root"
