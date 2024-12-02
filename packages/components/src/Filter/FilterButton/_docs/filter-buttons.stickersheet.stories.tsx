import React from 'react'
import { Meta } from '@storybook/react'
import { StickerSheet, StickerSheetStory } from '~storybook/components/StickerSheet'
import { FilterButton } from '../FilterButton'
import { FilterButtonRemovable } from '../FilterButtonRemovable'
import { FilterButtonBase } from '../subcomponents/FilterButtonBase'

export default {
  title: 'Components/Filter Base/Filter Buttons',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: () => (
    <>
      <StickerSheet title="Filter Button Base" headers={['Default', 'Hover', 'Active', 'Focus']}>
        <StickerSheet.Row>
          <FilterButtonBase>Label</FilterButtonBase>
          <FilterButtonBase data-sb-pseudo-styles="hover" data-sb-a11y-color-contrast-disable>
            Label
          </FilterButtonBase>
          <FilterButtonBase data-sb-pseudo-styles="active" data-sb-a11y-color-contrast-disable>
            Label
          </FilterButtonBase>
          <FilterButtonBase data-sb-pseudo-styles="focus" data-sb-a11y-color-contrast-disable>
            Label
          </FilterButtonBase>
        </StickerSheet.Row>
      </StickerSheet>

      <StickerSheet title="Filter Button" headers={['Closed', 'Open', 'Has selected value']}>
        <StickerSheet.Row>
          <FilterButton label="Desserts" />
          <FilterButton label="Desserts" isOpen />
          <FilterButton label="Desserts" selectedValue="Cake" />
        </StickerSheet.Row>
      </StickerSheet>

      <StickerSheet title="Filter Button Removable">
        <StickerSheet.Row>
          <FilterButtonRemovable
            triggerButtonProps={{
              label: 'Desserts',
            }}
            removeButtonProps={{
              onClick: () => undefined,
            }}
          />
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

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (RTL)',
  parameters: {
    ...StickerSheetTemplate['parameters'],
    textDirection: 'rtl',
  },
}
