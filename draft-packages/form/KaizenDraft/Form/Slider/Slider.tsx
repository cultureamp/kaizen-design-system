import React, { InputHTMLAttributes, ReactNode } from "react"
import { Paragraph, Box } from "@kaizen/component-library"
import classnames from "classnames"
import { FieldGroup, Label, InputRange } from ".."
import styles from "./styles.scss"

export interface SliderFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "className"> {
  labelText: ReactNode
  labelDescription?: ReactNode
  value?: number
  id: string
  labelLow?: ReactNode
  labelHigh?: ReactNode
  labelPosition?: "inline" | "block"
  disabledLabel?: string
  classNameAndIHaveSpokenToDST?: string
}

const Slider: React.FunctionComponent<SliderFieldProps> = props => {
  const {
    labelText,
    labelDescription,
    labelLow,
    labelHigh,
    labelPosition = "inline",
    classNameAndIHaveSpokenToDST,
    disabledLabel,
    ...genericInputProps
  } = props

  return (
    <FieldGroup inline={true}>
      <div
        className={classnames(styles.wrapper, {
          [styles.labelInline]: labelPosition === "inline",
        })}
      >
        <div className={styles.labelWrapper}>
          <Box mb={0.25}>
            <Label htmlFor={genericInputProps.id} labelText={labelText} />
          </Box>
          {labelDescription && (
            <Paragraph variant="small" id={`${genericInputProps.id}-help-text`}>
              {labelDescription}
            </Paragraph>
          )}
        </div>
        <div className={styles.inputWrapper}>
          <InputRange
            labelLow={labelLow}
            labelHigh={labelHigh}
            classNameAndIHaveSpokenToDST={classNameAndIHaveSpokenToDST}
            aria-describedby={`${genericInputProps.id}-help-text`}
            disabledLabel={disabledLabel}
            {...genericInputProps}
          />
        </div>
      </div>
    </FieldGroup>
  )
}

export default Slider
