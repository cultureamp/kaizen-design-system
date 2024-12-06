import React from 'react'
import { Meta } from '@storybook/react'
import { StickerSheet, StickerSheetStory } from '~storybook/components/StickerSheet'
import { ToggleSwitch } from '../index'

export default {
  title: 'Components/Toggle Switch controls/ToggleSwitch',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
    a11y: {
      config: {
        rules: [
          {
            // Built with no label on purpose, to be used within `ToggleSwitchField` where label is present
            id: 'label',
            enabled: false,
          },
        ],
      },
    },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet isReversed={isReversed} headers={['Default', 'Hover', 'Focus', 'Disabled']}>
      <StickerSheet.Row header="off">
        <ToggleSwitch reversed={isReversed} />
        <ToggleSwitch reversed={isReversed} data-sb-pseudo-styles="hover" />
        <ToggleSwitch reversed={isReversed} data-sb-pseudo-styles="focus" />
        <ToggleSwitch reversed={isReversed} disabled />
      </StickerSheet.Row>
      <StickerSheet.Row header="on">
        <ToggleSwitch reversed={isReversed} toggledStatus="on" />
        <ToggleSwitch reversed={isReversed} toggledStatus="on" data-sb-pseudo-styles="hover" />
        <ToggleSwitch reversed={isReversed} toggledStatus="on" data-sb-pseudo-styles="focus" />
        <ToggleSwitch reversed={isReversed} toggledStatus="on" disabled />
      </StickerSheet.Row>
    </StickerSheet>
  ),
  parameters: {
    pseudo: {
      hover: '[data-sb-pseudo-styles="hover"] + span',
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
    ...StickerSheetTemplate.parameters,
    backgrounds: { default: 'Purple 700' },
  },
  args: { isReversed: true },
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (RTL)',
  parameters: {
    ...StickerSheetTemplate.parameters,
    textDirection: 'rtl',
  },
}
