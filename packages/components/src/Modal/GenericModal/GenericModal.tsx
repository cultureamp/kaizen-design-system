import React, { useEffect, useId, useRef, useState } from 'react'
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
  onOutsideModalClick?: (event: Event) => void
  /** A callback that is triggered after the modal is opened. */
  onAfterEnter?: () => void
  /** A callback that is triggered after the modal is closed. */
  onAfterLeave?: () => void
  className?: string
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
  const [scrollLayer, setScrollLayer] = useState<HTMLDivElement | null>(null)
  const modalLayer = useRef<HTMLDivElement>(null)
  const modalRef = useRef<HTMLDivElement | null>(null)

  // const outsideModalClickHandler = (event: React.MouseEvent): void => {
  //   if (event.target === scrollLayer || event.target === modalLayer) {
  //     onOutsideModalClick?.(event)
  //   }
  // }

  // const focusOnAccessibleLabel = (): void => {
  //   // Check if focus already exists within the modal
  //   if (modalLayer?.contains(document.activeElement)) {
  //     return
  //   }

  //   const labelElement: HTMLElement | null = document.getElementById(labelledByID)

  //   labelElement?.focus()
  // }

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

  // const preventBodyScroll = (): void => {
  //   const hasScrollbar = window.innerWidth > document.documentElement.clientWidth
  //   const scrollStyles = [styles.unscrollable]

  //   if (hasScrollbar) {
  //     scrollStyles.push(styles.pseudoScrollbar)
  //   }

  //   document.documentElement.classList.add(...scrollStyles)
  // }

  // const onBeforeEnterHandler = (): void => {
  //   preventBodyScroll()
  // }

  const cleanUpAfterClose = (): void => {
    document.documentElement.classList.remove(styles.unscrollable, styles.pseudoScrollbar)
  }

  /* Ensure sure add-on styles (e.g. unscrollable) and key event is cleaned up when the modal is unmounted*/
  // @todo: Fix if possible - avoiding breaking in eslint upgrade

  useEffect(() => () => cleanUpAfterClose(), [])

  // const onAfterLeaveHandler = (): void => {
  //   cleanUpAfterClose()
  //   propsOnAfterLeave?.()
  // }

  const handleAfterOpen = (): void => {
    modalRef.current?.focus()
    a11yWarn()
    onAfterEnter?.()
  }

  const handleAfterClose = (): void => {
    onAfterLeave?.()
  }

  return createPortal(
    <AnimatePresence mode="wait">
      {isOpen && (
        <FocusOn
          onClickOutside={onOutsideModalClick}
          onEscapeKey={onEscapeKeyup}
          onActivation={handleAfterOpen}
          onDeactivation={handleAfterClose}
          scrollLock={true}
          className={className}
          shards={[modalRef]}
          // This linting error is a false positive.
          // The autoFocus prop here is not what the linting library thinks it is.
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
          {/* Disabling these because we don't want this to be keyboard focusable. Users can use Esc to achieve this with a keyboard.
           */}
          {}
          <div
            className={styles.scrollLayer}
            ref={(scrollLayerRef): void => {
              setScrollLayer(scrollLayerRef)
            }}
            // onClick={outsideModalClickHandler}
            data-testid={`${id}-scrollLayer`}
          >
            <ModalContext.Provider
              value={{
                labelledByID,
                describedByID,
              }}
            >
              <motion.div
                ref={modalLayer}
                // onClick={(e: React.MouseEvent): void => e.stopPropagation()}
                className={styles.modalLayer}
                variants={modalMotion}
                initial="hidden"
                animate="visible"
                exit="exit"
                data-testid={id}
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
            </ModalContext.Provider>
          </div>
        </FocusOn>
      )}
    </AnimatePresence>,
    document.body,
  )
}

GenericModal.displayName = 'GenericModal'
