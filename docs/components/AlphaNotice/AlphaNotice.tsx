import React from 'react'
import { Unstyled } from '@storybook/blocks'
import { InlineNotification } from '~components/Notification'

export const AlphaNotice = (): JSX.Element => (
  <Unstyled>
    <InlineNotification persistent variant="cautionary" title="Alpha component">
      This component is currently in development and not fit to use in production.
    </InlineNotification>
  </Unstyled>
)
