import * as React from "react"

import { ColorScheme } from "@kaizen/draft-zen-navigation-bar/KaizenDraft/ZenNavigationBar/NavigationBar"
import classNames from "classnames"
const closeIcon = require("@kaizen/component-library/icons/close.icon.svg")
  .default
import IconButton from "@kaizen/component-library/components/Button/IconButton"

const styles = require("./Header.module.scss")

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
    <IconButton
      label="Close"
      icon={closeIcon}
      onClick={onClose}
      reversed={colorScheme !== "content"}
    />
  </div>
)

export default Header
