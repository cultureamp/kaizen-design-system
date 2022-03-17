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
  readOnly?: boolean
  readOnlyMessage?: ReactNode
  classNameOverride?: string
  variant?: "default" | "prominent"
  ref?: React.RefObject<HTMLInputElement>
}

const Slider: React.FunctionComponent<SliderFieldProps> = props => {
  const {
    id,
    labelText,
    description,
    labelPosition = "inline",
    variant = "default",
    disabled,
    readOnlyMessage,
    ref,
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
            <Label
              htmlFor={id}
              labelText={labelText}
              variant={variant}
              disabled={disabled}
            />
          </Box>
          {description && (
            <Paragraph
              variant="small"
              id={descriptionId}
              classNameOverride={
                disabled ? styles.descriptionDisabled : undefined
              }
            >
              {description}
            </Paragraph>
          )}
        </div>
        <div className={styles.inputWrapper}>
          <InputRange
            ref={ref}
            id={id}
            aria-describedby={descriptionId}
            disabled={disabled}
            {...restProps}
          />
          {readOnlyMessage && (
            <div className={styles.readOnlyMessage}>{readOnlyMessage}</div>
          )}
        </div>
      </div>
    </FieldGroup>
  )
}

export default Slider
