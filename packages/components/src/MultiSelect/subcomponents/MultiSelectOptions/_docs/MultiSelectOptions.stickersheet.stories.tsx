import React from 'react'
import { type Meta } from '@storybook/react'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { MultiSelectOptions, type MultiSelectOptionsProps } from '../index'

export default {
  title: 'Components/MultiSelect/MultiSelectOptions',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const options = [
  {
    label: 'Pancakes',
    value: 'pancakes',
  },
  {
    label: 'Waffle',
    value: 'waffle',
  },
  {
    label: 'Toastie',
    value: 'toastie',
  },
] satisfies MultiSelectOptionsProps['options']

const StickerSheetTemplate: StickerSheetStory = {
  render: () => (
    <StickerSheet headers={['Default', 'Focus + Hover', 'Empty state']}>
      <StickerSheet.Row>
        <MultiSelectOptions
          id="id--multi-select-options--default"
          options={options}
          selectedValues={new Set()}
          onChange={() => undefined}
        />
        <MultiSelectOptions
          id="id--multi-select-options--pseudo"
          options={options}
          selectedValues={new Set(['pancakes'])}
          onChange={() => undefined}
        />
        <MultiSelectOptions
          id="id--multi-select-options--empty-state"
          options={[]}
          selectedValues={new Set()}
          onChange={() => undefined}
        />
      </StickerSheet.Row>
    </StickerSheet>
  ),
  parameters: {
    pseudo: {
      focusWithin: '#id--multi-select-options--pseudo > div:nth-of-type(1)',
      hover: '#id--multi-select-options--pseudo > div:nth-of-type(2)',
    },
  },
}

export const StickerSheetDefault = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (Default)',
}
