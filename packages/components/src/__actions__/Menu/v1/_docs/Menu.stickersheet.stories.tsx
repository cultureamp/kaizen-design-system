import React from 'react'
import { Meta } from '@storybook/react'
import { Button } from '~components/Button'
import { Icon } from '~components/__rc__/Icon'
import { StickerSheet, StickerSheetStory } from '~storybook/components/StickerSheet'
import { Menu } from '../index'
import { MenuContentExample } from './MenuContentExample'

export default {
  title: 'Components/Menu/Menu (v1)',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet isReversed={isReversed} headers={['Long list', 'Short List']}>
      <StickerSheet.Row>
        <StickerSheet.Cell style={{ width: 250 }}>
          <Menu
            menuVisible
            autoHide="off"
            button={
              <Button
                label="Menu"
                icon={<Icon name="keyboard_arrow_down" isPresentational />}
                iconPosition="end"
              />
            }
          >
            <MenuContentExample />
          </Menu>
        </StickerSheet.Cell>
        <StickerSheet.Cell style={{ width: 250 }}>
          <Menu
            menuVisible
            autoHide="off"
            button={
              <Button
                label="Menu"
                icon={<Icon name="keyboard_arrow_down" isPresentational />}
                iconPosition="end"
              />
            }
          >
            <MenuContentExample isShortList />
          </Menu>
        </StickerSheet.Cell>
      </StickerSheet.Row>
    </StickerSheet>
  ),
  decorators: [
    (Story) => (
      <div style={{ minHeight: '500px' }}>
        <Story />
      </div>
    ),
  ],
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (Default)',
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (RTL)',
  parameters: {
    textDirection: 'rtl',
  },
}
