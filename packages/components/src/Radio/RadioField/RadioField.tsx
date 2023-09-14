import React, { useState } from "react"
import classnames from "classnames"
import { v4 } from "uuid"
import { Label } from "~components/Label"
import { Radio, RadioProps } from "../Radio/Radio"
import styles from "./RadioField.module.scss"

export type RadioFieldProps = Omit<RadioProps, "id"> & {
  id?: string
  labelText: string | React.ReactNode
  selectedStatus?: boolean
  inline?: boolean
  disabled?: boolean
  reversed?: boolean
  "data-testId"?: string
}

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082092822/Radio+Field Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-radio-controls-radio-field--docs Storybook}
 */
export const RadioField = ({
  id: propsId,
  labelText,
  selectedStatus = false,
  inline = false,
  disabled = false,
  reversed = false,
  classNameOverride,
  "data-testId": dataTestId,
  ...restProps
}: RadioFieldProps): JSX.Element => {
  const [id] = useState<string>(propsId || v4())
  // @todo: Move restProps to the wrapping div?
  return (
    <div
      data-testId={dataTestId}
      className={classnames(
        styles.container,
        classNameOverride,
        selectedStatus && styles.selected,
        inline && styles.inline,
        reversed && styles.reversed
      )}
    >
      <Label
        data-testId={`${id}-field-label`}
        id={`${id}-field-label`}
        htmlFor={id}
        labelText={labelText}
        labelType="radio"
        disabled={disabled}
        reversed={reversed}
      >
        <Radio
          data-testId={`${id}-radio-input`}
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
