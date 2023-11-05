import React, {
  TextareaHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react"
import classnames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./TextArea.module.scss"

export type TextAreaProps = {
  textAreaRef?: React.RefObject<HTMLTextAreaElement>
  status?: "default" | "error" | "caution"
  autogrow?: boolean
  reversed?: boolean
} & OverrideClassName<TextareaHTMLAttributes<HTMLTextAreaElement>>

export const TextArea = ({
  textAreaRef: propsTextAreaRef,
  status = "default",
  autogrow = false,
  reversed = false,
  rows = 3,
  defaultValue,
  value,
  disabled,
  onChange: propsOnChange,
  ...restProps
}: TextAreaProps): JSX.Element => {
  const [textAreaHeight, setTextAreaHeight] = useState<string>("auto")
  const [parentHeight, setParentHeight] = useState<string>("auto")
  const [internalValue, setInternalValue] = useState<
    string | number | readonly string[] | undefined
  >(autogrow ? defaultValue : undefined)
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
    : (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setTextAreaHeight("auto")
        // ^ this is required to avoid the textarea height from building up indefinitely
        // see https://medium.com/@lucasalgus/creating-a-custom-auto-resize-textarea-component-for-your-react-web-application-6959c0ad68bc#2dee

        setInternalValue(event.target.value)
        if (propsOnChange) {
          propsOnChange(event)
        }
      }

  const getWrapperStyle = (): { minHeight: string } | undefined =>
    autogrow ? { minHeight: parentHeight } : undefined

  const getTextAreaStyle = (): { height: string } | undefined =>
    autogrow ? { height: textAreaHeight } : undefined

  const controlledValue = value || internalValue

  return (
    <div className={styles.wrapper} style={getWrapperStyle()}>
      <textarea
        className={classnames(
          styles.textarea,
          styles[status],
          reversed ? styles.reversed : styles.default,
          disabled && styles.disabled
        )}
        rows={rows}
        onChange={onChange || propsOnChange}
        value={controlledValue}
        defaultValue={controlledValue ? undefined : defaultValue}
        // ^ React throws a warning if you specify both a value and a defaultValue
        ref={textAreaRef}
        style={getTextAreaStyle()}
        disabled={disabled}
        {...restProps}
      />

      {/* Textareas aren't able to have pseudo elements like ::after on them,
          so we have to create an element ourselves for the focus ring */}
      <div className={styles.focusRing} />
    </div>
  )
}

TextArea.displayName = "TextArea"
