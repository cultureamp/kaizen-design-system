import React from 'react'
// @ts-ignore This is a mock component to test codemods
import { Button } from '@kaizen/components'

export const MockSubcomponent = (): JSX.Element => {
  return (
    <div>
      <Button label="Mock Subcomponent Button" onClick={() => undefined} />
      <Button label="Mock Subcomponent Link" href="#link" />
    </div>
  )
}
