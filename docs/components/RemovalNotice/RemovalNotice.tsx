import React from 'react'
import { Unstyled } from '@storybook/addon-docs/blocks'
import { InlineNotification } from '~components/Notification'

export const RemovalNotice = (): JSX.Element => {
  return (
    <Unstyled>
      <InlineNotification variant="warning" persistent title="Deprecated">
        {`This component will be removed in an upcoming major release. `}
      </InlineNotification>
    </Unstyled>
  )
}
