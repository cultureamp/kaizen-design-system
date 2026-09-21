import React from 'react'
import { type Meta } from '@storybook/react'
import isChromatic from 'chromatic'
import { FilterButton } from '~components/Filter/FilterButton'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { Filter, FilterContents } from '../index'

const IS_CHROMATIC = isChromatic()

export default {
  title: 'Components/Filter Base',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(true)

    return (
      <StickerSheet
        title="Filter"
        style={{ paddingBottom: IS_CHROMATIC ? '6rem' : undefined }}
        headers={['Open']}
      >
        <StickerSheet.Row>
          <Filter
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            renderTrigger={(triggerProps): JSX.Element => (
              <FilterButton label="Label" {...triggerProps} />
            )}
          >
            <FilterContents>Filter Contents</FilterContents>
          </Filter>
        </StickerSheet.Row>
      </StickerSheet>
    )
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
