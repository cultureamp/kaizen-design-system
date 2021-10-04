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
  minLabel?: ReactNode
  maxLabel?: ReactNode
  labelText: ReactNode
  labelDescription?: ReactNode
  labelPosition?: "inline" | "block"
  disabledLabel?: string
  classNameAndIHaveSpokenToDST?: string
}

const Slider: React.FunctionComponent<SliderFieldProps> = props => {
  const {
    id,
    labelText,
    labelDescription,
    labelPosition = "inline",
    ...restProps
  } = props
  const helpTextId = `${id}-help-text`

  return (
    <FieldGroup inline={true}>
      <div
        className={classnames(styles.wrapper, {
          [styles.labelInline]: labelPosition === "inline",
        })}
      >
        <div className={styles.labelWrapper}>
          <Box mb={0.25}>
            <Label htmlFor={id} labelText={labelText} />
          </Box>
          {labelDescription && (
            <Paragraph variant="small" id={helpTextId}>
              {labelDescription}
            </Paragraph>
          )}
        </div>
        <div className={styles.inputWrapper}>
          <InputRange id={id} aria-describedby={helpTextId} {...restProps} />
        </div>
      </div>
    </FieldGroup>
  )
}

export default Slider
