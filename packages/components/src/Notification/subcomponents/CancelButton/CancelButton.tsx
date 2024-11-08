import React from "react"
import { Icon } from "~components/__future__/Icon"
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
    <Icon name="close" isPresentational />
  </button>
)

CancelButton.displayName = "CancelButton"
