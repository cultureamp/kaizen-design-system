import * as React from "react"

import { IconButton } from "@kaizen/draft-button"
import close from "@kaizen/component-library/icons/close.icon.svg"
import GenericModalSection from "./GenericModalSection"

import styles from "./ModalHeader.scss"

export interface ModalHeaderProps {
  readonly unpadded?: boolean
  readonly reversed?: boolean
  readonly onDismiss: (evt: React.MouseEvent) => void
  readonly children: React.ReactNode
}

export interface ModalHeaderState {
  hasRendered: boolean
}

class ModalHeader extends React.Component<ModalHeaderProps, ModalHeaderState> {
  state = { hasRendered: false }

  componentDidMount() {
    requestAnimationFrame(() => this.setState({ hasRendered: true }))
  }

  render() {
    const { unpadded, reversed, onDismiss, children } = this.props
    const { hasRendered } = this.state

    // The dismiss button in the header is the first focusable element in
    // the modal DOM so it would typically receive keyboard focus automatically
    // when the modal opens

    // For more natural behaviour, the keyboard focus shouldn't be moved
    // immediately to the dismiss button over other focusable elements in the
    // modal like the primary and secondary actions

    // So, remove the dismiss button from the tab ordering when the modal first
    // opens then restore it to the native tab ordering after rendering
    const disableDismissButtonFocus = !hasRendered

    return (
      <GenericModalSection unpadded={unpadded}>
        <div className={styles.dismissButton}>
          <IconButton
            label="Dismiss"
            icon={close}
            reversed={reversed}
            onClick={onDismiss}
            disableTabFocusAndIUnderstandTheAccessibilityImplications={
              disableDismissButtonFocus
            }
          />
        </div>
        {children}
      </GenericModalSection>
    )
  }
}

export default ModalHeader
