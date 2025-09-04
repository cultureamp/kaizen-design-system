import React from 'react'
import { Unstyled } from '@storybook/blocks'
import { InlineNotification } from '~components/Notification'

export const V1Notice = (): JSX.Element => (
  <Unstyled>
    <InlineNotification
      persistent
      variant="warning"
      title="You're looking at the documentation for kaizen/components v1"
    >
      This is the documentation for <code>kaizen/components@1.80.*</code>. This version is no longer
      supported outside of critical bug fixes. Refer to the Migration Guide for{' '}
      <code>kaizen/components@2.0.0</code> or visit the latest documentation{' '}
      <a href="https://cultureamp.design">here</a>.
    </InlineNotification>
  </Unstyled>
)
