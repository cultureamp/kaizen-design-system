import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { VisuallyHidden } from "@kaizen/a11y"
import { OverrideClassName } from "@kaizen/component-base"
import { FieldMessage } from "@kaizen/draft-form"
import { DateInput, DateInputProps } from "../../../_subcomponents/DateInput"
import {
  DateInputDescription,
  DateInputDescriptionProps,
} from "../../../_subcomponents/DateInputDescription"
import { isRefObject } from "../../../utils/isRefObject"
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
  /**
   * Updates the styling of the validation FieldMessage
   */
  status?: DateRangeValidationMessageProps["status"]
  /**
   * A descriptive message for `status` states
   */
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
      status,
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
    const errorMessageId = `${id}--error-message`

    const inputDescribedBy = validationMessage
      ? `${errorMessageId} ${descriptionId}`
      : descriptionId

    return (
      <div className={classNameOverride} {...restProps}>
        <fieldset className={styles.dateRangeInputContainer}>
          <legend>
            <VisuallyHidden>{legend}</VisuallyHidden>
          </legend>
          <DateInput
            ref={inputRangeStartRef}
            id={`${id}--from`}
            aria-describedby={inputDescribedBy}
            autoComplete="off"
            disabled={disabled}
            status={status?.dateStart}
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
            status={status?.dateEnd}
            {...inputRangeEndProps}
            classNameOverride={classnames(
              styles.inputRangeEnd,
              inputRangeEndProps.classNameOverride
            )}
          />
        </fieldset>
        {status && validationMessage && (
          <DateRangeValidationMessage
            status={status}
            validationMessage={validationMessage}
            isReversed={isReversed}
            id={errorMessageId}
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
