import React from 'react'
import { type Meta } from '@storybook/react'
import * as ICONS from '~components/Icon'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'

export default {
  title: 'Components/Icon',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} as Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: () => (
    <StickerSheet title="Icons" headers={['Default', 'Color']}>
      {Object.keys(ICONS).map((iconName) => {
        const icon = ICONS[iconName as keyof typeof ICONS]({
          role: 'presentation',
        })
        return (
          <StickerSheet.Row key={iconName} header={iconName}>
            {icon}
            <StickerSheet.Cell className="text-green-400">{icon}</StickerSheet.Cell>
          </StickerSheet.Row>
        )
      })}
    </StickerSheet>
  ),
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (Default)',
}
