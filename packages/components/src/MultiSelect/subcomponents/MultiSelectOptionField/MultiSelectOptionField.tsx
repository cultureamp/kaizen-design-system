import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"
import { MultiSelectOption } from "../../types"
import { Checkbox, CheckboxProps } from "../Checkbox"
import styles from "./MultiSelectOptionField.module.scss"

export type MultiSelectOptionFieldProps = {
  id: string
  option: MultiSelectOption
  checkedStatus: CheckboxProps["checkedStatus"]
  onChange: CheckboxProps["onChange"]
} & OverrideClassName<Omit<HTMLAttributes<HTMLDivElement>, "id" | "onChange">>

export const MultiSelectOptionField = ({
  id,
  option,
  checkedStatus,
  onChange,
  classNameOverride,
  ...restProps
}: MultiSelectOptionFieldProps): JSX.Element => (
  <div
    className={classnames(styles.multiSelectOptionField, classNameOverride)}
    {...restProps}
  >
    <Checkbox
      id={id}
      checkedStatus={checkedStatus}
      onChange={onChange}
      value={option.value}
      classNameOverride={styles.checkbox}
    />
    <label htmlFor={id} className={styles.label}>
      {option.label}
    </label>
  </div>
)

MultiSelectOptionField.displayName = "MultiSelect.OptionField"
