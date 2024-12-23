import React from 'react'
import { type Meta } from '@storybook/react'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { Checkbox, type CheckedStatus } from '../index'

export default {
  title: 'Components/MultiSelect/Checkbox',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const STATUS_ROWS = [
  { title: 'Unchecked', status: 'unchecked' },
  { title: 'Checked', status: 'checked' },
  { title: 'Indeterminate', status: 'indeterminate' },
] satisfies { title: string; status: CheckedStatus }[]

const StickerSheetTemplate: StickerSheetStory = {
  render: () => (
    <StickerSheet headers={['Default', 'Hover', 'Focus']}>
      {STATUS_ROWS.map(({ title, status }) => (
        <StickerSheet.Row key={title} header={title}>
          <Checkbox aria-label="Read only label" checkedStatus={status} readOnly />
          <Checkbox
            aria-label="Hover label"
            classNameOverride="story__checkbox--hover"
            checkedStatus={status}
            readOnly
          />
          <Checkbox
            aria-label="Focus label"
            classNameOverride="story__checkbox--focus"
            checkedStatus={status}
            readOnly
          />
        </StickerSheet.Row>
      ))}
    </StickerSheet>
  ),
  parameters: {
    pseudo: {
      // We need to use `classNameOverride` to target the container div
      // as data-attributes are passed into the input.
      hover: '.story__checkbox--hover',
      focusWithin: '.story__checkbox--focus',
    },
  },
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (Default)',
}
