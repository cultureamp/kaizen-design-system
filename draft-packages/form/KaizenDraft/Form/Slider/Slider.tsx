import React, { InputHTMLAttributes, ReactNode } from "react"
import { Paragraph, Box } from "@kaizen/component-library"
import classnames from "classnames"
import { FieldGroup, Label, InputRange } from ".."
import styles from "./styles.scss"

export interface SliderFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "className"> {
  id: string
  value?: number
  min?: number
  max?: number
  minLabel: ReactNode
  maxLabel: ReactNode
  labelText: ReactNode
  description?: ReactNode
  labelPosition?: "inline" | "block"
  disabledLabel?: string
  classNameAndIHaveSpokenToDST?: string
  variant?: "default" | "prominent"
}

const Slider: React.FunctionComponent<SliderFieldProps> = props => {
  const {
    id,
    labelText,
    description,
    labelPosition = "inline",
    variant = "default",
    ...restProps
  } = props
  const descriptionId = `${id}-description`

  return (
    <FieldGroup inline={true}>
      <div
        className={classnames(styles.wrapper, {
          [styles.labelInline]: labelPosition === "inline",
        })}
      >
        <div className={styles.labelWrapper}>
          <Box mb={0.25}>
            <Label htmlFor={id} labelText={labelText} variant={variant} />
          </Box>
          {description && (
            <Paragraph variant="small" id={descriptionId}>
              {description}
            </Paragraph>
          )}
        </div>
        <div className={styles.inputWrapper}>
          <InputRange id={id} aria-describedby={descriptionId} {...restProps} />
        </div>
      </div>
    </FieldGroup>
  )
}

export default Slider
