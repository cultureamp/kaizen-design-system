import React from 'react'
import { type Meta } from '@storybook/react'
import { RadioField } from '~components/Radio/RadioField'
import { Text } from '~components/Text'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { RadioGroup } from '../index'

export default {
  title: 'Components/Radios/RadioGroup',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet isReversed={isReversed} headers={['Base', 'Disabled']}>
      <StickerSheet.Row header="Default">
        <>
          <RadioGroup labelText="Radio group label" reversed={isReversed}>
            <RadioField labelText="Label" name="radio" value="radio-1" reversed={isReversed} />
            <RadioField labelText="Label" name="radio" value="radio-2" reversed={isReversed} />
            <RadioField labelText="Label" name="radio" value="radio-3" reversed={isReversed} />
          </RadioGroup>
          <Text variant="body" color={isReversed ? 'white' : 'dark'}>
            Next line
          </Text>
        </>
        <>
          <RadioGroup labelText="Radio group label" reversed={isReversed}>
            <RadioField
              labelText="Label"
              name="radio"
              value="radio-1"
              disabled
              reversed={isReversed}
            />
            <RadioField
              labelText="Label"
              name="radio"
              value="radio-2"
              disabled
              reversed={isReversed}
            />
            <RadioField
              labelText="Label"
              name="radio"
              value="radio-3"
              disabled
              reversed={isReversed}
            />
          </RadioGroup>
          <Text variant="body" color={isReversed ? 'white' : 'dark'}>
            Next line
          </Text>
        </>
      </StickerSheet.Row>
      <StickerSheet.Row header="No Bottom Margin">
        <div>
          <RadioGroup labelText="Radio group label" reversed={isReversed} noBottomMargin>
            <RadioField labelText="Label" name="radio" value="radio-1" reversed={isReversed} />
            <RadioField labelText="Label" name="radio" value="radio-2" reversed={isReversed} />
          </RadioGroup>
          <Text variant="body" color={isReversed ? 'white' : 'dark'}>
            Next line
          </Text>
        </div>
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

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (RTL)',
  parameters: { textDirection: 'rtl' },
}
