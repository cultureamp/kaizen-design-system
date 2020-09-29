import * as React from "react"

import { ColorScheme } from "@kaizen/draft-zen-navigation-bar/KaizenDraft/ZenNavigationBar/types"
import classNames from "classnames"
import closeIcon from "@kaizen/component-library/icons/close.icon.svg"
import IconButton from "@kaizen/component-library/components/Button/IconButton"

import styles from "./Header.module.scss"

type Props = {
  leftComponent: React.ReactNode
  onClose: (e: MouseEvent) => void
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
    <span className={styles.close}>
      <IconButton
        label="Close"
        icon={closeIcon}
        onClick={onClose}
        reversed={colorScheme !== "content"}
      />
    </span>
  </div>
)

export default Header
