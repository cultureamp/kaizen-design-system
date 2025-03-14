import React from 'react'
import { type Meta } from '@storybook/react'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { CheckboxField, type CheckboxFieldProps } from '../index'

export default {
  title: 'Components/Checkboxes/CheckboxField',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => {
    const defaultProps = {
      onCheck: () => undefined,
      reversed: isReversed,
    } satisfies Partial<CheckboxFieldProps>

    const rows = [
      { title: 'Off', checkedStatus: 'off' },
      { title: 'On', checkedStatus: 'on' },
      { title: 'Mixed', checkedStatus: 'mixed' },
    ] satisfies {
      title: string
      checkedStatus: CheckboxFieldProps['checkedStatus']
    }[]

    return (
      <StickerSheet isReversed={isReversed} headers={['Default', 'Hover', 'Focus', 'Disabled']}>
        {rows.map(({ title, checkedStatus }) => (
          <StickerSheet.Row key={title} header={title}>
            <CheckboxField {...defaultProps} labelText="Checkbox" checkedStatus={checkedStatus} />
            <CheckboxField
              {...defaultProps}
              labelText="Hover"
              checkedStatus={checkedStatus}
              data-sb-pseudo-styles="hover"
            />
            <CheckboxField
              {...defaultProps}
              labelText="Focus"
              checkedStatus={checkedStatus}
              data-sb-pseudo-styles="focus"
            />
            <CheckboxField
              {...defaultProps}
              labelText="Disabled"
              checkedStatus={checkedStatus}
              disabled
            />
          </StickerSheet.Row>
        ))}
      </StickerSheet>
    )
  },
  parameters: {
    pseudo: {
      hover: '[data-sb-pseudo-styles="hover"]',
      focus: '[data-sb-pseudo-styles="focus"]',
      focusVisible: '[data-sb-pseudo-styles="focus"]',
    },
  },
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (Default)',
}

export const StickerSheetReversed: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (Reversed)',
  parameters: {
    ...StickerSheetTemplate.parameters,
    backgrounds: { default: 'Purple 700' },
  },
  args: { isReversed: true },
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (RTL)',
  parameters: {
    ...StickerSheetTemplate.parameters,
    textDirection: 'rtl',
  },
}
