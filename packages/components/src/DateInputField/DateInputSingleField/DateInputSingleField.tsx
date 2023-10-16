import React, { useId, useState } from "react"
import classnames from "classnames"
import { enAU } from "date-fns/locale"
import { FieldMessage, FieldMessageStatus } from "~components/FieldMessage"
import {
  DateInputDescription,
  DateInputDescriptionProps,
} from "../subcomponents/DateInputDescription"
import {
  DateInputWithIconButton,
  DateInputWithIconButtonProps,
  DateInputWithIconButtonRefs,
} from "../subcomponents/DateInputWithIconButton"
import styles from "./DateInputSingleField.module.scss"

export type DateInputSingleFieldProps = {
  /**
   * A description that provides context for the text field
   */
  description?: DateInputDescriptionProps["description"]
  /**
   * Updates the styling of the validation FieldMessage
   */
  status?: FieldMessageStatus
  /**
   * A descriptive message for `status` states
   */
  validationMessage?: React.ReactNode
  locale?: Locale
} & DateInputWithIconButtonProps

export const DateInputSingleField = React.forwardRef<
  DateInputWithIconButtonRefs,
  DateInputSingleFieldProps
>(
  (
    {
      description,
      status,
      validationMessage,
      locale = enAU,
      id: propsId,
      disabled,
      isReversed = false,
      classNameOverride,
      ...dateInputWithIconButtonProps
    },
    ref
  ) => {
    const [id] = useState<string>(propsId ?? useId())

    const descriptionId = `${id}-field-message`

    const shouldShowValidationMessage = !disabled && validationMessage

    return (
      <div className={classNameOverride}>
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
            message={
              <DateInputDescription description={description} locale={locale} />
            }
            reversed={isReversed}
          />
        </div>
      </div>
    )
  }
)

DateInputSingleField.displayName = "DateInputSingleField"
