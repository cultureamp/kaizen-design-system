import React from "react"
import { IconButton } from "~components/Button"

import { CloseIcon } from "~components/Icon"
import styles from "../GenericModal.module.scss"
import ModalSection from "./ModalSection"

export type ModalHeaderProps = {
  unpadded?: boolean
  reversed?: boolean
  onDismiss?: (evt: React.MouseEvent) => void
  children: React.ReactNode
}

class ModalHeader extends React.Component<ModalHeaderProps> {
  render(): JSX.Element {
    const { reversed, onDismiss, children } = this.props

    return (
      <ModalSection>
        <div className={styles.dismissButton}>
          <IconButton
            label="Dismiss"
            icon={<CloseIcon role="presentation" />}
            reversed={reversed}
            onClick={onDismiss}
            disabled={onDismiss == undefined}
          />
        </div>
        {children}
      </ModalSection>
    )
  }
}

export default ModalHeader
