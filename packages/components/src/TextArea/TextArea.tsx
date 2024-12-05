import React, { TextareaHTMLAttributes, useRef, useState } from 'react'
import classnames from 'classnames'
import { OverrideClassName } from '~components/types/OverrideClassName'
import styles from './TextArea.module.css'

export type TextAreaProps = {
  textAreaRef?: React.RefObject<HTMLTextAreaElement>
  status?: 'default' | 'error' | 'caution'
  /**
   * Grows the input height as more content is added
   * Replace with CSS field-sizing once it's supported by all major browsers
   */
  autogrow?: boolean
  reversed?: boolean
  /**
   * @deprecated Use of placeholder text goes against our a11y standards.
   * Use the `labelText` prop to provide a concise name, and the `description` prop for any help text.
   */
  placeholder?: string
} & OverrideClassName<TextareaHTMLAttributes<HTMLTextAreaElement>>

export const TextArea = ({
  textAreaRef: propsTextAreaRef,
  status = 'default',
  autogrow = false,
  reversed = false,
  rows = 3,
  defaultValue,
  value,
  disabled,
  onChange: propsOnChange,
  ...restProps
}: TextAreaProps): JSX.Element => {
  const [internalValue, setInternalValue] = useState<
    string | number | readonly string[] | undefined
  >(value ?? defaultValue ?? '')
  // ^holds an internal state of the value, used for the autogrow feature if uncontrolled (no `value` provided)

  const fallbackRef = useRef(null)
  const textAreaRef = propsTextAreaRef ?? fallbackRef

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    propsOnChange?.(event)
    setInternalValue(event.target.value)
  }

  return (
    <div
      className={classnames(styles.wrapper, {
        [styles.wrapperAutogrow]: autogrow,
      })}
      data-value={value ?? internalValue}
    >
      <textarea
        className={classnames(
          styles.textarea,
          styles[status],
          reversed ? styles.reversed : styles.default,
          {
            [styles.disabled]: disabled,
            [styles.textareaAutogrow]: autogrow,
          },
        )}
        rows={rows}
        onChange={onChange}
        value={value}
        defaultValue={value ? undefined : defaultValue}
        // ^ React throws a warning if you specify both a value and a defaultValue
        ref={textAreaRef}
        disabled={disabled}
        {...restProps}
      />
    </div>
  )
}

TextArea.displayName = 'TextArea'
