import React from 'react'
import { type Meta } from '@storybook/react'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { usePopover, type PopoverProps } from '../index'
import { popoverPlacements } from '../types'

export default {
  title: 'Components/Popover',
  parameters: {
    chromatic: { disable: false, diffThreshold: 1 },
    controls: { disable: true },
  },
} satisfies Meta

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
    <StickerSheet
      isReversed={isReversed}
      headers={['Default', 'Positive', 'Informative', 'Negative', 'Cautionary']}
      className="min-w-fit"
    >
      <StickerSheet.Row header="Variants (deprecated)">
        <StickerSheet.Cell style={cellStyle}>
          <PopoverWrapper />
        </StickerSheet.Cell>
        <StickerSheet.Cell style={cellStyle}>
          <PopoverWrapper color="green" heading="Positive" />
        </StickerSheet.Cell>
        <StickerSheet.Cell style={cellStyle}>
          <PopoverWrapper color="blue" heading="Informative" />
        </StickerSheet.Cell>
        <StickerSheet.Cell style={cellStyle}>
          <PopoverWrapper color="red" heading="Negative" />
        </StickerSheet.Cell>
        <StickerSheet.Cell style={cellStyle}>
          <PopoverWrapper color="yellow" heading="Cautionary" />
        </StickerSheet.Cell>
      </StickerSheet.Row>

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
