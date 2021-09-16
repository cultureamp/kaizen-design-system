import React, { InputHTMLAttributes } from "react"
import styles from "./styles.scss"

export interface InputRangeProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: number
}

const InputRange: React.FunctionComponent<InputRangeProps> = (
  props: InputRangeProps
) => {
  const { id, defaultValue = 1, value, ...genericInputProps } = props
  return (
    <div>
      <input
        id={id}
        className={styles.ratingScaleRange}
        type="range"
        min="1"
        max="10"
        step={1}
        defaultValue={defaultValue}
        value={value}
        aria-valuenow={value}
        aria-valuemin={1}
        aria-valuemax={10}
        {...genericInputProps}
      />
    </div>
  )
}

export default InputRange
