import * as React from "react"
import { createPortal } from "react-dom"
import FocusLock from "react-focus-lock"
import uuid from "uuid/v4"
const { CSSTransition } = require("react-transition-group")
import {
  ModalAccessibleContext,
  ModalAccessibleContextType,
} from "./ModalAccessibleContext"

import { warn } from "@kaizen/component-library/util/console"

const styles = require("./GenericModal.scss")

interface GenericModalContainerProps {
  readonly isOpen: boolean
  readonly children: React.ReactNode
  readonly focusLockDisabled?: boolean
  readonly onEscapeKeyup?: (event: KeyboardEvent) => void
  readonly onOutsideModalClick?: (event: React.MouseEvent) => void
}

interface GenericModalProps
  extends GenericModalContainerProps,
    ModalAccessibleContextType {}

const MODAL_TRANSITION_TIMEOUT = 350

function GenericModalContainer(props: GenericModalContainerProps) {
  const labelledByID = uuid()
  const describedByID = uuid()
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

  componentDidMount() {
    if (this.props.isOpen) this.onOpen()
  }

  componentDidUpdate(prevProps: GenericModalProps) {
    const hasJustOpened = !prevProps.isOpen && this.props.isOpen
    const hasJustClosed = prevProps.isOpen && !this.props.isOpen
    if (hasJustOpened) this.onOpen()
    if (hasJustClosed) this.onClose()
  }

  componentWillUnmount() {
    this.onClose()
  }

  onOpen() {
    this.addEventHandlers()
    this.preventBodyScroll()
    this.ensureAccessiblityIsMet()
    this.scrollModalToTop()
    this.focusAccessibleLabel()
    if (this.modalLayer) {
      this.removeAriaHider = createAriaHider(this.modalLayer)
    }
  }

  onClose() {
    this.removeEventHandlers()
    this.restoreBodyScroll()
    this.removeAriaHider()
  }

  addEventHandlers() {
    this.props.onEscapeKeyup &&
      document.addEventListener("keyup", this.escapeKeyHandler)
  }

  removeEventHandlers() {
    this.props.onEscapeKeyup &&
      document.removeEventListener("keyup", this.escapeKeyHandler)
  }

  // tslint:disable-next-line: no-empty
  removeAriaHider(): void {}

  preventBodyScroll() {
    const hasScrollbar =
      window.innerWidth > document.documentElement.clientWidth
    document.documentElement.classList.add(
      ...[styles.unscrollable, hasScrollbar && styles.pseudoScrollbar]
    )
  }

  restoreBodyScroll() {
    document.documentElement.classList.remove(
      styles.unscrollable,
      styles.pseudoScrollbar
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
    const { isOpen, children, focusLockDisabled = false } = this.props

    return createPortal(
      <CSSTransition
        in={isOpen}
        timeout={MODAL_TRANSITION_TIMEOUT}
        classNames="animating"
        appear={true}
        unmountOnExit
      >
        {/* This is not an unused div. It will receive `animating-` classes from react-transition-group */}
        <div>
          <FocusLock
            disabled={focusLockDisabled}
            returnFocus={true}
            autoFocus={false}
          >
            <div className={styles.backdropLayer} />
            <div
              className={styles.scrollLayer}
              ref={scrollLayer => (this.scrollLayer = scrollLayer)}
              onClick={
                this.props.onOutsideModalClick && this.outsideModalClickHandler
              }
            >
              <div
                role="dialog"
                aria-labelledby={this.props.labelledByID}
                aria-describedby={this.props.describedByID}
                className={styles.modalLayer}
                ref={modalLayer => (this.modalLayer = modalLayer)}
              >
                {children}
              </div>
            </div>
          </FocusLock>
        </div>
      </CSSTransition>,
      document.body
    )
  }
}

/**
 * Get an element's owner document. Useful when components are used in iframes
 * or other environments like dev tools.
 */
function getOwnerDocument<T extends HTMLElement = HTMLElement>(
  element: T | null
) {
  return element && element.ownerDocument
    ? element.ownerDocument
    : canUseDOM()
    ? document
    : null
}

/**
 * Check if the DOM exists and is usable
 */
function canUseDOM(): boolean {
  return (
    typeof window !== "undefined" &&
    typeof window.document !== "undefined" &&
    typeof window.document.createElement !== "undefined"
  )
}

// tslint:disable-next-line: no-empty
function noop(): void {}

/**
 * Hide elements in the DOM from screenreaders that are outside the parent tree
 * of the reference node. We do this by setting `aria-hidden` attribute to true
 * for any elements top-level DOM nodes.
 *
 * Returns a function that restores the _original_ values of the affected nodes,
 * so any pre-aria-hidden values will continue to stay hidden.
 */
function createAriaHider(dialogNode: HTMLElement): () => void {
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
