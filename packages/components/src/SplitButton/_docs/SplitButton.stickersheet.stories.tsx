import React from 'react'
import { type Meta } from '@storybook/react'
import {
  exampleActionButtonPropsAnchor,
  exampleActionButtonPropsButton,
  exampleDropdownContentEnabled,
} from '~components/Menu/_docs/examples'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { SplitButton, type SplitButtonProps } from '../index'

export default {
  title: 'Components/SplitButton (deprecated)',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const ROWS_MAP = [
  {
    rowTitle: 'Default',
    actionButtonProps: exampleActionButtonPropsButton,
    dropdownContent: exampleDropdownContentEnabled,
  },
  {
    rowTitle: 'Anchor Link',
    actionButtonProps: exampleActionButtonPropsAnchor,
    dropdownContent: exampleDropdownContentEnabled,
  },
] satisfies ({ rowTitle: string } & SplitButtonProps)[]

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <>
      <StickerSheet isReversed={isReversed} title="Split Button" headers={['Base', 'Disabled']}>
        {ROWS_MAP.map(({ rowTitle, ...props }) => (
          <StickerSheet.Row key={rowTitle} header={rowTitle}>
            <SplitButton isReversed={isReversed} {...props} />
            <SplitButton isReversed={isReversed} disabled {...props} />
          </StickerSheet.Row>
        ))}
      </StickerSheet>

      <StickerSheet
        isReversed={isReversed}
        title="Pseudo states"
        headers={['Hover', 'Active', 'Focus']}
      >
        <StickerSheet.Row header="Action button">
          <SplitButton
            isReversed={isReversed}
            actionButtonProps={{
              ...exampleActionButtonPropsButton,
              'data-sb-pseudo-styles': 'hover',
            }}
            dropdownContent={exampleDropdownContentEnabled}
          />
          <SplitButton
            isReversed={isReversed}
            actionButtonProps={{
              ...exampleActionButtonPropsButton,
              'data-sb-pseudo-styles': 'active',
            }}
            dropdownContent={exampleDropdownContentEnabled}
          />
          <SplitButton
            isReversed={isReversed}
            actionButtonProps={{
              ...exampleActionButtonPropsButton,
              'data-sb-pseudo-styles': 'focus',
            }}
            dropdownContent={exampleDropdownContentEnabled}
          />
        </StickerSheet.Row>
        <StickerSheet.Row header="Dropdown button">
          <SplitButton
            isReversed={isReversed}
            actionButtonProps={exampleActionButtonPropsButton}
            dropdownContent={exampleDropdownContentEnabled}
            dropdownButtonProps={{ 'data-sb-pseudo-styles': 'hover' }}
          />
          <SplitButton
            isReversed={isReversed}
            actionButtonProps={exampleActionButtonPropsButton}
            dropdownContent={exampleDropdownContentEnabled}
            dropdownButtonProps={{ 'data-sb-pseudo-styles': 'active' }}
          />
          <SplitButton
            isReversed={isReversed}
            actionButtonProps={exampleActionButtonPropsButton}
            dropdownContent={exampleDropdownContentEnabled}
            dropdownButtonProps={{ 'data-sb-pseudo-styles': 'focus' }}
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
