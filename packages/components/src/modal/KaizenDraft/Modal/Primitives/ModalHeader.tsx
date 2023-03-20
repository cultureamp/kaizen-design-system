import React from "react"
import close from "@icons/close.icon.svg"
import { IconButton } from "@kaizen/button"
import GenericModalSection from "./GenericModalSection"
import styles from "./ModalHeader.module.scss"

export interface ModalHeaderProps {
  readonly unpadded?: boolean
  readonly reversed?: boolean
  readonly onDismiss?: (evt: React.MouseEvent) => void
  readonly children: React.ReactNode
}

class ModalHeader extends React.Component<ModalHeaderProps> {
  render(): JSX.Element {
    const { reversed, onDismiss, children } = this.props

    return (
      <GenericModalSection>
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
