import * as React from "react"

import classNames from "classnames"
import closeIcon from "@kaizen/component-library/icons/close.icon.svg"
import { IconButton } from "@kaizen/draft-button"
import { ColorScheme } from "../../types"

import styles from "./Header.module.scss"

type Props = {
  leftComponent: React.ReactNode
  onClose: (e: React.MouseEvent) => void
  heading: string
  colorScheme?: ColorScheme
}

const Header = ({
  leftComponent,
  onClose,
  heading,
  colorScheme = "cultureamp",
}: Props) => (
  <div
    className={classNames(styles.root, {
      [styles.content]: colorScheme === "content",
    })}
  >
    {leftComponent}
    <span className={styles.heading}>{heading}</span>
    <IconButton
      label="Close"
      icon={closeIcon}
      onClick={onClose}
      reversed={colorScheme !== "content"}
    />
  </div>
)

export default Header
