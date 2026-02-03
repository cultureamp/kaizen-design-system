import React from 'react'
import { Unstyled } from '@storybook/addon-docs/blocks'
import { InlineNotification } from '~components/Notification'

export const ReplacementNotice = ({ isFuture }): JSX.Element => {
  const wording = isFuture ? 'will be' : 'has been'

  return (
    <Unstyled>
      <InlineNotification variant="cautionary" persistent title="Deprecated">
        {`This component ${wording} replaced by a 'next' version and will be removed in an upcoming major release. `}
      </InlineNotification>
    </Unstyled>
  )
}
