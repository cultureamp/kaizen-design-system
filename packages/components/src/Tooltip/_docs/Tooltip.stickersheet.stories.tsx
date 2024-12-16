import React from 'react'
import { Meta } from '@storybook/react'
import isChromatic from 'chromatic/isChromatic'
import { IconButton } from '~components/__actions__/v2'
import { Icon } from '~components/__future__/Icon'
import { StickerSheet, StickerSheetStory } from '~storybook/components/StickerSheet'
import { Tooltip } from '../index'

const IS_CHROMATIC = isChromatic()

export default {
  title: 'Components/Tooltip/Tooltip (Future)',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
  args: {
    isInitiallyVisible: IS_CHROMATIC,
  },
} satisfies Meta

const cellStyle = {
  padding: '0 50px',
}

const StickerSheetTemplate: StickerSheetStory = {
  render: (props) => (
    <div style={{ padding: '50px 100px' }}>
      <StickerSheet title="Positions" headers={['Top', 'Bottom', 'Left', 'Right']}>
        <StickerSheet.Row>
          <StickerSheet.Cell style={cellStyle}>
            <Tooltip {...props} position="above" text="Tooltip label">
              <IconButton label="Label" icon={<Icon name="more_horiz" isPresentational />} />
            </Tooltip>
          </StickerSheet.Cell>
          <StickerSheet.Cell style={cellStyle}>
            <Tooltip {...props} position="below" text="Tooltip label">
              <IconButton label="Label" icon={<Icon name="more_horiz" isPresentational />} />
            </Tooltip>
          </StickerSheet.Cell>
          <StickerSheet.Cell style={cellStyle}>
            <Tooltip {...props} position="left" text="Tooltip label">
              <IconButton label="Label" icon={<Icon name="more_horiz" isPresentational />} />
            </Tooltip>
          </StickerSheet.Cell>
          <StickerSheet.Cell style={cellStyle}>
            <Tooltip {...props} position="right" text="Tooltip label" mood="default">
              <IconButton label="Label" icon={<Icon name="more_horiz" isPresentational />} />
            </Tooltip>
          </StickerSheet.Cell>
        </StickerSheet.Row>
      </StickerSheet>

      <StickerSheet
        title="Moods"
        headers={['Default', 'Informative', 'Positive', 'Highlight', 'Cautionary']}
      >
        <StickerSheet.Row>
          <StickerSheet.Cell style={cellStyle}>
            <Tooltip {...props} text="Tooltip label" mood="default">
              <IconButton label="Label" icon={<Icon name="more_horiz" isPresentational />} />
            </Tooltip>
          </StickerSheet.Cell>
          <StickerSheet.Cell style={cellStyle}>
            <Tooltip {...props} text="Tooltip label" mood="informative">
              <IconButton label="Label" icon={<Icon name="more_horiz" isPresentational />} />
            </Tooltip>
          </StickerSheet.Cell>
          <StickerSheet.Cell style={cellStyle}>
            <Tooltip {...props} text="Tooltip label" mood="positive">
              <IconButton label="Label" icon={<Icon name="more_horiz" isPresentational />} />
            </Tooltip>
          </StickerSheet.Cell>
          <StickerSheet.Cell style={cellStyle}>
            <Tooltip {...props} text="Tooltip label" mood="highlight">
              <IconButton label="Label" icon={<Icon name="more_horiz" isPresentational />} />
            </Tooltip>
          </StickerSheet.Cell>
          <StickerSheet.Cell style={cellStyle}>
            <Tooltip {...props} text="Tooltip label" mood="cautionary">
              <IconButton label="Label" icon={<Icon name="more_horiz" isPresentational />} />
            </Tooltip>
          </StickerSheet.Cell>
        </StickerSheet.Row>
      </StickerSheet>
    </div>
  ),
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
