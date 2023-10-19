import React from "react"
import { IconButton } from "~components/Button"
import { CloseIcon } from "~components/Icon"
import { ModalSection } from "../ModalSection"
import styles from "./ModalAccessibleHeader.module.scss"

export type ModalAccessibleHeaderProps = {
  unpadded?: boolean
  reversed?: boolean
  onDismiss?: (evt: React.MouseEvent) => void
  children: React.ReactNode
}

export const ModalAccessibleHeader = ({
  reversed,
  onDismiss,
  children,
}: ModalAccessibleHeaderProps): JSX.Element => (
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

ModalAccessibleHeader.displayName = "ModalAccessibleHeader"
