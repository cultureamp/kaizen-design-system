import React from 'react'
import classnames from 'classnames'
import styles from './ModalBody.module.css'

export type ModalBodyProps = {
  inputEdit?: boolean
  className?: string
  children: React.ReactNode
  unpadded?: boolean
}

export const ModalBody = ({
  inputEdit = false,
  className,
  children,
  unpadded = false,
}: ModalBodyProps): JSX.Element => (
  <div
    className={classnames(
      className,
      styles.body,
      unpadded && styles.unpadded,
      inputEdit && styles.gray,
    )}
  >
    {children}
  </div>
)

ModalBody.displayName = 'ModalBody'
