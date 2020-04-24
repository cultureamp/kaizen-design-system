const closeIcon = require("@kaizen/component-library/icons/close.icon.svg")
  .default
import * as React from "react"
import IconButton from "../../Button/IconButton"

const styles = require("./Header.module.scss")

type Props = {
  leftComponent: React.ReactNode
  onClose: (e: MouseEvent) => void
  heading: string
}

const Header = ({ leftComponent, onClose, heading }: Props) => (
  <div className={styles.root}>
    {leftComponent}
    <span className={styles.heading}>{heading}</span>
    <IconButton label="Close" icon={closeIcon} onClick={onClose} reversed />
  </div>
)

export default Header
