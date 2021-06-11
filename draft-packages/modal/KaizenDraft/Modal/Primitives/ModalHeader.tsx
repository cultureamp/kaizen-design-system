import * as React from "react"

import { IconButton } from "@kaizen/draft-button"
import close from "@kaizen/component-library/icons/close.icon.svg"
import GenericModalSection from "./GenericModalSection"

import styles from "./ModalHeader.scss"

export interface ModalHeaderProps {
  readonly unpadded?: boolean
  readonly reversed?: boolean
  readonly onDismiss?: (evt: React.MouseEvent) => void
  readonly children: React.ReactNode
}

class ModalHeader extends React.Component<ModalHeaderProps> {
  render() {
    const { unpadded, reversed, onDismiss, children } = this.props

    return (
      <GenericModalSection unpadded={unpadded}>
        <div className={styles.dismissButton}>
          <IconButton
            label="Dismiss"
            icon={close}
            reversed={reversed}
            onClick={onDismiss}
            disabled={onDismiss == undefined}
          />
        </div>
        {children}
      </GenericModalSection>
    )
  }
}

export default ModalHeader
