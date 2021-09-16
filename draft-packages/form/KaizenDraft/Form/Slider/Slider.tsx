import React, { InputHTMLAttributes, ReactNode } from "react"
import { Paragraph } from "@kaizen/component-library"
import { FieldGroup, Label, InputRange } from ".."

export interface SliderFieldProps
  extends InputHTMLAttributes<HTMLInputElement> {
  labelText: ReactNode
  labelDescription?: ReactNode
  value?: number
  id: string
  labelLow?: ReactNode
  labelHigh?: ReactNode
}

const Slider: React.FunctionComponent<SliderFieldProps> = props => {
  const {
    labelText,
    labelDescription,
    value,
    labelLow,
    labelHigh,
    ...genericInputProps
  } = props

  return (
    <FieldGroup inline={true}>
      <Label htmlFor={genericInputProps.id} labelText={labelText} />
      {labelDescription && (
        <Paragraph variant="small">{labelDescription}</Paragraph>
      )}
      <InputRange
        labelLow={labelLow}
        labelHigh={labelHigh}
        {...genericInputProps}
      />
    </FieldGroup>
  )
}

export default Slider
