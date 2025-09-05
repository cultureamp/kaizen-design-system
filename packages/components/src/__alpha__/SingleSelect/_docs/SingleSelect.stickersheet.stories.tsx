import React from 'react'
import { type Meta } from '@storybook/react'
import { Item, Section } from 'react-stately'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { SingleSelect } from '../index'

export default {
  title: 'Components/SingleSelect/SingleSelect (alpha)',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => {
    return (
      <StickerSheet isReversed={isReversed} title="SingleSelect" headers={['Items', 'Grouped']}>
        <StickerSheet.Row>
          <SingleSelect label="Combobox flat colours" isComboBox>
            <Item>Red</Item>
            <Item>Orange</Item>
            <Item>Yellow</Item>
            <Item>Green</Item>
            <Item>Blue</Item>
            <Item>Purple</Item>
            <Item>Black</Item>
            <Item>White</Item>
            <Item>Lime</Item>
            <Item>Fushsia</Item>
          </SingleSelect>

          <SingleSelect label="Select grouped colours">
            <Section title="Warm Colours">
              <Item key="red">Red</Item>
            </Section>
            <Section title="Cool Colours">
              <Item key="blue">Blue</Item>
            </Section>
          </SingleSelect>
        </StickerSheet.Row>
      </StickerSheet>
    )
  },
  /** @note: Only required if you have pseudo states, otherwise this can be removed */
  parameters: {
    /** @todo: Remove any inapplicable pseudo states */
    pseudo: {
      hover: '[data-sb-pseudo-styles="hover"]',
      active: '[data-sb-pseudo-styles="active"]',
      focus: '[data-sb-pseudo-styles="focus"]',
      focusVisible: '[data-sb-pseudo-styles="focus"]',
    },
  },
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (Default)',
}

export const StickerSheetReversed: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (Reversed)',
  parameters: {
    /** @note: Only required if template has parameters, otherwise this spread can be removed */
    ...StickerSheetTemplate.parameters,
    backgrounds: { default: 'Purple 700' },
  },
  args: { isReversed: true },
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (RTL)',
  parameters: {
    /** @note: Only required if template has parameters, otherwise this spread can be removed */
    ...StickerSheetTemplate.parameters,
    textDirection: 'rtl',
  },
}
