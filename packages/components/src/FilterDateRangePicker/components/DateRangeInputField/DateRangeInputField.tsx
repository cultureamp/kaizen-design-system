import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { VisuallyHidden } from "@kaizen/a11y"
import {
  DateInput,
  DateInputProps,
} from "@kaizen/date-picker/src/_subcomponents/DateInput"
import {
  DateInputDescription,
  DateInputDescriptionProps,
} from "@kaizen/date-picker/src/_subcomponents/DateInputDescription"
import { FieldMessage } from "@kaizen/draft-form"
import { OverrideClassName } from "~types/OverrideClassName"
import { isRefObject } from "~utils/isRefObject"
import {
  DateRangeValidationMessage,
  DateRangeValidationMessageProps,
} from "../DateRangeValidationMessage"
import styles from "./DateRangeInputField.module.scss"

export interface DateRangeInputFieldProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  id: string
  legend: string

  inputRangeStartProps: Omit<DateInputProps, "id">
  inputRangeEndProps: Omit<DateInputProps, "id">

  locale: Locale
  /**
   * A description that provides context for the text field
   */
  description?: DateInputDescriptionProps["description"]
  isReversed?: boolean
  validationMessage?: DateRangeValidationMessageProps["validationMessage"]
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
      validationMessage,
      locale,
      classNameOverride,
      ...restProps
    },
    ref
  ) => {
    const customRefObject = isRefObject(ref) ? ref.current : null
    const inputRangeStartRef = customRefObject?.inputRangeStartRef
    const inputRangeEndRef = customRefObject?.inputRangeEndRef

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
            ref={inputRangeStartRef}
            id={`${id}--from`}
            aria-describedby={dateStartInputDescribedBy}
            aria-errormessage={dateStartErrorMessageId}
            aria-invalid={dateStartIsInvalid}
            autoComplete="off"
            disabled={disabled}
            status={validationMessage?.dateStart?.status}
            {...inputRangeStartProps}
            classNameOverride={classnames(
              styles.inputRangeStart,
              inputRangeStartProps.classNameOverride
            )}
          />
          <DateInput
            ref={inputRangeEndRef}
            id={`${id}--to`}
            aria-describedby={dateEndInputDescribedBy}
            aria-errormessage={dateEndErrorMessageId}
            aria-invalid={dateEndIsInvalid}
            autoComplete="off"
            disabled={disabled}
            status={validationMessage?.dateEnd?.status}
            {...inputRangeEndProps}
            classNameOverride={classnames(
              styles.inputRangeEnd,
              inputRangeEndProps.classNameOverride
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
