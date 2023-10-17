import React from "react"
import { IconButton } from "~components/Button"

import { CloseIcon } from "~components/Icon"
import { ModalSection } from "../ModalSection/ModalSection"
import styles from "./ModalHeader.module.scss"

export type ModalHeaderProps = {
  unpadded?: boolean
  reversed?: boolean
  onDismiss?: (evt: React.MouseEvent) => void
  children: React.ReactNode
}

export const ModalHeader = ({
  reversed,
  onDismiss,
  children,
}: ModalHeaderProps): JSX.Element => (
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

ModalHeader.displayName = "ModalHeader"
