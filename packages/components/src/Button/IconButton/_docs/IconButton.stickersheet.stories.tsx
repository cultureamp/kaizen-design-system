import React from 'react'
import { Meta } from '@storybook/react'
import type { ButtonProps } from '~components/Button'
import { Icon } from '~components/__rc__/Icon'
import { StickerSheet, StickerSheetStory } from '~storybook/components/StickerSheet'
import { IconButton, IconButtonProps } from '../index'

export default {
  title: 'Components/IconButton/IconButton (v1)',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const WORKING_PROPS: ButtonProps = {
  label: 'Label',
  working: true,
  workingLabel: 'Submitting',
  workingLabelHidden: true,
}
const REVERSED__VARIANT_PROPS: {
  title: string
  props: IconButtonProps
}[] = [
  {
    title: 'Default',
    props: {
      label: 'Default label',
      icon: <Icon name="more_horiz" isPresentational />,
    },
  },
  {
    title: 'Primary',
    props: {
      label: 'Primary label',
      icon: <Icon name="more_horiz" isPresentational />,
      primary: true,
    },
  },
  {
    title: 'Destructive',
    props: {
      label: 'Label',
      icon: <Icon name="delete" isPresentational isFilled />,
      destructive: true,
    },
  },
  {
    title: 'Secondary',
    props: {
      label: 'Label',
      icon: <Icon name="tune" isPresentational />,
      secondary: true,
    },
  },
]

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => {
    const VARIANTS_PROPS: {
      title: string
      props: ButtonProps
    }[] = isReversed
      ? REVERSED__VARIANT_PROPS
      : [
          ...REVERSED__VARIANT_PROPS,
          {
            title: 'Secondary Destructive',
            props: {
              label: 'Label',
              icon: <Icon name="delete" isPresentational isFilled />,
              secondary: true,
              destructive: true,
            },
          },
        ]
    return (
      <StickerSheet
        isReversed={isReversed}
        headers={['Base', 'Hover', 'Active', 'Focus', 'Disabled', 'Working']}
      >
        {VARIANTS_PROPS.map(({ title, props }) => (
          <StickerSheet.Row key={title} header={title}>
            <IconButton reversed={isReversed} {...props} />
            <IconButton reversed={isReversed} data-sb-pseudo-styles="hover" {...props} />
            <IconButton reversed={isReversed} data-sb-pseudo-styles="active" {...props} />
            <IconButton reversed={isReversed} data-sb-pseudo-styles="focus" {...props} />
            <IconButton reversed={isReversed} {...props} disabled />
            <IconButton reversed={isReversed} {...props} {...WORKING_PROPS} />
          </StickerSheet.Row>
        ))}
      </StickerSheet>
    )
  },
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
