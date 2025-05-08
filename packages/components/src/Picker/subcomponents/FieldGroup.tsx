import React from 'react'
import { Label as RACLabel } from 'react-aria-components'
import { FieldMessage, type FieldMessageStatus } from '~components/FieldMessage'
import { Label } from '~components/Label'
import { Text } from '~components/Text'
import { FieldContext } from './PickerContext'

export type FieldGroupProps = {
  children?: React.ReactNode
  labelText: string
  visuallyHiddenLabel?: boolean
  inline?: boolean
  validationMessage?: string
  status?: FieldMessageStatus
  required?: boolean
  disabled?: boolean
  descriptiveText?: string
  size?: 'small' | 'medium' | 'large'
}

export const FieldGroup = ({
  labelText,
  visuallyHiddenLabel,
  inline,
  validationMessage,
  status = 'default',
  descriptiveText,
  size = 'medium',
  children,
}: FieldGroupProps): JSX.Element => {
  // TODO: something with required and disabled
  const labelSpacing = {
    small: '6',
    medium: '8',
    large: '12',
  }
  const inlineLabelSpacing = {
    small: '8',
    medium: '12',
    large: '16',
  }

  return (
    <FieldContext.Provider value={{ size: size, label: labelText }}>
      <div
        className={
          inline
            ? `flex gap-${inlineLabelSpacing[size]} items-center`
            : `flex flex-col gap-${labelSpacing[size]}`
        }
      >
        {!visuallyHiddenLabel && (
          <RACLabel>
            <Label id={labelText}>{labelText}</Label>
          </RACLabel>
        )}
        {children && children}
        {descriptiveText && <Text variant="body">{descriptiveText}</Text>}
        {validationMessage && <FieldMessage message={validationMessage} status={status} />}
      </div>
    </FieldContext.Provider>
  )
}
