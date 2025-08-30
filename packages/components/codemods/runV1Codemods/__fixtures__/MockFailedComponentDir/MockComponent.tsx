// @ts-nocheck this is a mock file - we can ignore this
import React from 'react'
import { GlobalNotification } from '@kaizen/components'

export const MockComponent = (): JSX.Element => {
  return (
    <div>
      <GlobalNotification persistent={true} type="success">
        Global notification content
      </GlobalNotification>
    </div>
  )
}
