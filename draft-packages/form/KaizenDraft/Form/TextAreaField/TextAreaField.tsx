import {
  FieldGroup,
  FieldMessage,
  InputStatus,
  Label,
  TextArea,
} from "@kaizen/draft-form"
import React from "react"

type Props = {
  id: string
  labelText: string | React.ReactNode
  rows?: number
  placeholder?: string
  name?: string
  value?: string
  inline?: boolean
  reversed?: boolean
  defaultValue?: string
  validationMessage?: string
  status?: InputStatus
  description?: string
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => any
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => any
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => any
}

const TextAreaField: React.FunctionComponent<Props> = props => {
  const {
    id,
    labelText,
    value,
    defaultValue,
    validationMessage,
    status,
    description,
    inline,
    reversed,
    placeholder,
    onChange,
    onBlur,
    onFocus,
    rows,
  } = props

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
      />
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
      {description && (
        <FieldMessage
          id={`${id}-field-message`}
          automationId={`${id}-field-description`}
          message={description}
          reversed={reversed}
        />
      )}
    </FieldGroup>
  )
}

export default TextAreaField
