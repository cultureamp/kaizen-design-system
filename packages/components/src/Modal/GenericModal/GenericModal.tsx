import React, { useId, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Transition } from '@headlessui/react'
import classnames from 'classnames'
import { FocusOn } from 'react-focus-on'
import { useIsClientReady } from '../../utils/useIsClientReady'

import { warn } from '../util/console'
import { ModalContext } from './context/ModalContext'
import styles from './GenericModal.module.scss'

export type GenericModalProps = {
  id?: string
  isOpen: boolean
  children: React.ReactNode
  focusLockDisabled?: boolean
  onEscapeKeyup?: (event: KeyboardEvent) => void
  onOutsideModalClick?: (event: React.MouseEvent) => void
  /** A callback that is triggered after the modal is opened. */
  onAfterEnter?: () => void
  /** A callback that is triggered after the modal is closed. */
  onAfterLeave?: () => void
  className?: string
}

export const GenericModal = ({
  id: propsId,
  children,
  isOpen = true,
  focusLockDisabled,
  onEscapeKeyup,
  onOutsideModalClick,
  onAfterEnter,
  onAfterLeave: propsOnAfterLeave,
  className,
}: GenericModalProps): JSX.Element => {
  const reactId = useId()
  const id = propsId ?? reactId

  const labelledByID = useId()
  const describedByID = useId()
  const isClientReady = useIsClientReady()

  const scrollLayerRef = useRef<HTMLDivElement | null>(null)
  const modalLayerRef = useRef<HTMLDivElement | null>(null)

  const scrollModalToTop = (): void => {
    // If we have a really long modal, the autofocus could land on an element down below
    // causing the modal to scroll down and skipping over the content near the modal's top.
    // Ensure that when the modal opens, we are at the top of its content.
    requestAnimationFrame(() => {
      const scrollElement = scrollLayerRef.current

      // This little verbose of a check but this ensures that the element is attached to the DOM as it animates in. This additional check aims to avoid race conditions
      if (!scrollElement?.isConnected) return
      scrollElement.scrollTop = 0
    })
  }

  const a11yWarn = (): void => {
    if (!isClientReady) return

    // Ensure that consumers have provided an element that labels the modal
    // to meet ARIA accessibility guidelines.
    if (!document.getElementById(labelledByID)) {
      warn(
        `When using the Modal component, you must provide a label for the modal.
        Make sure you have a <ModalAccessibleLabel /> component with content that labels the modal.`,
      )
    }
  }

  const focusOnAccessibleLabel = (): void => {
    if (!isClientReady) return
    const modalElement = modalLayerRef.current
    if (!modalElement?.isConnected) return

    // Check if focus already exists within the modal
    if (modalElement.contains(document.activeElement)) {
      return
    }

    const labelElement: HTMLElement | null = document.getElementById(labelledByID)

    if (labelElement?.isConnected) {
      labelElement.focus()
    }
  }

  const onEscapeKeyHandler = (e: Event): void => {
    if (e instanceof KeyboardEvent) {
      onEscapeKeyup?.(e)
    }
  }

  const onAfterEnterHandler = (): void => {
    scrollModalToTop()
    const modalElement = modalLayerRef.current
    if (modalElement) {
      onAfterEnter?.()
      focusOnAccessibleLabel()
      a11yWarn()
    }
  }

  const outsideModalClickHandler = (e: React.MouseEvent): void => {
    if (e.target === scrollLayerRef.current || e.target === modalLayerRef.current) {
      onOutsideModalClick?.(e)
    }
  }

  const onAfterLeaveHandler = (): void => {
    propsOnAfterLeave?.()
  }

  // Don't render portal during SSR
  if (!isClientReady) {
    return <></>
  }

  return createPortal(
    <Transition
      appear={true}
      show={isOpen}
      afterEnter={onAfterEnterHandler}
      afterLeave={onAfterLeaveHandler}
      data-generic-modal-transition-wrapper
      enter={styles.animatingEnter}
      leave={styles.animatingLeave}
      as="div"
      className={classnames(styles.transitionLayer, className)}
    >
      <FocusOn
        focusLock={focusLockDisabled}
        returnFocus={true}
        onEscapeKey={onEscapeKeyHandler}
        // Disabling false positive
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus={false}
      >
        <div className={styles.backdropLayer} />
        {/* Disabling these because we don't want this to be keyboard focusable. Users can use Esc to achieve this with a keyboard.
         */}
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
        <div
          className={styles.scrollLayer}
          ref={scrollLayerRef}
          data-testid={`${id}-scrollLayer`}
          onClick={outsideModalClickHandler}
        >
          <ModalContext.Provider
            value={{
              labelledByID,
              describedByID,
            }}
          >
            <div
              role="dialog"
              className={styles.modalLayer}
              aria-labelledby={labelledByID}
              aria-describedby={describedByID}
              ref={modalLayerRef}
              data-testid={id}
            >
              {children}
            </div>
          </ModalContext.Provider>
        </div>
      </FocusOn>
    </Transition>,
    document.body,
  )
}

GenericModal.displayName = 'GenericModal'
