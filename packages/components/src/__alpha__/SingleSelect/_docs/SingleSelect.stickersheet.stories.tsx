import React from 'react'
import { type Meta } from '@storybook/react'
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
            <SingleSelect.Item>Red</SingleSelect.Item>
            <SingleSelect.Item>Orange</SingleSelect.Item>
            <SingleSelect.Item>Yellow</SingleSelect.Item>
            <SingleSelect.Item>Green</SingleSelect.Item>
            <SingleSelect.Item>Blue</SingleSelect.Item>
            <SingleSelect.Item>Purple</SingleSelect.Item>
            <SingleSelect.Item>Black</SingleSelect.Item>
            <SingleSelect.Item>White</SingleSelect.Item>
            <SingleSelect.Item>Lime</SingleSelect.Item>
            <SingleSelect.Item>Fushsia</SingleSelect.Item>
          </SingleSelect>

          <SingleSelect label="Select grouped colours">
            <SingleSelect.Section title="Warm Colours">
              <SingleSelect.Item>Red</SingleSelect.Item>
            </SingleSelect.Section>
            <SingleSelect.Section title="Cool Colours">
              <SingleSelect.Item>Blue</SingleSelect.Item>
            </SingleSelect.Section>
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
