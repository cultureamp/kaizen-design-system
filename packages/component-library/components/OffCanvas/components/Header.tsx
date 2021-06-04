import * as React from "react"
import { IconButton } from "@kaizen/draft-button"
import closeIcon from "../../../icons/close.icon.svg"

import styles from "./Header.module.scss"

type Props = {
  leftComponent: React.ReactNode
  onClose: (e: React.MouseEvent) => void
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
