import React from "react"
import { CloseIcon } from "~components/Icon/CloseIcon"
import styles from "../GenericNotification/GenericNotification.module.scss"

type CancelButtonProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const CancelButton = ({ onClick }: CancelButtonProps): JSX.Element => (
  <button
    className={styles.cancel}
    type="button"
    onClick={onClick}
    data-testid="close-button"
    aria-label="Close notification"
  >
    <CloseIcon role="presentation" />
  </button>
)

CancelButton.displayName = "CancelButton"
