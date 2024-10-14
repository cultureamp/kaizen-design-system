import React from "react"
import { Input, InputProps as RACInputProps } from "react-aria-components"
import { SearchIcon } from "~components/Icon"
import styles from "./ComboboxInput.module.css"

type ComboboxInputProps = RACInputProps

export const ComboboxInput = (props: ComboboxInputProps) => (
  <>
    <SearchIcon role="presentation" classNameOverride={styles.searchIcon} />
    <Input className={styles.input} {...props} />
  </>
)
