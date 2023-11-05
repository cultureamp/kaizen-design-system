import React, { InputHTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./Radio.module.scss"

export type RadioProps = OverrideClassName<
  Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "id" | "name" | "value" | "checked" | "type"
  >
> & {
  /** Required to ensure the Radio always gets an ID to match a label when composed. */
  id: string
  /** Unique identifier for the group this Radio belongs to. Required for keyboard navigation of the group. See also [Defining a radio group](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#defining_a_radio_group) on MDN. E.g. the question ID for which this is one possible answer to. */
  name: string
  /** The value for this form field when this radio button is selected. */
  value?: string | readonly string[] | number
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
