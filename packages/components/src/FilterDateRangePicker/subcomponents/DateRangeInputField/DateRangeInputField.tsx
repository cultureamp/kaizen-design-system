import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { VisuallyHidden } from "@kaizen/a11y"
import {
  DateInput,
  DateInputProps,
  DateInputDescription,
  DateInputDescriptionProps,
} from "~components/DateInput"
import { FieldMessage } from "~components/FieldMessage"
import { OverrideClassName } from "~types/OverrideClassName"
import { isRefObject } from "~utils/isRefObject"
import {
  DateRangeValidationMessage,
  DateRangeValidationMessageProps,
} from "../DateRangeValidationMessage"
import styles from "./DateRangeInputField.module.scss"

export type DateRangeInputFieldProps = {
  id: string
  legend: string
  inputStartDateProps: Omit<DateInputProps, "id">
  inputEndDateProps: Omit<DateInputProps, "id">
  locale: Locale
  /**
   * A description that provides context for the text field
   */
  description?: DateInputDescriptionProps["description"]
  isReversed?: boolean
  validationMessage?: DateRangeValidationMessageProps["validationMessage"]
  disabled?: boolean
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

export type DateRangeInputFieldRefs = {
  inputStartDateRef?: React.RefObject<HTMLInputElement>
  inputEndDateRef?: React.RefObject<HTMLInputElement>
}

export const DateRangeInputField = React.forwardRef<
  DateRangeInputFieldRefs,
  DateRangeInputFieldProps
>(
  (
    {
      id,
      legend,
      inputStartDateProps,
      inputEndDateProps,
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
    const customRefObject = isRefObject(ref) ? ref.current : null
    const inputStartDateRef = customRefObject?.inputStartDateRef
    const inputEndDateRef = customRefObject?.inputEndDateRef

    const descriptionId = `${id}--field-message`

    // Date Start aria labels
    const dateStartErrorMessageId = validationMessage?.dateStart
      ? `${id}--date-start-error-message`
      : undefined

    const dateStartInputDescribedBy = dateStartErrorMessageId
      ? `${dateStartErrorMessageId} ${descriptionId}`
      : descriptionId

    const dateStartIsInvalid = dateStartErrorMessageId !== undefined

    // Date End aria labels
    const dateEndErrorMessageId = validationMessage?.dateEnd
      ? `${id}--date-end-error-message`
      : undefined

    const dateEndInputDescribedBy = dateEndErrorMessageId
      ? `${dateEndErrorMessageId} ${descriptionId}`
      : descriptionId

    const dateEndIsInvalid = dateEndErrorMessageId !== undefined

    return (
      <div className={classNameOverride} {...restProps}>
        <fieldset className={styles.dateRangeInputContainer}>
          <legend>
            <VisuallyHidden>{legend}</VisuallyHidden>
          </legend>
          <DateInput
            ref={inputStartDateRef}
            id={`${id}--from`}
            aria-describedby={dateStartInputDescribedBy}
            aria-errormessage={dateStartErrorMessageId}
            aria-invalid={dateStartIsInvalid}
            autoComplete="off"
            disabled={disabled}
            status={validationMessage?.dateStart?.status}
            {...inputStartDateProps}
            classNameOverride={classnames(
              styles.inputStartDate,
              inputStartDateProps.classNameOverride
            )}
          />
          <DateInput
            ref={inputEndDateRef}
            id={`${id}--to`}
            aria-describedby={dateEndInputDescribedBy}
            aria-errormessage={dateEndErrorMessageId}
            aria-invalid={dateEndIsInvalid}
            autoComplete="off"
            disabled={disabled}
            status={validationMessage?.dateEnd?.status}
            {...inputEndDateProps}
            classNameOverride={classnames(
              styles.inputEndDate,
              inputEndDateProps.classNameOverride
            )}
          />
        </fieldset>

        {validationMessage && (
          <DateRangeValidationMessage
            validationMessage={validationMessage}
            isReversed={isReversed}
            dateStartId={dateStartErrorMessageId}
            dateEndId={dateEndErrorMessageId}
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

DateRangeInputField.displayName = "DateRangeInputField"
