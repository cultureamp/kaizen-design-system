import React from "react"
import { DateInput, DateInputProps } from "@kaizen/date-picker"
import { FieldMessage } from "@kaizen/draft-form"
import {
  DateInputDescription,
  DateInputDescriptionProps,
} from "~components/FilterDateRangePicker/subcomponents/DateInputDescription"
import { isRefObject } from "~utils/isRefObject"

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

type InputRef = React.RefObject<HTMLInputElement>

export const DateInputField = React.forwardRef<InputRef, DateInputFieldProps>(
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
    const inputDateRef = isRefObject(ref) ? ref.current : null
    const descriptionId = `${id}--field-message`

    // Date Start aria labels
    const dateErrorMessageId = validationMessage
      ? `${id}--date-error-message`
      : undefined

    const dateStartInputDescribedBy = dateErrorMessageId
      ? `${dateErrorMessageId} ${descriptionId}`
      : descriptionId

    const dateIsInvalid = dateErrorMessageId !== undefined

    return (
      <div className="mb-16">
        <DateInput
          ref={inputDateRef}
          id={id}
          labelText={labelText}
          aria-describedby={dateStartInputDescribedBy}
          aria-errormessage={dateErrorMessageId}
          aria-invalid={dateIsInvalid}
          autoComplete="off"
          disabled={disabled}
          status={validationMessage?.status}
          classNameOverride={classNameOverride}
          {...restProps}
        />

        {validationMessage && (
          <FieldMessage
            id={dateErrorMessageId}
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
