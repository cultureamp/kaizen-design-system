import React from "react"
import { Button } from "react-aria-components"
import { ChevronDownIcon } from "~components/Icon"
import styles from "./ComboboxPopoverToggle.module.css"

export const ComboboxPopoverToggle = () => (
  // label is inserted magically from react aria
  <Button className={styles.button}>
    <ChevronDownIcon role="presentation" />
  </Button>
)
