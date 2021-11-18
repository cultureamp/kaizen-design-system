import React, { InputHTMLAttributes } from "react"
import styles from "./styles.scss"

export interface SelectInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  value?: string
}

const SelectInput = (props: SelectInputProps) => {
  const {} = props
  return <input className={styles.input} {...props} />
}

export default SelectInput
