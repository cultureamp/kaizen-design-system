import React, { HTMLAttributes, useId, useState } from "react"
import { createPortal } from "react-dom"
import { Transition } from "@headlessui/react"
import FocusLock from "react-focus-lock"
import { ModalContext, ModalContextType } from "./subcomponents/ModalContext"
import styles from "./GenericModal.module.scss"

export type GenericModalProps = {
  id?: string
  isOpen: boolean
  children: React.ReactNode
  focusLockDisabled?: boolean
  onEscapeKeyup?: (event: KeyboardEvent) => void
  onOutsideModalClick?: (event: React.MouseEvent) => void
  onAfterLeave?: () => void
} & ModalContextType &
  HTMLAttributes<HTMLDivElement>

export const GenericModal = ({
  id: propsId,
  children,
  isOpen = true,
  labelledByID,
  describedByID,
  focusLockDisabled,
  onEscapeKeyup,
  onOutsideModalClick,
  onAfterLeave: propsOnAfterLeave,
}: GenericModalProps): JSX.Element => {
  const id = propsId ?? useId()
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

  const preventBodyScroll = (): void => {
    const hasScrollbar =
      window.innerWidth > document.documentElement.clientWidth
    const scrollStyles = [styles.unscrollable]

    if (hasScrollbar) {
      scrollStyles.push(styles.pseudoScrollbar)
    }

    document.documentElement.classList.add(...scrollStyles)
  }

  const onAfterEnterHandler = (): void => {
    scrollModalToTop()
  }

  const onBeforeEnterHandler = (): void => {
    preventBodyScroll()

    if (onEscapeKeyup) {
      document.addEventListener("keyup", event => {
        if (event.key === "Escape") {
          onEscapeKeyup?.(event)
        }
      })
    }
  }

  const onAfterLeaveHandler = (): void => {
    document.documentElement.classList.remove(
      styles.unscrollable,
      styles.pseudoScrollbar
    )

    if (onEscapeKeyup) {
      document.removeEventListener("keyup", onEscapeKeyup)
    }

    propsOnAfterLeave?.()
  }

  return createPortal(
    <Transition
      appear={true}
      show={isOpen}
      enter={styles.animatingEnter}
      leave={styles.animatingLeave}
      beforeEnter={onBeforeEnterHandler}
      afterEnter={onAfterEnterHandler}
      afterLeave={onAfterLeaveHandler}
      data-generic-modal-transition-wrapper
      onClick={(e: React.MouseEvent): void => e.stopPropagation()}
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
    document.body
  )
}

GenericModal.displayName = "GenericModal"
