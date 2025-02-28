import React from 'react'
import { Unstyled } from '@storybook/blocks'
import { InlineNotification } from '~components/Notification'

export const ReplacementNotice = (): JSX.Element => {
  return (
    <Unstyled>
      <InlineNotification variant="cautionary" persistent title="Deprecated">
        {`This component has been replaced by a 'next' version and will be removed in an upcoming major release. `}
      </InlineNotification>
    </Unstyled>
  )
}
