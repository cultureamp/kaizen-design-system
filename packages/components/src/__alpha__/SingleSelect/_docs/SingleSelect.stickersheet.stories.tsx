import React from 'react'
import { type Meta } from '@storybook/react'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { SingleSelect } from '../index'
import { groupedMockItems, singleMockItems } from './mockData'

export default {
  title: 'Components/SingleSelect/SingleSelect (alpha)',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => {
    return (
      <StickerSheet isReversed={isReversed} title="SingleSelect" headers={['Combobox', 'Select']}>
        <StickerSheet.Row>
          <SingleSelect label="Pick a colour" isComboBox description="Default">
            {singleMockItems.map((item) => (
              <SingleSelect.Item key={item.key}>{item.label}</SingleSelect.Item>
            ))}
          </SingleSelect>

          <SingleSelect label="Pick a colour" description="Default">
            {singleMockItems.map((item) => (
              <SingleSelect.Item key={item.key}>{item.label}</SingleSelect.Item>
            ))}
          </SingleSelect>
        </StickerSheet.Row>

        <StickerSheet.Row>
          <SingleSelect label="Pick a colour" isComboBox description="Grouped">
            {groupedMockItems.map((section) => (
              <SingleSelect.Section key={section.label} title={section.label}>
                {section.options.map((item) => (
                  <SingleSelect.Item key={item.key}>{item.label}</SingleSelect.Item>
                ))}
              </SingleSelect.Section>
            ))}
          </SingleSelect>

          <SingleSelect label="Pick a colour" description="Grouped">
            {groupedMockItems.map((section) => (
              <SingleSelect.Section key={section.label} title={section.label}>
                {section.options.map((item) => (
                  <SingleSelect.Item key={item.key}>{item.label}</SingleSelect.Item>
                ))}
              </SingleSelect.Section>
            ))}
          </SingleSelect>
        </StickerSheet.Row>

        <StickerSheet.Row>
          <SingleSelect label="Pick a colour" isComboBox description="Label hidden" labelHidden>
            {groupedMockItems.map((section) => (
              <SingleSelect.Section key={section.label} title={section.label}>
                {section.options.map((item) => (
                  <SingleSelect.Item key={item.key}>{item.label}</SingleSelect.Item>
                ))}
              </SingleSelect.Section>
            ))}
          </SingleSelect>

          <SingleSelect label="Pick a colour" description="Label hidden" labelHidden>
            {groupedMockItems.map((section) => (
              <SingleSelect.Section key={section.label} title={section.label}>
                {section.options.map((item) => (
                  <SingleSelect.Item key={item.key}>{item.label}</SingleSelect.Item>
                ))}
              </SingleSelect.Section>
            ))}
          </SingleSelect>
        </StickerSheet.Row>

        <StickerSheet.Row>
          <SingleSelect label="Coffee" isComboBox description="inline" labelPosition="side">
            {singleMockItems.map((item) => (
              <SingleSelect.Item key={item.key}>{item.label}</SingleSelect.Item>
            ))}
          </SingleSelect>

          <SingleSelect label="Coffee" description="inline" labelPosition="side">
            {singleMockItems.map((item) => (
              <SingleSelect.Item key={item.key}>{item.label}</SingleSelect.Item>
            ))}
          </SingleSelect>
        </StickerSheet.Row>

        <StickerSheet.Row>
          <SingleSelect label="Coffee" isComboBox isDisabled description="disabled">
            {singleMockItems.map((item) => (
              <SingleSelect.Item key={item.key}>{item.label}</SingleSelect.Item>
            ))}
          </SingleSelect>

          <SingleSelect label="Coffee" isDisabled description="disabled">
            {singleMockItems.map((item) => (
              <SingleSelect.Item key={item.key}>{item.label}</SingleSelect.Item>
            ))}
          </SingleSelect>
        </StickerSheet.Row>

        <StickerSheet.Row>
          <SingleSelect label="Coffee" isComboBox isReadOnly description="read only">
            {singleMockItems.map((item) => (
              <SingleSelect.Item key={item.key}>{item.label}</SingleSelect.Item>
            ))}
          </SingleSelect>

          <SingleSelect label="Coffee" isReadOnly description="read only">
            {singleMockItems.map((item) => (
              <SingleSelect.Item key={item.key}>{item.label}</SingleSelect.Item>
            ))}
          </SingleSelect>
        </StickerSheet.Row>

        <StickerSheet.Row>
          <SingleSelect label="Coffee" isComboBox variant="secondary" description="secondary">
            {singleMockItems.map((item) => (
              <SingleSelect.Item key={item.key}>{item.label}</SingleSelect.Item>
            ))}
          </SingleSelect>

          <SingleSelect label="Coffee" variant="secondary" description="secondary">
            {singleMockItems.map((item) => (
              <SingleSelect.Item key={item.key}>{item.label}</SingleSelect.Item>
            ))}
          </SingleSelect>
        </StickerSheet.Row>

        <StickerSheet.Row>
          <SingleSelect label="Coffee" isComboBox size="small" description="small">
            {singleMockItems.map((item) => (
              <SingleSelect.Item key={item.key}>{item.label}</SingleSelect.Item>
            ))}
          </SingleSelect>

          <SingleSelect label="Coffee" size="small" description="small">
            {singleMockItems.map((item) => (
              <SingleSelect.Item key={item.key}>{item.label}</SingleSelect.Item>
            ))}
          </SingleSelect>
        </StickerSheet.Row>

        <StickerSheet.Row>
          <SingleSelect label="Coffee" isComboBox size="medium" description="medium">
            {singleMockItems.map((item) => (
              <SingleSelect.Item key={item.key}>{item.label}</SingleSelect.Item>
            ))}
          </SingleSelect>

          <SingleSelect label="Coffee" size="medium" description="medium">
            {singleMockItems.map((item) => (
              <SingleSelect.Item key={item.key}>{item.label}</SingleSelect.Item>
            ))}
          </SingleSelect>
        </StickerSheet.Row>

        <StickerSheet.Row>
          <SingleSelect label="Coffee" isComboBox size="large" description="large">
            {singleMockItems.map((item) => (
              <SingleSelect.Item key={item.key}>{item.label}</SingleSelect.Item>
            ))}
          </SingleSelect>

          <SingleSelect label="Coffee" size="large" description="large">
            {singleMockItems.map((item) => (
              <SingleSelect.Item key={item.key}>{item.label}</SingleSelect.Item>
            ))}
          </SingleSelect>
        </StickerSheet.Row>

        <StickerSheet.Row>
          <SingleSelect
            label="Coffee"
            isComboBox
            description="Disabled items"
            disabledKeys={['magic', 'flat-white']}
          >
            {singleMockItems.map((item) => (
              <SingleSelect.Item key={item.key}>{item.label}</SingleSelect.Item>
            ))}
          </SingleSelect>

          <SingleSelect
            label="Coffee"
            description="Disabled items"
            disabledKeys={['magic', 'flat-white']}
          >
            {singleMockItems.map((item) => (
              <SingleSelect.Item key={item.key}>{item.label}</SingleSelect.Item>
            ))}
          </SingleSelect>
        </StickerSheet.Row>

        <StickerSheet.Row>
          <SingleSelect label="Coffee" isComboBox selectedIcon="check" description="Checked items">
            {singleMockItems.map((item) => (
              <SingleSelect.Item key={item.key}>{item.label}</SingleSelect.Item>
            ))}
          </SingleSelect>

          <SingleSelect label="Coffee" selectedIcon="radio" description="Radio items">
            {singleMockItems.map((item) => (
              <SingleSelect.Item key={item.key}>{item.label}</SingleSelect.Item>
            ))}
          </SingleSelect>
        </StickerSheet.Row>

        <StickerSheet.Row>
          <SingleSelect
            label="Coffee"
            isComboBox
            selectedIcon="radio"
            selectedPosition="start"
            description="Radio items start"
          >
            {singleMockItems.map((item) => (
              <SingleSelect.Item key={item.key}>{item.label}</SingleSelect.Item>
            ))}
          </SingleSelect>

          <SingleSelect
            label="Coffee"
            selectedIcon="check"
            selectedPosition="start"
            description="Check items start"
          >
            {singleMockItems.map((item) => (
              <SingleSelect.Item key={item.key}>{item.label}</SingleSelect.Item>
            ))}
          </SingleSelect>
        </StickerSheet.Row>
      </StickerSheet>
    )
  },
  /** @note: Only required if you have pseudo states, otherwise this can be removed */
  parameters: {
    /** @todo: Remove any inapplicable pseudo states */
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
    /** @note: Only required if template has parameters, otherwise this spread can be removed */
    ...StickerSheetTemplate.parameters,
    backgrounds: { default: 'Purple 700' },
  },
  args: { isReversed: true },
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (RTL)',
  parameters: {
    /** @note: Only required if template has parameters, otherwise this spread can be removed */
    ...StickerSheetTemplate.parameters,
    textDirection: 'rtl',
  },
}
