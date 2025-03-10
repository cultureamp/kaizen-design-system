import React from 'react'
import { Unstyled } from '@storybook/blocks'
import classnames from 'classnames'
import Highlight from 'react-highlight'

export type DiffProps = {
  children: React.ReactNode
  className?: string
}

export const Diff = ({ children, className }: DiffProps): JSX.Element => (
  <Unstyled>
    <Highlight className={classnames('diff', className)}>{children}</Highlight>
  </Unstyled>
)
