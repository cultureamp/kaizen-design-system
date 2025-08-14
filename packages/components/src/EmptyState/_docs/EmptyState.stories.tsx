import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { Button } from '~components/Button'
import { Icon } from '~components/__next__/Icon'
import { EmptyState } from '../index'

const meta = {
  title: 'Components/EmptyState',
  component: EmptyState,
  argTypes: {
    children: {
      table: { type: { summary: 'React.ReactNode' } },
      control: { type: 'radio' },
      options: ['Default (no children)', 'Button (chevron right)'],
      mapping: {
        'Default (no children)': undefined,
        'Button (chevron right)': (
          <Button
            label="Label"
            icon={<Icon name="chevron_right" isPresentational shouldMirrorInRTL />}
            iconPosition="end"
          />
        ),
      },
    },
  },
  args: {
    headingProps: {
      variant: 'heading-3',
      children: 'Empty state title',
    },
    bodyText:
      'If providing further actions, include a link to an action or use a Default or Primary action.',
  },
} satisfies Meta<typeof EmptyState>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
}
