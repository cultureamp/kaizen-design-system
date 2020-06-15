import classnames from "classnames"
import React from "react"
const styles = require("./styles.scss")

type Props = {
  id: string
  automationId?: string
  rows?: number
  value?: string
  defaultValue?: string
  placeholder?: string
  name?: string
  reversed?: boolean
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => any
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => any
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => any
}

const TextArea = (props: Props) => {
  const {
    id,
    value,
    defaultValue,
    placeholder,
    name,
    reversed,
    rows = 3,
    onChange,
    onBlur,
    onFocus,
    automationId,
  } = props

  return (
    <textarea
      id={id}
      className={classnames(styles.textarea, styles.default, {
        [styles.reversed]: reversed,
      })}
      placeholder={placeholder}
      name={name}
      rows={rows}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      data-automation-id={automationId}
      value={value}
      defaultValue={defaultValue}
    />
  )
}

export default TextArea
