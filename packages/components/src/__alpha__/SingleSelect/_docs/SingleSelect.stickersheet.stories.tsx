import React, { useEffect, useState } from 'react'
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
      <StickerSheet isReversed={isReversed} title="SingleSelect" headers={['Items', 'Grouped']}>
        <StickerSheet.Row>
          <SingleSelect items={singleMockItems} isSearchable>
            <SingleSelect.List>
              {singleMockItems.map((item) => (
                <SingleSelect.ListItem key={item.value} id={item.value}>
                  {item.label}
                </SingleSelect.ListItem>
              ))}
            </SingleSelect.List>
          </SingleSelect>

          <SingleSelect items={groupedMockItems}>
            <SingleSelect.List>
              {groupedMockItems.map((section) => (
                <SingleSelect.ListSection name={section.label} key={section.label}>
                  {section.options.map((item) => (
                    <SingleSelect.ListItem key={item.value} id={item.value}>
                      {item.label}
                    </SingleSelect.ListItem>
                  ))}
                </SingleSelect.ListSection>
              ))}
            </SingleSelect.List>
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

export const Async: StickerSheetStory = {
  ...StickerSheetTemplate,
  render: () => {
    const [items, setItems] = useState<{ label: string; value: string }[]>([])
    const fetchItems = (): Promise<{ label: string; value: string }[]> =>
      new Promise((resolve) =>
        setTimeout(() => {
          resolve(singleMockItems)
        }, 10000),
      )

    useEffect(() => {
      fetchItems().then((items) => {
        setItems(items)
      })
    })

    return (
      <SingleSelect items={items} isSearchable>
        <SingleSelect.List>
          {items.map((item) => (
            <SingleSelect.ListItem key={item.value} id={item.value}>
              {item.label}
            </SingleSelect.ListItem>
          ))}
        </SingleSelect.List>
      </SingleSelect>
    )
  },
}
