import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { ProgressBar, type ProgressBarProps } from '../index'

const meta = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  args: {
    value: 25,
    max: 100,
    color: 'green',
    isAnimating: false,
    label: '25%',
    isReversed: false,
  },
  argTypes: {
    mood: { control: false },
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // `label` is an optional prop so this has no accessible by default. consumers can pass in `aria-labelledby` or `aria-label` which can provide an accessible description pending a refactor.
            id: 'aria-progressbar-name',
            enabled: false,
          },
        ],
      },
    },
  },
} satisfies Meta<typeof ProgressBar>

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

const colors = [
  {
    title: 'Bordered Blue',
    props: { color: 'blue' },
  },
  {
    title: 'Bordered Green',
    props: { color: 'green' },
  },
  {
    title: 'Bordered Red',
    props: { color: 'red' },
  },
  {
    title: 'Bordered Yellow',
    props: { color: 'yellow' },
  },
  {
    title: 'Solid Blue',
    props: { color: 'blue', pattern: 'solid' },
  },
  {
    title: 'Solid Green',
    props: { color: 'green', pattern: 'solid' },
  },
  {
    title: 'Solid Red',
    props: { color: 'red', pattern: 'solid' },
  },
  {
    title: 'Solid Yellow',
    props: { color: 'yellow', pattern: 'solid' },
  },
  {
    title: 'Stripe Blue',
    props: { color: 'blue', pattern: 'stripe' },
  },
  {
    title: 'Stripe Green',
    props: { color: 'green', pattern: 'stripe' },
  },
  {
    title: 'Stripe Red',
    props: { color: 'red', pattern: 'stripe' },
  },
  {
    title: 'Stripe Yellow',
    props: { color: 'yellow', pattern: 'stripe' },
  },
] satisfies { title: string; props: Partial<ProgressBarProps> }[]

export const Colors: Story = {
  render: ({ mood: _, ...restArgs }) => (
    <div className="flex flex-col gap-16">
      {colors.map(({ title, props }) => {
        // Omit 'mood' from args to avoid type error
        return (
          <ProgressBar
            {...restArgs}
            key={title}
            label={title}
            color={props.color ?? 'green'}
            pattern={props.pattern}
          />
        )
      })}
    </div>
  ),
}

export const IsAnimating: Story = {
  args: { isAnimating: true },
}

export const ValueAndMax: Story = {
  render: () => (
    <div className="flex flex-col gap-16">
      <ProgressBar
        color="green"
        value={3}
        max={5}
        label="3/5"
        isAnimating={false}
        isReversed={false}
      />
      <ProgressBar
        color="green"
        value={60}
        max={100}
        label="60%"
        isAnimating={false}
        isReversed={false}
      />
    </div>
  ),
}

export const Reversed: Story = {
  parameters: {
    backgrounds: { default: 'Purple 700' },
  },
  args: { isReversed: true },
}

export const AccessibleName: Story = {
  args: { 'aria-label': 'Development goals' },
}
