import React from 'react'
import { action } from '@storybook/addon-actions'
import { Meta } from '@storybook/react'
import { StickerSheet, StickerSheetStory } from '~storybook/components/StickerSheet'
import { EditableRichTextContent } from '../index'
import defaultContent from './defaultContent.json'

const meta = {
  title: 'Components/RichTextEditor/EditableRichTextContent',
  component: EditableRichTextContent,
} satisfies Meta<typeof EditableRichTextContent>

export default meta

const StickerSheetTemplate: StickerSheetStory = {
  render: () => (
    <StickerSheet title="EditableRichTextContent" layout="stretch">
      <StickerSheet.Row header="Default">
        <EditableRichTextContent onClick={action('Toggle RTE')} content={[]} labelText="Label" />
        <EditableRichTextContent
          onClick={action('Toggle RTE')}
          content={defaultContent}
          labelText="Label"
        />
      </StickerSheet.Row>
      <StickerSheet.Row header="Hover">
        <EditableRichTextContent
          onClick={action('Toggle RTE')}
          data-sb-pseudo-styles="hover"
          content={[]}
          labelText="Label"
        />
        <EditableRichTextContent
          onClick={action('Toggle RTE')}
          data-sb-pseudo-styles="hover"
          content={defaultContent}
          labelText="Label"
        />
      </StickerSheet.Row>
      <StickerSheet.Row header="Focus">
        <EditableRichTextContent
          onClick={action('Toggle RTE')}
          data-sb-pseudo-styles="focusWithin"
          content={[]}
          labelText="Label"
        />
        <EditableRichTextContent
          onClick={action('Toggle RTE')}
          data-sb-pseudo-styles="focusWithin"
          content={defaultContent}
          labelText="Label"
        />
      </StickerSheet.Row>
    </StickerSheet>
  ),
  parameters: {
    pseudo: {
      hover: ['[data-sb-pseudo-styles="hover"]'],
      focusWithin: ['[data-sb-pseudo-styles="focusWithin"] > [class^="VisuallyHidden"]'],
    },
  },
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
