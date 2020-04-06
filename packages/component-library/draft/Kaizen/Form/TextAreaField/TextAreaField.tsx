import {
  FieldGroup,
  FieldMessage,
  InputStatus,
  Label,
  TextArea,
} from "@kaizen/component-library/draft"
import React from "react"

type Props = {
  id: string
  labelText: string | React.ReactNode
  rows?: number
  placeholder?: string
  name?: string
  value?: string
  validationMessage?: string
  status?: InputStatus
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => any
}

const TextAreaField: React.FunctionComponent<Props> = props => {
  const {
    id,
    labelText,
    value,
    validationMessage,
    status,
    placeholder,
    onChange,
    rows,
  } = props

  return (
    <FieldGroup id={`${id}-field-group`} automationId={`${id}-field-group`}>
      <Label
        id={`${id}-field-label`}
        automationId={`${id}-field-label`}
        htmlFor={`${id}-field-textarea`}
        labelText={labelText}
      />
      <TextArea
        id={`${id}-field-textarea`}
        automationId={`${id}-field-textarea`}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        rows={rows}
      />
      {validationMessage && (
        <FieldMessage
          id={`${id}-field-message`}
          automationId={`${id}-field-validation-message`}
          message={validationMessage}
          status={status}
        />
      )}
    </FieldGroup>
  )
}

export default TextAreaField
