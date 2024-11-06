import React from 'react'
import { Meta } from '@storybook/react'
import {
  StickerSheet,
  StickerSheetStory,
} from '~storybook/components/StickerSheet'
import { Checkbox, CheckboxProps } from '../index'

export default {
  title: 'Components/Checkbox controls/Checkbox',
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
    ] satisfies Array<{
      title: string
      checkedStatus: CheckboxProps['checkedStatus']
    }>

    return (
      <StickerSheet isReversed={isReversed}>
        <StickerSheet.Header
          headings={['Default', 'Hover', 'Focus', 'Disabled']}
          hasVerticalHeadings
        />
        <StickerSheet.Body>
          {rows.map(({ title, checkedStatus }) => (
            <StickerSheet.Row key={title} rowTitle={title}>
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
              <Checkbox
                {...defaultProps}
                checkedStatus={checkedStatus}
                disabled
              />
            </StickerSheet.Row>
          ))}
        </StickerSheet.Body>
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
