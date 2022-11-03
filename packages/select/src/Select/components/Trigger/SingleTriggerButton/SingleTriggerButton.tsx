import classnames from "classnames"
import React, { Key } from "react"
import { TriggerButtonBase } from "../TriggerButtonBase"
import styles from "./SingleTriggerButton.module.scss"

export type SingleTriggerButtonProps = {
  placeholder: string
  selectedOptionLabel: Key | null
  classNameOverride?: string // TODO: migrate it to use OverrideClassName<T> and omit the props controlled by React-Aria
}

export const SingleTriggerButton: React.VFC<SingleTriggerButtonProps> = ({
  selectedOptionLabel,
  classNameOverride,
  placeholder,
}) => (
  <TriggerButtonBase
    classNameOverride={classnames([
      selectedOptionLabel === null && styles.placeholder,
      classNameOverride,
    ])}
  >
    {
      <span>
        {selectedOptionLabel != null
          ? `${selectedOptionLabel}`
          : `${placeholder}`}
      </span>
    }
  </TriggerButtonBase>
)

SingleTriggerButton.displayName = "SingleTriggerButton"
