import React from "react"
import { createPortal } from "react-dom"
import { Transition } from "@headlessui/react"
import FocusLock from "react-focus-lock"
import { v4 } from "uuid"
import { warn } from "@kaizen/component-library/util/console"

import {
  ModalAccessibleContext,
  ModalAccessibleContextType,
} from "./ModalAccessibleContext"
import styles from "./GenericModal.module.scss"

export interface GenericModalContainerProps {
  readonly isOpen: boolean
  readonly children: React.ReactNode
  readonly focusLockDisabled?: boolean
  readonly onEscapeKeyup?: (event: KeyboardEvent) => void
  readonly onOutsideModalClick?: (event: React.MouseEvent) => void
  readonly onAfterLeave?: () => void
  readonly automationId?: string
}

export interface GenericModalProps
  extends GenericModalContainerProps,
    ModalAccessibleContextType {}

const MODAL_TRANSITION_TIMEOUT = 350

const GenericModalContainer = (props: GenericModalContainerProps) => {
  const labelledByID = v4()
  const describedByID = v4()
  return (
    <ModalAccessibleContext.Provider
      value={{
        labelledByID,
        describedByID,
      }}
    >
      <GenericModal
        {...props}
        labelledByID={labelledByID}
        describedByID={describedByID}
      />
    </ModalAccessibleContext.Provider>
  )
}

class GenericModal extends React.Component<GenericModalProps> {
  scrollLayer: HTMLDivElement | null = null
  modalLayer: HTMLDivElement | null = null

  componentWillUnmount() {
    /*
      Sometimes consumers control rendering modals without the
      isOpen prop: e.g {isShowing && (<Modal />)}
      So we need to cleanup after ourselves in onUnmount as well
      as onAfterLeave (the callback from the Transition library).
    */
    this.onAfterLeave()
  }

  onBeforeEnter() {
    this.addEventHandlers()
    this.preventBodyScroll()
  }

  onAfterEnter() {
    this.scrollModalToTop()
    this.ensureAccessiblityIsMet()
    this.focusAccessibleLabel()
    if (this.modalLayer) {
      this.removeAriaHider = createAriaHider(this.modalLayer)
    }
  }

  onAfterLeave() {
    this.removeEventHandlers()
    this.restoreBodyScroll()
    this.removeAriaHider()
    this.props.onAfterLeave && this.props.onAfterLeave()
  }

  addEventHandlers() {
    this.props.onEscapeKeyup &&
      document.addEventListener("keyup", this.escapeKeyHandler)
  }

  removeEventHandlers() {
    this.props.onEscapeKeyup &&
      document.removeEventListener("keyup", this.escapeKeyHandler)
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  removeAriaHider(): void {}

  preventBodyScroll() {
    const hasScrollbar =
      window.innerWidth > document.documentElement.clientWidth
    const scrollStyles = [styles.unscrollable]
    if (hasScrollbar) {
      scrollStyles.push(styles.pseudoScrollbar)
    }
    document.documentElement.classList.add(...scrollStyles)
  }

  restoreBodyScroll() {
    document.documentElement.classList.remove(
      styles.unscrollable,
      styles.pseudoScrollbar
    )
  }
  ensureAccessiblityIsMet() {
    if (!this.modalLayer) return
    // Ensure that consumers have provided an element that labels the modal
    // to meet ARIA accessibility guidelines.
    if (!document.getElementById(this.props.labelledByID)) {
      warn(
        `When using the Modal component, you must provide a label for the modal.
        Make sure you have a <ModalAccessibleLabel /> component with content that labels the modal.`
      )
    }
  }

  scrollModalToTop() {
    // If we have a really long modal, the autofocus could land on an element down below
    // causing the modal to scroll down and skipping over the content near the modal's top.
    // Ensure that when the modal opens, we are at the top of its content.
    requestAnimationFrame(() => {
      if (!this.scrollLayer) return
      this.scrollLayer.scrollTop = 0
    })
  }

  focusAccessibleLabel() {
    if (this.modalLayer) {
      const labelElement: HTMLElement | null = document.getElementById(
        this.props.labelledByID
      )
      if (labelElement) {
        labelElement.focus()
      }
    }
  }

  render(): React.ReactPortal {
    const {
      isOpen,
      children,
      focusLockDisabled = false,
      automationId,
    } = this.props

    return createPortal(
      <Transition
        appear={true}
        show={isOpen}
        enter={styles.animatingEnter}
        leave={styles.animatingLeave}
        beforeEnter={() => this.onBeforeEnter()}
        afterEnter={() => this.onAfterEnter()}
        afterLeave={() => this.onAfterLeave()}
        data-generic-modal-transition-wrapper
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
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
            ref={scrollLayer => (this.scrollLayer = scrollLayer)}
            onClick={
              this.props.onOutsideModalClick && this.outsideModalClickHandler
            }
            data-automation-id={`${automationId}-scrollLayer`}
          >
            <div
              role="dialog"
              aria-labelledby={this.props.labelledByID}
              aria-describedby={this.props.describedByID}
              className={styles.modalLayer}
              ref={modalLayer => (this.modalLayer = modalLayer)}
              data-automation-id={automationId}
            >
              {children}
            </div>
          </div>
        </FocusLock>
      </Transition>,
      document.body
    )
  }

  escapeKeyHandler = (event: KeyboardEvent) => {
    if (
      event.key === "Escape" ||
      event.key === "Esc" // IE11
    )
      this.props.onEscapeKeyup && this.props.onEscapeKeyup(event)
  }

  outsideModalClickHandler = (event: React.MouseEvent) => {
    if (event.target === this.scrollLayer || event.target === this.modalLayer) {
      this.props.onOutsideModalClick && this.props.onOutsideModalClick(event)
    }
  }
}

/**
 * Get an element's owner document. Useful when components are used in iframes
 * or other environments like dev tools.
 */
const getOwnerDocument = <T extends HTMLElement = HTMLElement>(
  element: T | null
) =>
  element && element.ownerDocument
    ? element.ownerDocument
    : canUseDOM()
    ? document
    : null

/**
 * Check if the DOM exists and is usable
 */
const canUseDOM = (): boolean =>
  typeof window !== "undefined" &&
  typeof window.document !== "undefined" &&
  typeof window.document.createElement !== "undefined"

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = (): void => {}

/**
 * Hide elements in the DOM from screenreaders that are outside the parent tree
 * of the reference node. We do this by setting `aria-hidden` attribute to true
 * for any elements top-level DOM nodes.
 *
 * Returns a function that restores the _original_ values of the affected nodes,
 * so any pre-aria-hidden values will continue to stay hidden.
 */
const createAriaHider = (dialogNode: HTMLElement): (() => void) => {
  const originalValues: any[] = []
  const rootNodes: HTMLElement[] = []
  const ownerDocument = getOwnerDocument(dialogNode) || document

  if (!dialogNode) {
    return noop
  }

  Array.prototype.forEach.call(
    ownerDocument.querySelectorAll("body > *"),
    node => {
      const portalNode = dialogNode.parentNode?.parentNode?.parentNode
      if (node === portalNode) {
        return
      }
      const attr = node.getAttribute("aria-hidden")
      const alreadyHidden = attr !== null && attr !== "false"
      if (alreadyHidden) {
        return
      }
      originalValues.push(attr)
      rootNodes.push(node)
      node.setAttribute("aria-hidden", "true")
    }
  )

  return () => {
    rootNodes.forEach((node, index) => {
      const originalValue = originalValues[index]
      if (originalValue === null) {
        node.removeAttribute("aria-hidden")
      } else {
        node.setAttribute("aria-hidden", originalValue)
      }
    })
  }
}

export default GenericModalContainer
