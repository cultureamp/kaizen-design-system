import React, { ReactNode, useState } from "react"
import classnames from "classnames"
import { v4 } from "uuid"
import { Box } from "@kaizen/component-library"
import { Paragraph } from "@kaizen/typography"
import { FieldGroup, Label, InputRange, InputRangeProps } from "../Primitives"
import styles from "./Slider.module.scss"

export interface SliderFieldProps extends Omit<InputRangeProps, "id"> {
  id?: string
  labelText: ReactNode
  description?: ReactNode
  labelPosition?: "inline" | "block"
  variant?: "default" | "prominent"
  disabled?: boolean
  readOnlyMessage?: ReactNode
}

/**
 * {@link https://cultureamp.design/components/slider/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-form-slider--controlled Storybook}
 */
export const Slider = (props: SliderFieldProps): JSX.Element => {
  const {
    id: propsId,
    labelText,
    description,
    labelPosition = "inline",
    variant = "default",
    disabled,
    readOnlyMessage,
    ...restProps
  } = props
  const [id] = useState<string>(propsId || v4())
  const descriptionId = `${id}-description`

  return (
    <FieldGroup inline>
      <div
        className={classnames(
          styles.wrapper,
          labelPosition === "inline" && styles.labelInline
        )}
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

Slider.displayName = "Slider"
