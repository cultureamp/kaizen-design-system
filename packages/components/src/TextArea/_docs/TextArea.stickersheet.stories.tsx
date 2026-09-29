import React from 'react'
import { type Meta } from '@storybook/react'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { TextArea } from '../index'

export default {
  title: 'Components/TextAreaField/TextArea (primitive)',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
    a11y: {
      config: {
        rules: [
          {
            // Built with no label on purpose, to be used within `TextField` where label is present
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
    <>
      <StickerSheet isReversed={isReversed} headers={['Default', 'Hover', 'Active', 'Focus']}>
        <StickerSheet.Row header="Enabled">
          <TextArea reversed={isReversed} />
          <TextArea reversed={isReversed} data-sb-pseudo-styles="hover" />
          <TextArea reversed={isReversed} data-sb-pseudo-styles="active" />
          <TextArea reversed={isReversed} data-sb-pseudo-styles="focus" />
        </StickerSheet.Row>
        <StickerSheet.Row header="Disabled">
          <TextArea reversed={isReversed} disabled />
          <TextArea reversed={isReversed} disabled data-sb-pseudo-styles="hover" />
          <TextArea reversed={isReversed} disabled data-sb-pseudo-styles="active" />
          <TextArea reversed={isReversed} disabled data-sb-pseudo-styles="focus" />
        </StickerSheet.Row>
      </StickerSheet>
      <StickerSheet title="Autogrow">
        <StickerSheet.Row header="Wraps on whitespace (container 320px)">
          <div style={{ maxWidth: '320px', border: '1px dashed currentcolor' }}>
            <TextArea
              rows={1}
              value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis nisi sit amet consectetur ultricies. Vestibulum porta arcu vitae erat egestas pulvinar."
              autogrow
            />
          </div>
        </StickerSheet.Row>
        <StickerSheet.Row header="Long unbroken word (container 320px)">
          <div style={{ maxWidth: '320px', border: '1px dashed currentcolor' }}>
            <TextArea rows={1} value={'A'.repeat(100)} autogrow />
          </div>
        </StickerSheet.Row>
      </StickerSheet>
    </>
  ),
  parameters: {
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
    ...StickerSheetTemplate.parameters,
    backgrounds: { default: 'Purple 700' },
  },
  args: { isReversed: true },
}
