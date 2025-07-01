import React from 'react'
import { Unstyled } from '@storybook/blocks'
import { InlineNotification } from '~components/Notification'

export const RenameNotice = (): JSX.Element => {
  return (
    <Unstyled>
      <InlineNotification variant="cautionary" persistent title="Deprecated">
        {`This component will be renamed in the upcoming major release.`}
      </InlineNotification>
    </Unstyled>
  )
}
