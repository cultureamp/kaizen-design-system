import React from 'react'
import { type Meta } from '@storybook/react'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { Brand } from '../index'

export default {
  title: 'Components/Brand',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet isReversed={isReversed}>
      <StickerSheet.Row header="Logo Horizontal">
        <Brand alt="Culture Amp" variant="logo-horizontal" reversed={isReversed} />
      </StickerSheet.Row>
      <StickerSheet.Row header="Logo Vertical">
        <Brand alt="Culture Amp" variant="logo-vertical" reversed={isReversed} />
      </StickerSheet.Row>
      <StickerSheet.Row header="Enso">
        <Brand alt="Culture Amp" variant="enso" reversed={isReversed} />
      </StickerSheet.Row>
      <StickerSheet.Row header="Collective Intelligence">
        <Brand
          alt="Collective Intelligence"
          variant="collective-intelligence"
          reversed={isReversed}
        />
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
  parameters: { backgrounds: { default: 'Purple 700' } },
  args: { isReversed: true },
}
