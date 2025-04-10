import React from 'react'
import { type Meta } from '@storybook/react'
import { Icon } from '~components/__next__/Icon'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { Input, type InputProps } from '../index'
import { InputStatus, InputTypes } from '../types'

export default {
  title: 'Components/TextField/Input (primitive)',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
    a11y: {
      config: {
        rules: [
          {
            // Built with no label on purpose, to be used within `TextField` where label is present
            id: 'label',
            enabled: false,
          },
        ],
      },
    },
  },
} satisfies Meta

const InputExampleGroup = (props: InputProps): JSX.Element => (
  <ul className="grid gap-16 list-none p-0 m-0">
    {InputTypes.map((type) => (
      <li key={type}>
        <Input
          value={type}
          type={type}
          startIconAdornment={
            <Icon
              name="edit"
              isPresentational
              data-sb-a11y-color-contrast-disable={props.disabled ? 'true' : 'false'}
            />
          }
          endIconAdornment={
            <Icon
              name="close"
              isPresentational
              data-sb-a11y-color-contrast-disable={props.disabled ? 'true' : 'false'}
            />
          }
          {...props}
        />
      </li>
    ))}
  </ul>
)

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet
      isReversed={isReversed}
      headers={['Default', 'Hover', 'Active', 'Focus', 'Disabled']}
    >
      {InputStatus.map((status) => (
        <StickerSheet.Row key={status} header={status}>
          <InputExampleGroup reversed={isReversed} />
          <InputExampleGroup status={status} reversed={isReversed} data-sb-pseudo-styles="hover" />
          <InputExampleGroup status={status} reversed={isReversed} data-sb-pseudo-styles="active" />
          <InputExampleGroup status={status} reversed={isReversed} data-sb-pseudo-styles="focus" />
          <InputExampleGroup
            status={status}
            reversed={isReversed}
            disabled
            data-sb-a11y-color-contrast-disable
          />
        </StickerSheet.Row>
      ))}
    </StickerSheet>
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

export const StickerSheetReversed: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (Reversed)',
  parameters: { backgrounds: { default: 'Purple 700' } },
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
