import React from 'react'
import { type Meta } from 'storybook'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { usePopover, type PopoverProps } from '../index'
import { popoverPlacements } from '../types'

export default {
  title: 'Components/Popover',
  parameters: {
    chromatic: { disable: false, diffThreshold: 1 },
    controls: { disable: true },
  },
} satisfies any

const PopoverWrapper = (
  props: Omit<PopoverProps, 'children' | 'referenceElement'>,
): JSX.Element => {
  const [referenceElementRef, Popover] = usePopover()

  return (
    <div className="text-center">
      <button type="button" className="inline-block" ref={referenceElementRef}>
        Pop
      </button>
      <Popover {...props}>Hello world</Popover>
    </div>
  )
}

const cellStyle = {
  display: 'grid',
  placeContent: 'center',
  width: '220px',
  height: '250px',
}

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet isReversed={isReversed} className="min-w-fit">
      {popoverPlacements.map((placement) => (
        <StickerSheet.Row key={placement} header={placement}>
          <StickerSheet.Cell style={cellStyle}>
            <PopoverWrapper placement={placement} />
          </StickerSheet.Cell>
        </StickerSheet.Row>
      ))}
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
  parameters: {
    textDirection: 'rtl',
  },
}
