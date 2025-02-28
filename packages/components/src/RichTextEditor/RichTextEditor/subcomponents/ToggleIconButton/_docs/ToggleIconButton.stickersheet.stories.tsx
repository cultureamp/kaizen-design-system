import React from 'react'
import { type Meta } from '@storybook/react'
import { Icon } from '~components/__next__/Icon'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { ToggleIconButton, type ToggleIconButtonProps } from '../index'
import { moodsList } from '../types'

export default {
  title: 'Components/RichTextEditor/Subcomponents/ToggleIconButton',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: () => {
    const defaultProps = {
      label: 'bold',
      icon: <Icon name="format_bold" isPresentational />,
    } satisfies ToggleIconButtonProps

    return (
      <StickerSheet
        headers={['Default', 'Hover', 'Active', 'Focus', 'Disabled', 'Disabled (Focus)']}
      >
        {moodsList.map((mood) => (
          <StickerSheet.Row key={mood} header={mood}>
            <ToggleIconButton {...defaultProps} mood={mood} />
            <ToggleIconButton {...defaultProps} mood={mood} data-sb-pseudo-styles="hover" />
            <ToggleIconButton {...defaultProps} mood={mood} isActive />
            <ToggleIconButton {...defaultProps} mood={mood} data-sb-pseudo-styles="focus" />
            <ToggleIconButton {...defaultProps} mood={mood} disabled />
            <ToggleIconButton
              {...defaultProps}
              mood={mood}
              disabled
              data-sb-pseudo-styles="focus"
            />
          </StickerSheet.Row>
        ))}
      </StickerSheet>
    )
  },
  parameters: {
    pseudo: {
      hover: '[data-sb-pseudo-styles="hover"]',
      focus: '[data-sb-pseudo-styles="focus"]',
      focusVisible: '[data-sb-pseudo-styles="focus"]',
    },
  },
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (Default)',
}
