import React, { useCallback, useEffect, useId, useState } from 'react'
import { createPortal } from 'react-dom'
import { Transition } from '@headlessui/react'
import classnames from 'classnames'
import FocusLock from 'react-focus-lock'
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

  const [scrollLayer, setScrollLayer] = useState<HTMLDivElement | null>(null)
  const [modalLayer, setModalLayer] = useState<HTMLDivElement | null>(null)

  const scrollModalToTop = (): void => {
    // If we have a really long modal, the autofocus could land on an element down below
    // causing the modal to scroll down and skipping over the content near the modal's top.
    // Ensure that when the modal opens, we are at the top of its content.
    requestAnimationFrame(() => {
      if (!scrollLayer) return
      scrollLayer.scrollTop = 0
    })
  }

  const outsideModalClickHandler = (event: React.MouseEvent): void => {
    if (event.target === scrollLayer || event.target === modalLayer) {
      onOutsideModalClick?.(event)
    }
  }

  const focusOnAccessibleLabel = (): void => {
    if (!isClientReady) return

    // Check if focus already exists within the modal
    if (modalLayer?.contains(document.activeElement)) {
      return
    }

    const labelElement: HTMLElement | null = document.getElementById(labelledByID)

    labelElement?.focus()
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

  const preventBodyScroll = (): void => {
    if (!isClientReady) return

    const hasScrollbar = window.innerWidth > document.documentElement.clientWidth
    const scrollStyles = [styles.unscrollable]

    if (hasScrollbar) {
      scrollStyles.push(styles.pseudoScrollbar)
    }

    document.documentElement.classList.add(...scrollStyles)
  }

  const onAfterEnterHandler = (): void => {
    scrollModalToTop()
    if (modalLayer) {
      onAfterEnter?.()
      focusOnAccessibleLabel()
      a11yWarn()
    }
  }

  const escapeKeyHandler = useCallback(
    (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        onEscapeKeyup?.(event)
      }
    },
    [onEscapeKeyup],
  )

  const onBeforeEnterHandler = (): void => {
    preventBodyScroll()

    if (onEscapeKeyup && isClientReady) {
      document.addEventListener('keyup', escapeKeyHandler)
    }
  }

  const cleanUpAfterClose = useCallback(() => {
    if (!isClientReady) return

    document.documentElement.classList.remove(styles.unscrollable, styles.pseudoScrollbar)

    if (onEscapeKeyup) {
      document.removeEventListener('keyup', escapeKeyHandler)
    }
  }, [escapeKeyHandler, onEscapeKeyup, isClientReady])

  /* Ensure sure add-on styles (e.g. unscrollable) and key event is cleaned up when the modal is unmounted*/
  useEffect(() => () => cleanUpAfterClose(), [cleanUpAfterClose])

  const onAfterLeaveHandler = (): void => {
    cleanUpAfterClose()
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
      beforeEnter={onBeforeEnterHandler}
      afterEnter={onAfterEnterHandler}
      afterLeave={onAfterLeaveHandler}
      data-generic-modal-transition-wrapper
      enter={styles.animatingEnter}
      leave={styles.animatingLeave}
      as="div"
      className={classnames(styles.transitionLayer, className)}
    >
      <FocusLock
        disabled={focusLockDisabled}
        returnFocus={true}
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
          ref={(scrollLayerRef): void => {
            setScrollLayer(scrollLayerRef)
          }}
          onClick={outsideModalClickHandler}
          data-testid={`${id}-scrollLayer`}
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
              ref={(modalLayerRef): void => setModalLayer(modalLayerRef)}
              data-testid={id}
            >
              {children}
            </div>
          </ModalContext.Provider>
        </div>
      </FocusLock>
    </Transition>,
    document.body,
  )
}

GenericModal.displayName = 'GenericModal'
