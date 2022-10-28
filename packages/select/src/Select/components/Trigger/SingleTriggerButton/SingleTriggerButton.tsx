import React, { Key } from "react"
import { TriggerButtonBase } from "../TriggerButtonBase"
// import styles from "./FilterTriggerButton.module.scss"

export type SingleTriggerButtonProps = {
  placeholder?: string
  selectedOptionLabel: Key | null
  classNameOverride?: string // TODO: migrate it to use OverrideClassName<T> and omit the props controlled by React-Aria
}

export const SingleTriggerButton: React.VFC<SingleTriggerButtonProps> = ({
  selectedOptionLabel,
  classNameOverride,
}) => (
  <TriggerButtonBase classNameOverride={classNameOverride}>
    {selectedOptionLabel && <span>{`${selectedOptionLabel}`}</span>}
  </TriggerButtonBase>
)

SingleTriggerButton.displayName = "SingleTriggerButton"
