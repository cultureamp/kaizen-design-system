import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'

import {
  BrandMomentError,
  BrandMomentLogin,
  BrandMomentPositiveOutro,
  EmptyStatesAction,
  EmptyStatesInformative,
  EmptyStatesNegative,
  EmptyStatesNeutral,
  EmptyStatesPositive,
} from '../index'

const meta = {
  title: 'Components/Illustrations/Scene',
  component: BrandMomentPositiveOutro,
} satisfies Meta<typeof BrandMomentPositiveOutro>

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

export const AnimatedScenes: Story = {
  args: {
    isAnimated: true,
    loop: true,
    autoplay: true,
  },
  render: (args) => (
    <>
      <EmptyStatesAction {...args} />
      <EmptyStatesInformative {...args} />
      <EmptyStatesNegative {...args} />
      <EmptyStatesNeutral {...args} />
      <EmptyStatesPositive {...args} />
      <BrandMomentPositiveOutro {...args} />
      <BrandMomentLogin {...args} />
      <BrandMomentError {...args} />
    </>
  ),
  decorators: [
    (Story) => (
      <div className="flex flex-col justify-center gap-16 max-w-[400px]">
        <Story />
      </div>
    ),
  ],
}

export const AnimatedScenesHover: Story = {
  ...AnimatedScenes,
  parameters: {
    pseudo: {
      hover: ['[data-sb-pseudo-styles="hover"]', '[data-sb-pseudo-styles="hover"] figure'],
    },
  },
  decorators: [
    (Story) => (
      <div
        className="flex flex-col justify-center gap-16 max-w-[400px]"
        data-sb-pseudo-styles="hover"
      >
        <Story />
      </div>
    ),
  ],
}
