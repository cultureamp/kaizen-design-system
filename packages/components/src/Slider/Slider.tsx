import React, { ReactNode, useId } from "react"
import classnames from "classnames"
import { InputRange, InputRangeProps } from "~components/InputRange"
import { Label } from "~components/Label"
import { Text } from "~components/Text"
import styles from "./Slider.module.scss"

export type SliderFieldProps = {
  id?: string
  labelText: ReactNode
  description?: ReactNode
  labelPosition?: "inline" | "block"
  variant?: "default" | "prominent"
  disabled?: boolean
  readOnlyMessage?: ReactNode
} & Omit<InputRangeProps, "id">

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3081896335/Slider Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-slider--docs Storybook}
 */
export const Slider = ({
  id: propsId,
  labelText,
  description,
  labelPosition = "inline",
  variant = "default",
  disabled,
  readOnlyMessage,
  ...restProps
}: SliderFieldProps): JSX.Element => {
  const id = propsId ?? useId()
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
          <div className="mb-4">
            <Label
              htmlFor={id}
              labelText={labelText}
              variant={variant}
              disabled={disabled}
            />
          </div>
          {description && (
            <Text
              variant="small"
              id={descriptionId}
              classNameOverride={
                disabled ? styles.descriptionDisabled : undefined
              }
            >
              {description}
            </Text>
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
