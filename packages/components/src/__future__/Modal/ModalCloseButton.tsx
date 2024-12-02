import React from "react"
import { Button } from "~components/__actions__/v3"
import { Icon } from "../Icon"
import styles from "./ModalCloseButton.module.css"

export type ModalCloseButtonProps = {
  onPress: () => void
}

export const ModalCloseButton = (props: ModalCloseButtonProps): JSX.Element => (
  <Button
    variant="tertiary"
    icon={<Icon name="close" isPresentational className={styles.closeIcon} />}
    hasHiddenLabel
    onPress={props.onPress}
    size="medium"
    className={styles.closeButton}
  >
    Close preferences modal
  </Button>
)
