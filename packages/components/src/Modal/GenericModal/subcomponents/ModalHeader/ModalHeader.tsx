import React from 'react'
import { IconButton } from '~components/ButtonV1'
import { Icon } from '~components/Icon'
import { ModalBody } from '../ModalBody'
import styles from './ModalHeader.module.scss'

export type ModalHeaderProps = {
  unpadded?: boolean
  reversed?: boolean
  onDismiss?: (evt: React.MouseEvent) => void
  children: React.ReactNode
}

export const ModalHeader = ({ reversed, onDismiss, children }: ModalHeaderProps): JSX.Element => (
  <ModalBody>
    <div className={styles.dismissButton}>
      <IconButton
        label="Dismiss"
        icon={<Icon name="close" isPresentational />}
        reversed={reversed}
        onClick={onDismiss}
        disabled={onDismiss == undefined}
      />
    </div>
    {children}
  </ModalBody>
)

ModalHeader.displayName = 'ModalHeader'
