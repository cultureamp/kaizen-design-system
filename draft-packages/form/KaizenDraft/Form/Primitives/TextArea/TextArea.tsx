import { InputStatus } from "@kaizen/draft-form"
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
  status?: InputStatus
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
    status = "default",
    onChange,
    onBlur,
    onFocus,
    automationId,
  } = props

  return (
    <div className={styles.wrapper}>
      <textarea
        id={id}
        className={classnames(styles.textarea, {
          [styles.default]: !reversed,
          [styles.reversed]: reversed,
          [styles.error]: status === "error",
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

      {/* Textareas aren't able to have pseudo elements like ::after on them,
          so we have to create an element ourselves for the focus ring */}
      <div className={styles.focusRing} />
    </div>
  )
}

export default TextArea
