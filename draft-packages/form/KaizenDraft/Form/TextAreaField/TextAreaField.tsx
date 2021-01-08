import React, { TextareaHTMLAttributes } from "react"
import { FieldGroup, FieldMessage, InputStatus, Label, TextArea } from ".."

export interface TextAreaFieldProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  labelText: string | React.ReactNode
  inline?: boolean
  reversed?: boolean
  validationMessage?: string
  status?: InputStatus
  autogrow?: boolean
  description?: React.ReactNode
  textAreaRef?: React.RefObject<HTMLTextAreaElement>
  variant?: "default" | "prominent"
}

const TextAreaField: React.FunctionComponent<TextAreaFieldProps> = props => {
  const {
    id,
    labelText,
    value,
    defaultValue,
    validationMessage,
    status,
    autogrow,
    description,
    inline,
    reversed,
    variant,
    maxLength,
    placeholder,
    textAreaRef,
    onChange,
    onBlur,
    onFocus,
    rows,
    ...genericTextAreaProps
  } = props

  const renderDescription = (position: "top" | "bottom") => {
    if (!description) return null
    return (
      <FieldMessage
        id={`${id}-field-message`}
        automationId={`${id}-field-description`}
        message={description}
        reversed={reversed}
        position={position}
      />
    )
  }

  return (
    <FieldGroup
      id={`${id}-field-group`}
      inline={inline}
      automationId={`${id}-field-group`}
    >
      <Label
        id={`${id}-field-label`}
        automationId={`${id}-field-label`}
        htmlFor={`${id}-field-textarea`}
        labelText={labelText}
        reversed={reversed}
        variant={variant}
      />
      {variant === "prominent" && renderDescription("top")}
      <TextArea
        id={`${id}-field-textarea`}
        automationId={`${id}-field-textarea`}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        value={value}
        defaultValue={defaultValue}
        rows={rows}
        reversed={reversed}
        status={status}
        autogrow={autogrow}
        textAreaRef={textAreaRef}
        maxLength={maxLength}
        {...genericTextAreaProps}
      />
      {validationMessage && (
        <FieldMessage
          id={`${id}-field-message`}
          automationId={`${id}-field-validation-message`}
          message={validationMessage}
          status={status}
          reversed={reversed}
        />
      )}
      {variant === "default" && renderDescription("bottom")}
    </FieldGroup>
  )
}

export default TextAreaField
