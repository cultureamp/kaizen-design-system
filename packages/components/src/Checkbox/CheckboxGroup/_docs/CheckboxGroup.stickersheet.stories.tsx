import React from 'react'
import { type Meta } from '@storybook/react'
import { CheckboxField } from '~components/Checkbox/CheckboxField'
import { Text } from '~components/Text'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { CheckboxGroup, type CheckboxGroupProps } from '../index'

export default {
  title: 'Components/Checkboxes/CheckboxGroup',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const CheckboxGroupWrapped = ({
  labelText,
  reversed,
  ...props
}: CheckboxGroupProps): JSX.Element => (
  <CheckboxGroup labelText={labelText} reversed={reversed} {...props}>
    <CheckboxField labelText="Checkbox one" reversed={reversed} />
    <CheckboxField labelText="Checkbox two" reversed={reversed} checkedStatus="on" />
    <CheckboxField labelText="Checkbox three" reversed={reversed} checkedStatus="mixed" />
  </CheckboxGroup>
)

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet isReversed={isReversed} headers={['Default', 'No Bottom Margin']}>
      <StickerSheet.Row>
        <>
          <CheckboxGroupWrapped reversed={isReversed} labelText="CheckboxGroup" />
          <Text variant="body" color={isReversed ? 'white' : 'dark'}>
            Next line
          </Text>
        </>
        <>
          <CheckboxGroupWrapped reversed={isReversed} labelText="CheckboxGroup" noBottomMargin />
          <Text variant="body" color={isReversed ? 'white' : 'dark'}>
            Next line
          </Text>
        </>
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

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (RTL)',
  parameters: {
    textDirection: 'rtl',
  },
}
