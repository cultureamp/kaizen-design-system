import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { Avatar } from '~components/Avatar'
import { BrandMomentPositiveOutro, Informative } from '~components/Illustration'
import { Icon } from '~components/__next__/Icon'
import { StickerSheet } from '~storybook/components/StickerSheet'
import { LoadingGraphic } from '../index'

const meta = {
  title: 'Components/Loading states/LoadingGraphic',
  component: LoadingGraphic,
  args: {
    size: 'xlarge',
  },
} satisfies Meta<typeof LoadingGraphic>

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

export const Animated: Story = {
  args: { isAnimated: true },
}

export const Reversed: Story = {
  args: { isReversed: true },
  parameters: {
    backgrounds: { default: 'Purple 700' },
  },
}

export const Size: Story = {
  render: () => (
    <StickerSheet headers={['Loading Skeleton', 'Example']}>
      <StickerSheet.Row header="Icon (small)">
        <LoadingGraphic size="small" />
        <Icon name="build" alt="Aliens approaching!" isFilled />
      </StickerSheet.Row>
      <StickerSheet.Row header="Avatar (medium)">
        <LoadingGraphic size="medium" />
        <Avatar fullName="Jane Doe" disableInitials={false} isCurrentUser size="medium" />
      </StickerSheet.Row>
      <StickerSheet.Row header="Avatar (large)">
        <LoadingGraphic size="large" />
        <Avatar fullName="Jane Doe" disableInitials={false} isCurrentUser size="large" />
      </StickerSheet.Row>
      <StickerSheet.Row header="Avatar (x-large)">
        <LoadingGraphic size="xlarge" />
        <Avatar fullName="Jane Doe" disableInitials={false} isCurrentUser size="xlarge" />
      </StickerSheet.Row>
      <StickerSheet.Row header="Spot (xx-large)">
        <LoadingGraphic size="xxlarge" />
        <Informative alt="informative-spot-image" classNameOverride="!w-[150px]" />
      </StickerSheet.Row>
      <StickerSheet.Row header="Scene (scene)">
        <LoadingGraphic size="scene" />
        <BrandMomentPositiveOutro alt="positive-outro" classNameOverride="!w-[400px]" />
      </StickerSheet.Row>
    </StickerSheet>
  ),
}
