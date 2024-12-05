import React from 'react'
import { Meta } from '@storybook/react'
import { StickerSheet, StickerSheetStory } from '~storybook/components/StickerSheet'
import { Slider } from '../index'

export default {
  title: 'Components/Slider',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: () => (
    <StickerSheet
      title="Slider"
      headers={['Default', 'Default (Disabled)', 'Prominent', 'Prominent (Disabled)']}
    >
      <StickerSheet.Row header="Label Left">
        <Slider
          labelText="Slider"
          description="Example Description"
          minLabel="Min"
          maxLabel="Max"
        />
        <Slider
          labelText="Slider"
          description={<span data-sb-a11y-color-contrast-disable>Example Description</span>}
          minLabel={<span data-sb-a11y-color-contrast-disable>Min</span>}
          maxLabel={<span data-sb-a11y-color-contrast-disable>Max</span>}
          disabled
          data-sb-a11y-color-contrast-disable
        />
        <Slider
          labelText="Slider"
          description="Example Description"
          minLabel="Min"
          maxLabel="Max"
          variant="prominent"
        />
        <Slider
          labelText="Slider"
          description={<span data-sb-a11y-color-contrast-disable>Example Description</span>}
          minLabel={<span data-sb-a11y-color-contrast-disable>Min</span>}
          maxLabel={<span data-sb-a11y-color-contrast-disable>Max</span>}
          variant="prominent"
          disabled
          data-sb-a11y-color-contrast-disable
        />
      </StickerSheet.Row>
      <StickerSheet.Row header="Label Top">
        <Slider
          labelText="Slider"
          description="Example Description"
          minLabel="Min"
          maxLabel="Max"
          labelPosition="block"
        />
        <Slider
          labelText="Slider"
          description={<span data-sb-a11y-color-contrast-disable>Example Description</span>}
          minLabel={<span data-sb-a11y-color-contrast-disable>Min</span>}
          maxLabel={<span data-sb-a11y-color-contrast-disable>Max</span>}
          labelPosition="block"
          disabled
          data-sb-a11y-color-contrast-disable
        />
        <Slider
          labelText="Slider"
          description="Example Description"
          minLabel={<span data-sb-a11y-color-contrast-disable>Min</span>}
          maxLabel={<span data-sb-a11y-color-contrast-disable>Max</span>}
          labelPosition="block"
          variant="prominent"
        />
        <Slider
          labelText="Slider"
          description={<span data-sb-a11y-color-contrast-disable>Example Description</span>}
          minLabel={<span data-sb-a11y-color-contrast-disable>Min</span>}
          maxLabel={<span data-sb-a11y-color-contrast-disable>Max</span>}
          variant="prominent"
          labelPosition="block"
          disabled
          data-sb-a11y-color-contrast-disable
        />
      </StickerSheet.Row>
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
  parameters: { textDirection: 'rtl' },
}
