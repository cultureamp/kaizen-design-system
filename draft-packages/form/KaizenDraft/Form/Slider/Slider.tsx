import React, { InputHTMLAttributes } from "react"
import { Paragraph } from "@kaizen/component-library"
import { FieldGroup, Label, InputRange } from ".."

export interface SliderFieldProps
  extends InputHTMLAttributes<HTMLInputElement> {
  labelText: React.ReactNode
  labelDescription?: React.ReactNode
  value?: number
  id: string
}

const Slider: React.FunctionComponent<SliderFieldProps> = props => {
  const { labelText, labelDescription, value, ...genericInputProps } = props

  return (
    <FieldGroup inline={true}>
      <Label htmlFor={genericInputProps.id} labelText={labelText} />
      {labelDescription && (
        <Paragraph variant="small">{labelDescription}</Paragraph>
      )}
      <InputRange {...genericInputProps} />
    </FieldGroup>
  )
}

export default Slider
