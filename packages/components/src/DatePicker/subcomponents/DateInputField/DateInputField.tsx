import React, { useId } from 'react'
import classnames from 'classnames'
import type { Locale } from 'date-fns'
import { enAU } from 'date-fns/locale'
import {
  DateInputDescription,
  DateInputDescriptionProps,
  DateInputWithIconButton,
  DateInputWithIconButtonProps,
  DateInputWithIconButtonRefs,
} from '~components/DateInput'
import { FieldMessage, FieldMessageStatus } from '~components/FieldMessage'
import styles from './DateInputField.module.scss'

export type DateInputFieldProps = {
  /**
   * A description that provides context for the text field
   */
  description?: DateInputDescriptionProps['description']
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

export const DateInputField = React.forwardRef<
  DateInputWithIconButtonRefs,
  DateInputFieldProps
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
    ref,
  ) => {
    const reactId = useId()
    const id = propsId ?? reactId

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
  },
)

DateInputField.displayName = 'DateInputField'
