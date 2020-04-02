import classnames from "classnames"
import React from "react"
const styles = require("./styles.scss")

type Props = {
  id: string
  automationId?: string
  rows?: number
  value?: string
  placeholder?: string
  name?: string
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => any
}

const TextArea = (props: Props) => {
  const {
    id,
    value,
    placeholder,
    name,
    rows = 3,
    onChange,
    automationId,
  } = props

  return (
    <textarea
      id={id}
      className={classnames(styles.textarea, styles.default)}
      placeholder={placeholder}
      name={name}
      rows={rows}
      onChange={onChange}
      data-automation-id={automationId}
    >
      {value}
    </textarea>
  )
}

export default TextArea
