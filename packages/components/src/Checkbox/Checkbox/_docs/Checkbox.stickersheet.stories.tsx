import React from 'react'
import { type Meta } from '@storybook/react'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { Checkbox, type CheckboxProps } from '../index'

export default {
  title: 'Components/Checkboxes/Checkbox (primitive)',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
    a11y: {
      config: {
        rules: [
          {
            // Built with no label on purpose, to be used within `CheckboxField` where label is present
            id: 'label',
            enabled: false,
          },
        ],
      },
    },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => {
    const defaultProps = {
      onCheck: () => undefined,
      reversed: isReversed,
    } satisfies Partial<CheckboxProps>

    const rows = [
      { title: 'Off', checkedStatus: 'off' },
      { title: 'On', checkedStatus: 'on' },
      { title: 'Mixed', checkedStatus: 'mixed' },
    ] satisfies {
      title: string
      checkedStatus: CheckboxProps['checkedStatus']
    }[]

    return (
      <StickerSheet isReversed={isReversed} headers={['Default', 'Hover', 'Focus', 'Disabled']}>
        {rows.map(({ title, checkedStatus }) => (
          <StickerSheet.Row key={title} header={title}>
            <Checkbox {...defaultProps} checkedStatus={checkedStatus} />
            <Checkbox
              {...defaultProps}
              checkedStatus={checkedStatus}
              data-sb-pseudo-styles="hover"
            />
            <Checkbox
              {...defaultProps}
              checkedStatus={checkedStatus}
              data-sb-pseudo-styles="focus"
            />
            <Checkbox {...defaultProps} checkedStatus={checkedStatus} disabled />
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
