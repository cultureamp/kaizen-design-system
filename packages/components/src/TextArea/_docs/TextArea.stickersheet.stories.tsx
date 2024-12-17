import React from 'react'
import { Meta } from '@storybook/react'
import { StickerSheet, StickerSheetStory } from '~storybook/components/StickerSheet'
import { TextArea } from '../index'

export default {
  title: 'Components/Text Input controls/TextArea',
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
        <TextArea
          rows={1}
          value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis nisi sit amet consectetur ultricies. Vestibulum porta arcu vitae erat egestas pulvinar. Proin tincidunt mi ultricies risus ultrices semper. Donec consequat, mi at tincidunt mattis, felis metus semper metus, a imperdiet justo odio ac elit. Nulla et lacinia enim. Donec placerat, arcu a hendrerit iaculis, massa ante venenatis urna, vitae vestibulum massa orci et erat. Sed in cursus arcu. Fusce fringilla urna tincidunt risus sodales mollis. Ut sit amet mi vitae justo aliquam congue eget eu nisl. Mauris sit amet dolor fermentum, rutrum orci eget, feugiat mi. Etiam feugiat auctor augue, non volutpat nisi aliquet non. Praesent dignissim, lacus id iaculis porttitor, purus libero fermentum urna, in faucibus massa enim sed dui. Maecenas et nisi in nulla condimentum dictum. Maecenas tincidunt turpis non consequat pharetra. Suspendisse in auctor erat, vel ullamcorper elit. Nullam rutrum pharetra turpis, id luctus nisi sollicitudin ac. Maecenas sodales malesuada orci. Integer ultrices, nisi non blandit commodo, turpis enim iaculis ante, vel blandit diam sapien eget justo. Mauris scelerisque euismod quam, nec accumsan lorem venenatis vel. Sed rhoncus purus turpis, vel efficitur metus placerat et."
          autogrow
        />
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
