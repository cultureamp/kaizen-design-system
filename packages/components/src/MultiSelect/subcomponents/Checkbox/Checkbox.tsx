import React, { useEffect, useRef, InputHTMLAttributes } from "react"
import classnames from "classnames"
import { CheckIcon, MinusIcon } from "~components/Icons"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./Checkbox.module.scss"

export type CheckedStatus = "checked" | "unchecked" | "indeterminate"

type ReadOnly = {
  readOnly: true
  onChange?: never
}

type Controlled = {
  readOnly?: false
  onChange: Required<InputHTMLAttributes<HTMLInputElement>["onChange"]>
}

export type CheckboxProps = {
  checkedStatus: CheckedStatus
  value?: string
} & (ReadOnly | Controlled) &
  OverrideClassName<
    // `checked` is omitted as it conflicts with controlled checkboxes
    Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "checked">
  >

const renderIcon = (status: CheckedStatus): JSX.Element | null => {
  switch (status) {
    case "indeterminate":
      return <MinusIcon role="presentation" classNameOverride={styles.icon} />
    case "checked":
      return <CheckIcon role="presentation" classNameOverride={styles.icon} />
    default:
      return null
  }
}

export const Checkbox = ({
  checkedStatus,
  classNameOverride,
  ...restProps
}: CheckboxProps): JSX.Element => {
  const checkboxRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (checkboxRef.current) {
      if (checkedStatus === "checked") {
        checkboxRef.current.checked = true
        checkboxRef.current.indeterminate = false
      } else if (checkedStatus === "unchecked") {
        checkboxRef.current.checked = false
        checkboxRef.current.indeterminate = false
      } else if (checkedStatus === "indeterminate") {
        checkboxRef.current.checked = false
        checkboxRef.current.indeterminate = true
      }
    }
  }, [checkedStatus])

  return (
    <span
      className={classnames(
        styles.checkbox,
        checkedStatus !== "unchecked" && styles.selected,
        classNameOverride
      )}
    >
      <input
        ref={checkboxRef}
        type="checkbox"
        className={styles.nativeCheckbox}
        {...restProps}
      />
      <span className={styles.iconContainer}>{renderIcon(checkedStatus)}</span>
    </span>
  )
}

Checkbox.displayName = "Checkbox"
