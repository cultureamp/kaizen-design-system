import { InputStatus } from "@kaizen/draft-form"
import classnames from "classnames"
import React, { useState, useEffect, useRef } from "react"
import styles from "./styles.scss"

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
  autogrow?: boolean
  textAreaRef?: React.RefObject<HTMLTextAreaElement>
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => any
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => any
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => any
}

const TextArea = (props: Props) => {
  const {
    id,
    defaultValue,
    placeholder,
    name,
    reversed,
    rows = 3,
    status = "default",
    autogrow,
    onBlur,
    onFocus,
    automationId,
  } = props

  const [textAreaHeight, setTextAreaHeight] = useState("auto")
  const [parentHeight, setParentHeight] = useState("auto")
  const [internalValue, setInternalValue] = useState(
    autogrow ? defaultValue : undefined
  )
  // ^ holds an internal state of the value so that autogrow can still work with uncontrolled textareas
  const textAreaRef = props.textAreaRef || useRef(null)

  useEffect(() => {
    if (!autogrow) return
    const borderWidth = textAreaRef.current
      ? parseInt(getComputedStyle(textAreaRef.current).borderTopWidth, 10)
      : 0
    const newHeight = textAreaRef.current!.scrollHeight + borderWidth * 2
    setParentHeight(`${newHeight}px`)
    setTextAreaHeight(`${newHeight}px`)
  }, [internalValue])

  const onChange = !autogrow
    ? undefined
    : (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextAreaHeight("auto")
        // ^ this is required to avoid the textarea height from building up indefinitely
        // see https://medium.com/@lucasalgus/creating-a-custom-auto-resize-textarea-component-for-your-react-web-application-6959c0ad68bc#2dee

        setInternalValue(event.target.value)
        if (props.onChange) {
          props.onChange(event)
        }
      }

  const getWrapperStyle = () => {
    if (!autogrow) return undefined
    return {
      minHeight: parentHeight,
    }
  }

  const getTextAreaStyle = () => {
    if (!autogrow) return undefined
    return {
      height: textAreaHeight,
    }
  }

  return (
    <div className={styles.wrapper} style={getWrapperStyle()}>
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
        onChange={onChange || props.onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        data-automation-id={automationId}
        value={props.value || internalValue}
        defaultValue={defaultValue}
        ref={textAreaRef}
        style={getTextAreaStyle()}
      />

      {/* Textareas aren't able to have pseudo elements like ::after on them,
          so we have to create an element ourselves for the focus ring */}
      <div className={styles.focusRing} />
    </div>
  )
}

export default TextArea
