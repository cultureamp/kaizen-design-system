import React from 'react'
import { Unstyled } from '@storybook/addon-docs/blocks'
import { InlineNotification } from '~components/Notification'
import { LinkTo } from '../LinkTo'

export const RenameNotice = (): JSX.Element => {
  return (
    <Unstyled>
      <InlineNotification variant="cautionary" persistent title="Deprecated">
        {'This component will be renamed in the '}
        <LinkTo pageId="releases-upcoming-major-releases--docs">upcoming major release</LinkTo>.
      </InlineNotification>
    </Unstyled>
  )
}
