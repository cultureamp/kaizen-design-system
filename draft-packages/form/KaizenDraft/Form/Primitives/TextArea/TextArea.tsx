import classnames from "classnames"
import React, {
  useState,
  useEffect,
  useRef,
  TextareaHTMLAttributes,
} from "react"
import { InputStatus } from ".."
import styles from "./styles.scss"

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  automationId?: string
  reversed?: boolean
  status?: InputStatus
  autogrow?: boolean
  textAreaRef?: React.RefObject<HTMLTextAreaElement>
}

const TextArea = (props: TextAreaProps) => {
  const {
    value,
    defaultValue,
    reversed,
    rows = 3,
    status = "default",
    autogrow,
    automationId,
    onChange: propsOnChange,
    textAreaRef: propsTextAreaRef,
    ...genericTextAreaProps
  } = props

  const [textAreaHeight, setTextAreaHeight] = useState("auto")
  const [parentHeight, setParentHeight] = useState("auto")
  const [internalValue, setInternalValue] = useState(
    autogrow ? defaultValue : undefined
  )
  // ^ holds an internal state of the value so that autogrow can still work with uncontrolled textareas
  // essentially forces the textarea into an (interally) controlled mode if autogrow is true
  const textAreaRef = propsTextAreaRef || useRef(null)

  useEffect(() => {
    if (!autogrow) return
    const scrollHeight = textAreaRef.current!.scrollHeight
    if (scrollHeight < 1) return
    const borderWidth = textAreaRef.current
      ? parseInt(getComputedStyle(textAreaRef.current).borderTopWidth, 10)
      : 0
    const newHeight = scrollHeight + borderWidth * 2
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
        if (propsOnChange) {
          propsOnChange(event)
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

  const controlledValue = value || internalValue

  return (
    <div className={styles.wrapper} style={getWrapperStyle()}>
      <textarea
        className={classnames(styles.textarea, {
          [styles.default]: !reversed,
          [styles.reversed]: reversed,
          [styles.error]: status === "error",
        })}
        rows={rows}
        onChange={onChange || propsOnChange}
        data-automation-id={automationId}
        value={controlledValue}
        defaultValue={controlledValue ? undefined : defaultValue}
        // ^ React throws a warning if you specify both a value and a defaultValue
        ref={textAreaRef}
        style={getTextAreaStyle()}
        {...genericTextAreaProps}
      />

      {/* Textareas aren't able to have pseudo elements like ::after on them,
          so we have to create an element ourselves for the focus ring */}
      <div className={styles.focusRing} />
    </div>
  )
}

export default TextArea
