import React from 'react'
import { type Meta } from '@storybook/react'
import { Label } from '~components/Label'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { FieldGroup } from '../index'

export default {
  title: 'Components/Form primitives/FieldGroup',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const FieldGroupTemplate = ({
  id,
  inline = false,
}: {
  id: string
  inline?: boolean
}): JSX.Element => (
  <div>
    <FieldGroup inline={inline} classNameOverride="mr-6">
      <Label htmlFor={`id--field-${id}`}>Email</Label>
      <input className="border border-gray-500" type="text" id="id--field-2" />
    </FieldGroup>
    <FieldGroup inline={inline}>
      <Label htmlFor={`id--field-${id}`}>Username</Label>
      <input className="border border-gray-500" type="text" id="id--field-2" />
    </FieldGroup>
  </div>
)

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet isReversed={isReversed} headers={['Default', 'Inline']}>
      <StickerSheet.Row>
        <FieldGroupTemplate id="1" />
        <FieldGroupTemplate id="2" inline={true} />
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
