import React, { forwardRef, type Ref } from 'react'
import {
  GenericButton,
  type BaseButtonProps,
  type ButtonRef,
  type WorkingButtonProps,
} from '../GenericButton'

export type IconButtonProps = Omit<BaseButtonProps, 'iconPosition'> & WorkingButtonProps

/**
 * @deprecated This component will be replaced by the next Button component in v2.
 * Use `@kaizen/components/next` Button instead.
 * Migration guide: {@link https://cultureamp.design/?path=/docs/components-button-migration-guide--docs}
 * Codemod available: `upgradeV1Buttons`
 *
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3062890984/Button Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-iconbutton--docs Storybook}
 */
export const IconButton = forwardRef(
  (props: IconButtonProps, ref: Ref<ButtonRef | undefined>): JSX.Element => (
    <GenericButton iconButton {...props} ref={ref} />
  ),
)

IconButton.displayName = 'IconButton'
