import React, { useId } from "react"
import classnames from "classnames"
import { Label } from "~components/Label"
import { Radio, RadioProps } from "../Radio/Radio"
import styles from "./RadioField.module.scss"

export type RadioFieldProps = Omit<RadioProps, "id"> & {
  id?: string
  labelText: string | React.ReactNode
  selectedStatus?: boolean
  disabled?: boolean
  reversed?: boolean
  "data-testid"?: string
}

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082092822/Radio+Field Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-radio-controls-radio-field--docs Storybook}
 */
export const RadioField = ({
  id: propsId,
  labelText,
  selectedStatus = false,
  disabled = false,
  reversed = false,
  classNameOverride,
  "data-testid": dataTestId,
  ...restProps
}: RadioFieldProps): JSX.Element => {
  const id = propsId ?? useId()
  // @todo: Move restProps to the wrapping div?
  return (
    <div
      data-testid={dataTestId}
      className={classnames(
        styles.container,
        classNameOverride,
        selectedStatus && styles.selected,
        reversed && styles.reversed
      )}
    >
      <Label
        data-testid={`${id}-field-label`}
        id={`${id}-field-label`}
        htmlFor={id}
        labelText={labelText}
        labelType="radio"
        disabled={disabled}
        reversed={reversed}
      >
        <Radio
          data-testid={`${id}-radio-input`}
          id={id}
          disabled={disabled}
          reversed={reversed}
          selectedStatus={selectedStatus}
          {...restProps}
        />
      </Label>
    </div>
  )
}

RadioField.displayName = "RadioField"
