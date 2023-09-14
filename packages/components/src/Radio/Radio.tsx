import React, { InputHTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./Radio.module.scss"

export type RadioProps = OverrideClassName<
  Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "checked">
> & {
  id: string
  name: string
  value: string
  selectedStatus?: boolean
  reversed?: boolean
}

const renderSelected = (
  selectedStatus: boolean,
  reversed: boolean
): React.ReactNode => {
  if (selectedStatus) {
    return (
      <div className={classnames(styles.icon, reversed && styles.reversed)} />
    )
  }
  return
}

export const Radio = ({
  name,
  value,
  selectedStatus = false,
  reversed = false,
  onChange,
  classNameOverride,
  ...restProps
}: RadioProps): JSX.Element => (
  // @todo: Move classNameOverride to span
  <span>
    <input
      type="radio"
      name={name}
      value={value}
      checked={selectedStatus}
      className={classnames(
        styles.radioInput,
        classNameOverride,
        reversed && styles.reversed
      )}
      onChange={onChange}
      readOnly={onChange === undefined}
      {...restProps}
    />
    <span className={classnames(styles.box, reversed && styles.reversed)}>
      {renderSelected(selectedStatus, reversed)}
    </span>
  </span>
)

Radio.displayName = "Radio"
