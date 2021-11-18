import { Icon } from "@kaizen/component-library"
import React, { forwardRef, ReactNode, HTMLAttributes } from "react"
import classnames from "classnames"
import chevronDown from "@kaizen/component-library/icons/chevron-down.icon.svg"
import styles from "./styles.scss"

export interface SelectButtonProps extends HTMLAttributes<HTMLButtonElement> {
  isOpen: boolean
  children: ReactNode
}

const SelectButton = forwardRef((props: SelectButtonProps, ref) => {
  const { isOpen, children } = props
  return (
    <button
      ref={ref}
      className={classnames(styles.button, {
        [styles.isOpen]: isOpen,
      })}
      {...props}
    >
      <span className={styles.buttonText}>{children}</span>
      <Icon icon={chevronDown} role="presentation" />
    </button>
  )
})

export default SelectButton
