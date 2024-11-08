import React from 'react'
import { useIntl } from '@cultureamp/i18n-react-intl'
import type { Locale } from 'date-fns'
import {
  DateInput,
  DateInputProps,
  DateInputDescription,
  DateInputDescriptionProps,
} from '~components/DateInput'
import { FieldMessage } from '~components/FieldMessage'
import { ValidationMessage } from '../../types'
import styles from './DateInputField.module.scss'

export type DateInputFieldProps = {
  id: string
  locale: Locale
  /**
   * A description that provides context for the text field
   */
  description?: DateInputDescriptionProps['description']
  isReversed?: boolean
  validationMessage?: ValidationMessage
  disabled?: boolean
  labelText?: DateInputProps['labelText']
} & Omit<DateInputProps, 'id' | 'labelText'>

export const DateInputField = React.forwardRef<HTMLInputElement, DateInputFieldProps>(
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
    ref,
  ) => {
    const { formatMessage } = useIntl()

    const dateInputLabelFallback = formatMessage({
      id: 'filterDatePickerDateInputField.dateInputLabelFallback',
      defaultMessage: 'Date',
      description: 'Default label for date input field',
    })

    const descriptionId = `${id}--field-message`

    const errorMessageId = validationMessage ? `${id}--date-error-message` : undefined

    const inputDescribedBy = errorMessageId ? `${errorMessageId} ${descriptionId}` : descriptionId

    const dateIsInvalid = errorMessageId !== undefined

    return (
      <div>
        <DateInput
          ref={ref}
          id={id}
          labelText={labelText || dateInputLabelFallback}
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
          message={<DateInputDescription description={description} locale={locale} />}
          reversed={isReversed}
          classNameOverride={disabled ? styles.disabled : undefined}
        />
      </div>
    )
  },
)

DateInputField.displayName = 'DateInputField'
