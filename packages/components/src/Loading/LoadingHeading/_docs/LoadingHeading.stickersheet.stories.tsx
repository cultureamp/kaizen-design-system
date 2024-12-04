import React from 'react'
import { Meta } from '@storybook/react'
import { StickerSheet, StickerSheetStory } from '~storybook/components/StickerSheet'
import { LoadingHeading } from '../index'

export default {
  title: 'Components/Loading states/LoadingHeading',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const headingVariants = [
  'display-0',
  'heading-1',
  'heading-2',
  'heading-3',
  'heading-4',
  'heading-5',
  'heading-6',
] as const

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet isReversed={isReversed}>
      {headingVariants.map((variant) => (
        <StickerSheet.Row key={variant} header={variant}>
          <StickerSheet.Cell className="w-320">
            <LoadingHeading variant={variant} />
          </StickerSheet.Cell>
        </StickerSheet.Row>
      ))}
      <StickerSheet.Row header="isLink">
        <LoadingHeading width={100} variant="heading-1" isLink isReversed={isReversed} />
      </StickerSheet.Row>
    </StickerSheet>
  ),
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (Default)',
}

export const StickerSheetReversed: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (Reversed)',
  parameters: {
    backgrounds: { default: 'Purple 700' },
  },
  args: { isReversed: true },
}
