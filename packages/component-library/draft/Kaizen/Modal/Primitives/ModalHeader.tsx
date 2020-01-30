import * as React from "react"

import { IconButton } from "@kaizen/component-library"
const close = require("@kaizen/component-library/icons/close.icon.svg").default
import GenericModalSection from "./GenericModalSection"

const styles = require("./ModalHeader.scss")

interface Props {
  readonly unpadded?: boolean
  readonly reversed?: boolean
  readonly onDismiss: (evt: MouseEvent) => void
  readonly children: React.ReactNode
}

interface State {
  hasRendered: boolean
}

class ModalHeader extends React.Component<Props, State> {
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
