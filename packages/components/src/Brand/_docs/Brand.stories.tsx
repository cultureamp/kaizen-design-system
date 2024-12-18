import { type Meta, type StoryObj } from '@storybook/react'
import { type StickerSheetStory } from '~storybook/components/StickerSheet'
import { Brand } from '../index'
import { StickerSheetDefault } from './Brand.stickersheet.stories'

const meta = {
  title: 'Components/Brand',
  component: Brand,
  args: {
    variant: 'logo-horizontal',
    alt: 'Logo Horizontal',
  },
} satisfies Meta<typeof Brand>

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

export const Variants: StickerSheetStory = {
  ...StickerSheetDefault,
}
