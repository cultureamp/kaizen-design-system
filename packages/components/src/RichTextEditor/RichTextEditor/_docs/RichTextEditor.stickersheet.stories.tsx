import React from 'react'
import { type Meta } from '@storybook/react'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { RichTextEditor } from '../index'

export default {
  title: 'Components/RichTextEditor/RichTextEditor',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: () => (
    <StickerSheet title="RichTextEditor" layout="stretch">
      <StickerSheet.Row header="With toolbar">
        <RichTextEditor
          labelText="Label"
          defaultValue={[]}
          onChange={() => undefined}
          controls={[
            { name: 'bold', group: 'inline' },
            { name: 'italic', group: 'inline' },
            { name: 'underline', group: 'inline' },
          ]}
        />
      </StickerSheet.Row>
      <StickerSheet.Row header="No controls">
        <RichTextEditor
          labelText="Label"
          defaultValue={[]}
          onChange={() => undefined}
          controls={undefined}
        />
      </StickerSheet.Row>
      <StickerSheet.Row header="Schema-only bold">
        <RichTextEditor
          labelText="Label"
          onChange={() => undefined}
          controls={[
            { name: 'bold', group: 'inline', showInToolbar: false },
            { name: 'italic', group: 'inline' },
            { name: 'underline', group: 'inline' },
          ]}
          defaultValue={[
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  marks: [{ type: 'strong' }],
                  text: 'Bold text without a Bold toolbar button',
                },
              ],
            },
          ]}
        />
      </StickerSheet.Row>
    </StickerSheet>
  ),
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (Default)',
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (RTL)',
  parameters: { textDirection: 'rtl' },
}
