import React, { InputHTMLAttributes, ReactNode } from "react"
import { Paragraph, Box } from "@kaizen/component-library"
import { FieldGroup, Label, InputRange } from ".."
import styles from "./styles.scss"

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
      <div className={styles.wrapper}>
        <div className={styles.labelWrapper}>
          <Box mb={0.25}>
            <Label htmlFor={genericInputProps.id} labelText={labelText} />
          </Box>
          {labelDescription && (
            <Paragraph variant="small">{labelDescription}</Paragraph>
          )}
        </div>
        <div className={styles.inputWrapper}>
          <InputRange
            labelLow={labelLow}
            labelHigh={labelHigh}
            {...genericInputProps}
          />
        </div>
      </div>
    </FieldGroup>
  )
}

export default Slider
