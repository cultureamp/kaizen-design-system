import React from "react"
import { DateInput, DateInputProps } from "@kaizen/date-picker"
import { FieldMessage } from "@kaizen/draft-form"
import {
  DateInputDescription,
  DateInputDescriptionProps,
} from "~components/FilterDateRangePicker/subcomponents/DateInputDescription"

import { ValidationMessage } from "../../types"
import styles from "./DateInputField.module.scss"

export interface DateInputFieldProps extends Omit<DateInputProps, "id"> {
  id: string
  locale: Locale
  /**
   * A description that provides context for the text field
   */
  description?: DateInputDescriptionProps["description"]
  isReversed?: boolean
  validationMessage?: ValidationMessage
  disabled?: boolean
}

export const DateInputField = React.forwardRef<
  HTMLInputElement,
  DateInputFieldProps
>(
  (
    {
      id,
      labelText,
      description,
      disabled,
      isReversed = false,
      validationMessage,
      locale,
      classNameOverride,
      ...restProps
    },
    ref
  ) => {
    const descriptionId = `${id}--field-message`

    const errorMessageId = validationMessage
      ? `${id}--date-error-message`
      : undefined

    const inputDescribedBy = errorMessageId
      ? `${errorMessageId} ${descriptionId}`
      : descriptionId

    const dateIsInvalid = errorMessageId !== undefined

    return (
      <div>
        <DateInput
          ref={ref}
          id={id}
          labelText={labelText}
          aria-describedby={inputDescribedBy}
          aria-errormessage={errorMessageId}
          aria-invalid={dateIsInvalid}
          autoComplete="off"
          disabled={disabled}
          status={validationMessage?.status}
          classNameOverride={classNameOverride}
          {...restProps}
        />

        {validationMessage && (
          <FieldMessage
            id={errorMessageId}
            message={validationMessage?.message}
            status={validationMessage?.status}
            reversed={isReversed}
          />
        )}

        <FieldMessage
          id={descriptionId}
          message={
            <DateInputDescription description={description} locale={locale} />
          }
          reversed={isReversed}
          classNameOverride={disabled ? styles.disabled : undefined}
        />
      </div>
    )
  }
)
DateInputField.displayName = "DateInputField"
