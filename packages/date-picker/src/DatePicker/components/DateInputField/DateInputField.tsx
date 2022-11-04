import React from "react"
import classnames from "classnames"
import { FieldMessage, FieldMessageStatus } from "@kaizen/draft-form"
import {
  DateInputWithIconButton,
  DateInputWithIconButtonProps,
  DateInputWithIconButtonRefs,
} from "../../../_subcomponents/DateInput/DateInputWithIconButton"
import { getDescription } from "./utils/getDescription"
import styles from "./DateInputField.module.scss"

export interface DateInputFieldProps extends DateInputWithIconButtonProps {
  /**
   * A description that provides context for the text field
   */
  description?: React.ReactNode
  /**
   * Updates the styling of the validation FieldMessage
   */
  status?: FieldMessageStatus
  /**
   * A descriptive message for `status` states
   */
  validationMessage?: React.ReactNode
  locale: Locale
}

export const DateInputField = React.forwardRef<
  DateInputWithIconButtonRefs,
  DateInputFieldProps
>(
  (
    {
      description,
      status,
      validationMessage,
      locale,
      id,
      disabled,
      isReversed = false,
      ...dateInputWithIconButtonProps
    },
    ref
  ) => {
    const descriptionId = `${id}-field-message`

    const shouldShowValidationMessage = !disabled && validationMessage

    return (
      <div>
        <DateInputWithIconButton
          ref={ref}
          id={id}
          aria-describedby={descriptionId}
          status={status}
          disabled={disabled}
          isReversed={isReversed}
          {...dateInputWithIconButtonProps}
        />
        {shouldShowValidationMessage && (
          <FieldMessage
            message={validationMessage}
            status={status}
            reversed={isReversed}
          />
        )}
        <div className={classnames(disabled && styles.disabled)}>
          <FieldMessage
            id={descriptionId}
            message={getDescription(description, locale)}
            reversed={isReversed}
          />
        </div>
      </div>
    )
  }
)

DateInputField.displayName = "DateInputField"
