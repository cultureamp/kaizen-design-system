import React from "react"
import classnames from "classnames"
import {
  FieldGroup,
  FieldGroupProps,
  FieldMessage,
  FieldMessageStatus,
} from "@kaizen/draft-form"
import { DateInput, DateInputProps } from "../../../_subcomponents/DateInput"
import { formatInputDescription } from "../../../utils/formatInputDescription"
import { isRefObject } from "../../../utils/isRefObject"
import styles from "./DateRangeInputField.module.scss"

export interface DateRangeInputFieldProps extends FieldGroupProps {
  id: string
  legend: string

  inputRangeStartProps: Omit<DateInputProps, "id">
  inputRangeEndProps: Omit<DateInputProps, "id">

  locale: Locale
  /**
   * A description that provides context for the text field
   */
  description?: React.ReactNode
  isReversed?: boolean
  /**
   * Updates the styling of the validation FieldMessage
   */
  status?: FieldMessageStatus
  /**
   * A descriptive message for `status` states
   */
  validationMessage?: React.ReactNode
  disabled?: boolean
}

export type DateRangeInputFieldRefs = {
  inputRangeStartRef?: React.RefObject<HTMLInputElement>
  inputRangeEndRef?: React.RefObject<HTMLInputElement>
}

export const DateRangeInputField = React.forwardRef<
  DateRangeInputFieldRefs,
  DateRangeInputFieldProps
>(
  (
    {
      id,
      legend,
      inputRangeStartProps,
      inputRangeEndProps,
      description,
      disabled,
      isReversed = false,
      status,
      validationMessage,
      locale,
      ...fieldGroupProps
    },
    ref
  ) => {
    const customRefObject = isRefObject(ref) ? ref.current : null
    const inputRangeStartRef = customRefObject?.inputRangeStartRef
    const inputRangeEndRef = customRefObject?.inputRangeEndRef

    const descriptionId = `${id}--field-message`
    const errorMessageId = `${id}--error-message`

    const shouldShowValidationMessage = !disabled && validationMessage

    const inputDescribedBy = shouldShowValidationMessage
      ? `${errorMessageId} ${descriptionId}`
      : descriptionId

    return (
      <FieldGroup {...fieldGroupProps}>
        <fieldset className={styles.dateRangeInputContainer}>
          <legend className={styles.legend}>{legend}</legend>
          <DateInput
            ref={inputRangeStartRef}
            id={`${id}--from`}
            aria-describedby={inputDescribedBy}
            autoComplete="off"
            disabled={disabled}
            status={status}
            {...inputRangeStartProps}
            classNameOverride={classnames(
              styles.inputRangeStart,
              inputRangeStartProps.classNameOverride
            )}
          />
          <DateInput
            ref={inputRangeEndRef}
            id={`${id}--to`}
            aria-describedby={inputDescribedBy}
            autoComplete="off"
            disabled={disabled}
            status={status}
            {...inputRangeEndProps}
            classNameOverride={classnames(
              styles.inputRangeEnd,
              inputRangeEndProps.classNameOverride
            )}
          />
        </fieldset>

        {shouldShowValidationMessage && (
          <FieldMessage
            id={errorMessageId}
            message={validationMessage}
            status={status}
            reversed={isReversed}
          />
        )}
        <FieldMessage
          id={descriptionId}
          message={formatInputDescription(description, locale)}
          reversed={isReversed}
          classNameOverride={disabled ? styles.disabled : undefined}
        />
      </FieldGroup>
    )
  }
)
DateRangeInputField.displayName = "DateRangeInputField"
