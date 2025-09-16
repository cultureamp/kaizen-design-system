import React from 'react'
import { type Meta } from '@storybook/react'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { SingleSelect } from '../index'
import { type SelectItem } from '../types'
import { singleMockItems } from './mockData'

export default {
  title: 'Components/SingleSelect/SingleSelect (alpha)',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => {
    const fakeSelectApi = async (
      _query?: string,
      page = 1,
      pageSize = 7,
    ): Promise<{ items: SelectItem[]; hasMore?: boolean }> => {
      const start = (page - 1) * pageSize
      const pagedItems = singleMockItems.slice(start, start + pageSize)
      const hasMore = start + pageSize < singleMockItems.length

      return new Promise((resolve) => {
        setTimeout(() => resolve({ items: pagedItems, hasMore }), 3000)
      })
    }

    const fakeComboBoxApi = async (
      query?: string,
      page = 1,
      pageSize = 7,
    ): Promise<{ items: SelectItem[]; hasMore?: boolean }> => {
      const filtered = query
        ? singleMockItems.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()))
        : [...singleMockItems]

      const sorted = [...filtered].sort((a, b) => a.label.localeCompare(b.label))

      const start = (page - 1) * pageSize
      const pagedItems = sorted.slice(start, start + pageSize)
      const hasMore = start + pageSize < sorted.length

      return new Promise((resolve) => {
        setTimeout(() => resolve({ items: pagedItems, hasMore }), 3000)
      })
    }

    return (
      <StickerSheet isReversed={isReversed} title="SingleSelect" headers={['Items', 'Grouped']}>
        <StickerSheet.Row>
          <SingleSelect label="Combobox flat colours" isComboBox>
            <SingleSelect.Item>Red</SingleSelect.Item>
            <SingleSelect.Item>Orange</SingleSelect.Item>
            <SingleSelect.Item>Yellow</SingleSelect.Item>
            <SingleSelect.Item>Green</SingleSelect.Item>
            <SingleSelect.Item>Blue</SingleSelect.Item>
            <SingleSelect.Item>Purple</SingleSelect.Item>
            <SingleSelect.Item>Black</SingleSelect.Item>
            <SingleSelect.Item>White</SingleSelect.Item>
            <SingleSelect.Item>Lime</SingleSelect.Item>
            <SingleSelect.Item>Fushsia</SingleSelect.Item>
          </SingleSelect>

          <SingleSelect label="Select grouped colours">
            <SingleSelect.Section title="Warm Colours">
              <SingleSelect.Item>Red</SingleSelect.Item>
            </SingleSelect.Section>
            <SingleSelect.Section title="Cool Colours">
              <SingleSelect.Item>Blue</SingleSelect.Item>
            </SingleSelect.Section>
          </SingleSelect>
        </StickerSheet.Row>

        <StickerSheet.Row>
          <SingleSelect label="Load more on scroll" isComboBox loadItems={fakeComboBoxApi}>
            {(item: SelectItem) => (
              <SingleSelect.Item key={item.label}>{item.label}</SingleSelect.Item>
            )}
          </SingleSelect>

          <SingleSelect label="Load more on scroll" loadItems={fakeSelectApi}>
            {(item: SelectItem) => (
              <SingleSelect.Item key={item.label}>{item.label}</SingleSelect.Item>
            )}
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

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (RTL)',
  parameters: {
    /** @note: Only required if template has parameters, otherwise this spread can be removed */
    ...StickerSheetTemplate.parameters,
    textDirection: 'rtl',
  },
}
