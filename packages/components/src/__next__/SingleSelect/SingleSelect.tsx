import React, { type HTMLAttributes, type PropsWithChildren } from 'react'
import {
  Label as RACLabel,
  Popover as RACPopover,
  Select as RACSelect,
} from 'react-aria-components'
import { FieldGroup } from '~components/FieldGroup'
import { FieldMessage } from '~components/FieldMessage'
import { type InputStatusType } from '~components/Input'
import { Label } from '~components/Label'
import { type OverrideClassName } from '~components/types/OverrideClassName'
import { List, ListItem, ListSection, Trigger } from './subcomponents'

export type SingleSelectProps = {
  labelText: React.ReactNode

  inline?: boolean
  validationMessage?: string | React.ReactNode
  status?: InputStatusType
  description?: string | React.ReactNode
  children?: React.ReactNode
} & OverrideClassName<HTMLAttributes<Element>>

export const SingleSelect = ({
  labelText,
  inline = false,
  validationMessage,
  status,
  description,
  classNameOverride,
  children,
  ...restProps
}: PropsWithChildren<SingleSelectProps>): JSX.Element => {
  return (
    <FieldGroup inline={inline}>
      <RACSelect
        isInvalid={status === 'error' || status === 'caution'}
        aria-invalid={status === 'error' || status === 'caution'}
        className={classNameOverride}
        placeholder=""
        aria-describedby="descriptionMsg"
        aria-labelledby="validationMsg"
        {...restProps}
      >
        <RACLabel>
          <Label id="label" labelText={labelText} />
        </RACLabel>

        <Trigger />
        {validationMessage && (
          <FieldMessage id="validationMsg" message={validationMessage} status={status} />
        )}

        {description && <FieldMessage id="descriptionMsg" message={description} />}
        <RACPopover className="rounded bg-white shadow-lg p-12">{children}</RACPopover>
      </RACSelect>
    </FieldGroup>
  )
}

SingleSelect.displayName = 'SingleSelect'
SingleSelect.List = List
SingleSelect.ListItem = ListItem
SingleSelect.ListSection = ListSection
