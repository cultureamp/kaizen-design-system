import React, { useId, useRef } from 'react'
import { createPortal } from 'react-dom'
import classNames from 'classnames'
import { AnimatePresence, motion } from 'motion/react'
import { FocusOn } from 'react-focus-on'
import { warn } from '../util/console'
import { backdropMotion, modalMotion } from './animations'
import { ModalContext } from './context/ModalContext'
import styles from './GenericModal.module.css'

export type GenericModalProps = {
  id?: string
  isOpen: boolean
  children: React.ReactNode
  onEscapeKeyup?: (event: Event) => void
  onOutsideModalClick?: (event: React.MouseEvent) => void
  /** A callback that is triggered after the modal is opened. */
  onAfterEnter?: () => void
  /** A callback that is triggered after the modal is closed. */
  onAfterLeave?: () => void
  className?: string
  /**
   * Affects the max-width of the modal container
   */
  size?: 'medium' | 'large'
}

export const GenericModal = ({
  id: propsId,
  children,
  isOpen = true,
  onEscapeKeyup,
  onOutsideModalClick,
  onAfterEnter,
  onAfterLeave,
  className,
  size = 'medium',
}: GenericModalProps): JSX.Element => {
  const reactId = useId()
  const id = propsId ?? reactId
  const labelledByID = useId()
  const describedByID = useId()
  const scrollLayerRef = useRef<HTMLDivElement | null>(null)
  const modalLayerRef = useRef<HTMLDivElement | null>(null)
  const modalRef = useRef<HTMLDivElement | null>(null)

  const a11yWarn = (): void => {
    // Ensure that consumers have provided an element that labels the modal
    // to meet ARIA accessibility guidelines.
    if (!document.getElementById(labelledByID)) {
      warn(
        `When using the Modal component, you must provide a label for the modal.
        Make sure you have a <ModalAccessibleLabel /> component with content that labels the modal.`,
      )
    }
  }

  const handleOutsideClick = (event: React.MouseEvent): void => {
    if (event.target === scrollLayerRef.current || event.target === modalLayerRef.current) {
      onOutsideModalClick?.(event)
    }
  }

  const focusOnDialog = (): void => {
    // Check if focus already exists within the modal
    if (modalRef.current?.contains(document.activeElement)) {
      return
    }
    modalRef.current?.focus()
  }

  const handleAfterOpen = (): void => {
    focusOnDialog()
    a11yWarn()
    onAfterEnter?.()
  }

  const handleAfterClose = (): void => {
    onAfterLeave?.()
  }

  return createPortal(
    <AnimatePresence mode="wait">
      {isOpen && (
        <ModalContext.Provider
          value={{
            labelledByID,
            describedByID,
          }}
        >
          <FocusOn
            className={className}
            onEscapeKey={onEscapeKeyup}
            scrollLock={true}
            // False positive, the linter thinks this is the native `autoFocus` prop
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus={false}
          >
            <motion.div
              className={styles.backdropLayer}
              variants={backdropMotion}
              initial="hidden"
              animate="visible"
              exit="exit"
            />
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
            <div
              ref={scrollLayerRef}
              className={styles.scrollLayer}
              data-testid={`${id}-scrollLayer`}
              onClick={handleOutsideClick}
            >
              <motion.div
                ref={modalLayerRef}
                className={styles.modalLayer}
                variants={modalMotion}
                initial="hidden"
                animate="visible"
                exit="exit"
                data-testid={id}
                onAnimationComplete={(latest) => {
                  if (latest === 'visible') {
                    handleAfterOpen()
                    return
                  }
                  handleAfterClose()
                }}
              >
                <div
                  ref={modalRef}
                  className={classNames(styles.modal, size === 'large' && styles.large)}
                  role="dialog"
                  aria-modal="true"
                  tabIndex={-1}
                  aria-labelledby={labelledByID}
                  aria-describedby={describedByID}
                >
                  {children}
                </div>
              </motion.div>
            </div>
          </FocusOn>
        </ModalContext.Provider>
      )}
    </AnimatePresence>,
    document.body,
  )
}

GenericModal.displayName = 'GenericModal'
