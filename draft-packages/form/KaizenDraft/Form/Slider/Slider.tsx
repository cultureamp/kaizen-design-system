import React, { InputHTMLAttributes } from "react"
import { FieldGroup, Label, InputRange } from ".."
import { Paragraph } from "@kaizen/component-library"

export interface SliderFieldProps
  extends InputHTMLAttributes<HTMLInputElement> {
  labelText: React.ReactNode
  labelDescription?: React.ReactNode
  value?: number
}

const Slider: React.FunctionComponent<SliderFieldProps> = props => {
  const { id, labelText, labelDescription, value, ...genericInputProps } = props

  return (
    <FieldGroup id={`${id}-field-group`} inline={true}>
      <Label
        id={`${id}-field-label`}
        htmlFor={`${id}-field-textarea`}
        labelText={labelText}
      />
      {labelDescription && (
        <Paragraph variant="small">{labelDescription}</Paragraph>
      )}
      <InputRange value={value} {...genericInputProps} />
    </FieldGroup>
  )
}

export default Slider
