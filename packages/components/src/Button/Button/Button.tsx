import React, { forwardRef, type Ref } from 'react'

import { GenericButton, type ButtonRef, type GenericButtonProps } from '../GenericButton'

export type ButtonProps = GenericButtonProps

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3062890984/Button Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-buttons-button--docs Storybook}
 */

export const Button = forwardRef((props: ButtonProps, ref: Ref<ButtonRef | undefined>) => (
  <GenericButton iconPosition="start" ref={ref} {...props} />
))

Button.displayName = 'Button'
