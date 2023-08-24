import React, { useEffect, useRef, useState, InputHTMLAttributes } from "react"
import classnames from "classnames"
import { CheckIcon } from "~icons/CheckIcon"
import { MinusIcon } from "~icons/MinusIcon"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./Checkbox.module.scss"

export type CheckedStatus = "checked" | "unchecked" | "indeterminate"

type ReadOnly = {
  readOnly: true
  onChange?: never
}

type Controlled = {
  readOnly?: never
  onChange: Required<InputHTMLAttributes<HTMLInputElement>["onChange"]>
}

export type CheckboxProps = OverrideClassName<
  Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "checked">
> & {
  checkedStatus: CheckedStatus
  value?: string
} & (ReadOnly | Controlled)

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
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#value
  // The `checked` attribute is representing the default checked state and never changes
  // const [defaultChecked] = useState<boolean>(checkedStatus === "checked")

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
      console.log("checkboxRef.current.checked", checkboxRef.current.checked)
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
        // checked={defaultChecked}
        {...restProps}
      />
      <span className={styles.iconContainer}>{renderIcon(checkedStatus)}</span>
    </span>
  )
}

Checkbox.displayName = "Checkbox"
