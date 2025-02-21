import React from 'react'
import { type Meta } from '@storybook/react'
import isChromatic from 'chromatic'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { Select } from '../index'
import {
  groupedMockItems,
  mixedMockItemsDisabled,
  mixedMockItemsUngroupedFirst,
  mixedMockItemsUnordered,
  singleMockItems,
} from './mockData'

const IS_CHROMATIC = isChromatic()

export default {
  title: 'Components/Select/Select (future)',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <>
      <StickerSheet
        isReversed={isReversed}
        title="Select"
        headers={['Base', 'Selected', 'Description']}
      >
        <StickerSheet.Row>
          <StickerSheet.Cell style={{ verticalAlign: 'top' }}>
            <Select label="Label" items={singleMockItems} isReversed={isReversed} />
          </StickerSheet.Cell>
          <StickerSheet.Cell style={{ verticalAlign: 'top' }}>
            <Select
              label="Label"
              items={singleMockItems}
              selectedKey="mocha"
              isReversed={isReversed}
            />
          </StickerSheet.Cell>
          <StickerSheet.Cell style={{ verticalAlign: 'top' }}>
            <Select
              label="Label"
              items={singleMockItems}
              description="This is a description"
              selectedKey="mocha"
              isReversed={isReversed}
            />
          </StickerSheet.Cell>
        </StickerSheet.Row>
      </StickerSheet>

      <StickerSheet
        isReversed={isReversed}
        title="Pseudo states"
        headers={['Hover', 'Active', 'Focus', 'Disabled']}
      >
        <StickerSheet.Row>
          <Select
            label="Label"
            items={singleMockItems}
            isReversed={isReversed}
            data-sb-pseudo-styles="hover"
          />
          <Select
            label="Label"
            items={singleMockItems}
            isReversed={isReversed}
            data-sb-pseudo-styles="active"
          />
          <Select
            label="Label"
            items={singleMockItems}
            isReversed={isReversed}
            data-sb-pseudo-styles="focus"
          />
          <Select label="Label" items={singleMockItems} isDisabled isReversed={isReversed} />
        </StickerSheet.Row>
      </StickerSheet>

      <StickerSheet isReversed={isReversed} title="Width" layout="stretch">
        <StickerSheet.Row>
          <Select label="Full width" items={singleMockItems} isFullWidth isReversed={isReversed} />
        </StickerSheet.Row>
        <StickerSheet.Row>
          <div style={{ width: '50%' }}>
            <Select
              label="Custom Width (50%)"
              items={singleMockItems}
              isFullWidth
              isReversed={isReversed}
            />
          </div>
        </StickerSheet.Row>
      </StickerSheet>

      <StickerSheet isReversed={isReversed} title="Validation">
        <StickerSheet.Row>
          <Select
            label="Error"
            items={singleMockItems}
            description="This is a description"
            status="error"
            validationMessage="This is an error"
            isReversed={isReversed}
          />
          <Select
            label="Caution"
            items={singleMockItems}
            description="This is a description"
            status="caution"
            validationMessage="This is an error"
            isReversed={isReversed}
          />
        </StickerSheet.Row>
      </StickerSheet>

      <StickerSheet isReversed={isReversed} title="Truncated">
        <StickerSheet.Row>
          <Select
            label="Label"
            items={[
              { label: 'Dev-ops', value: 'id-devops' },
              { label: 'Others', value: 'id-others' },
              {
                label:
                  'Super long option where the container is fixed width and the selected option goes multiline',
                value: 'id-long',
              },
              {
                label: 'Metallblasinstrumentenbauermeisterbrief',
                value: 'id-long-word',
              },
            ]}
            selectedKey="id-long"
            isReversed={isReversed}
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

const StickerSheetOptionsTemplate: StickerSheetStory = {
  render: () => (
    <>
      <StickerSheet
        title="Default options"
        style={{ paddingBottom: IS_CHROMATIC ? '26rem' : undefined }}
        headers={['Single items', 'Groups', 'Existing value', 'Disabled']}
      >
        <StickerSheet.Row>
          <StickerSheet.Cell style={{ width: '250px' }}>
            <Select label="Label" defaultOpen={IS_CHROMATIC} items={singleMockItems} />
          </StickerSheet.Cell>
          <StickerSheet.Cell style={{ width: '250px' }}>
            <Select label="Label" defaultOpen={IS_CHROMATIC} items={groupedMockItems} />
          </StickerSheet.Cell>
          <StickerSheet.Cell style={{ width: '250px' }}>
            <Select
              label="Label"
              defaultOpen={IS_CHROMATIC}
              items={singleMockItems}
              selectedKey="mocha"
            />
          </StickerSheet.Cell>
          <StickerSheet.Cell style={{ width: '250px' }}>
            <Select label="Label" defaultOpen={IS_CHROMATIC} items={mixedMockItemsDisabled} />
          </StickerSheet.Cell>
        </StickerSheet.Row>
      </StickerSheet>

      <StickerSheet
        title="Customised options"
        style={{ paddingTop: IS_CHROMATIC ? '26rem' : undefined }}
        headers={[
          'All options',
          'Partial customisation',
          'Section dividers',
          'Specific item divider',
        ]}
      >
        <StickerSheet.Row>
          <StickerSheet.Cell style={{ width: '250px' }}>
            <Select label="Label" defaultOpen={IS_CHROMATIC} items={singleMockItems}>
              {({ items }): JSX.Element[] =>
                items.map((item) => {
                  if (item.type === 'item') {
                    return (
                      <Select.Option
                        key={item.key}
                        item={{
                          ...item,
                          rendered: (
                            <div>
                              <div
                                style={{
                                  fontSize: '0.75rem',
                                  color: 'gray',
                                }}
                              >
                                Customised in list!
                              </div>
                              <div>{item.rendered}</div>
                            </div>
                          ),
                        }}
                      />
                    )
                  }

                  return <Select.ItemDefaultRender key={item.key} item={item} />
                })
              }
            </Select>
          </StickerSheet.Cell>

          <StickerSheet.Cell style={{ width: '250px' }}>
            <Select label="Label" defaultOpen={IS_CHROMATIC} items={mixedMockItemsUngroupedFirst}>
              {({ items }): JSX.Element[] =>
                items.map((item) => {
                  if (item.type === 'item' && item.key === 'batch-brew') {
                    return (
                      <Select.Option
                        key={item.key}
                        item={{
                          ...item,
                          rendered: <div>++ {item.rendered}</div>,
                        }}
                      />
                    )
                  }

                  if (item.type === 'section' && item.key === 'Syrup') {
                    return (
                      <Select.Section
                        key={item.key}
                        section={{
                          ...item,
                          childNodes: Array.from(item.childNodes).map((child) => ({
                            ...child,
                            rendered: <div>-- {child.rendered}</div>,
                          })),
                        }}
                      />
                    )
                  }

                  return <Select.ItemDefaultRender key={item.key} item={item} />
                })
              }
            </Select>
          </StickerSheet.Cell>

          <StickerSheet.Cell style={{ width: '250px' }}>
            <Select label="Label" defaultOpen={IS_CHROMATIC} items={mixedMockItemsUnordered}>
              {({ items }): JSX.Element[] =>
                items.map((item) => (
                  <React.Fragment key={item.key}>
                    {item.type === 'section' && <Select.SectionDivider />}
                    <Select.ItemDefaultRender item={item} />
                    {item.type === 'section' && <Select.SectionDivider />}
                  </React.Fragment>
                ))
              }
            </Select>
          </StickerSheet.Cell>

          <StickerSheet.Cell style={{ width: '250px' }}>
            <Select
              label="Label"
              defaultOpen={IS_CHROMATIC}
              items={[{ label: 'Customise...', value: 'custom' }, ...singleMockItems]}
            >
              {({ items }): JSX.Element[] =>
                items.map((item) => {
                  if (item.type === 'item' && item.key === 'custom') {
                    return (
                      <React.Fragment key={item.key}>
                        <Select.Option item={item} />
                        <Select.SectionDivider />
                      </React.Fragment>
                    )
                  }

                  return <Select.ItemDefaultRender key={item.key} item={item} />
                })
              }
            </Select>
          </StickerSheet.Cell>
        </StickerSheet.Row>
      </StickerSheet>

      <StickerSheet
        title="Min/Max"
        style={{ paddingTop: IS_CHROMATIC ? '26rem' : undefined }}
        headers={['Min size', 'Max size']}
      >
        <StickerSheet.Row>
          <StickerSheet.Cell style={{ width: '250px' }}>
            <Select label="Label" defaultOpen={IS_CHROMATIC} items={[{ value: 'a', label: 'A' }]} />
          </StickerSheet.Cell>
          <StickerSheet.Cell>
            <Select
              label="Label"
              defaultOpen={IS_CHROMATIC}
              items={[
                {
                  value: 'long-1',
                  label:
                    'Super long option where the container is fixed width and the selected option goes multiline',
                },
                {
                  value: 'long-2',
                  label:
                    'Another super long option where the container is fixed width and the selected option goes multiline',
                },
                ...singleMockItems,
              ]}
            />
          </StickerSheet.Cell>
        </StickerSheet.Row>
      </StickerSheet>
    </>
  ),
}

export const StickerSheetOptionsDefault: StickerSheetStory = {
  ...StickerSheetOptionsTemplate,
  name: 'Sticker Sheet - Options (Default)',
}

export const StickerSheetOptionsRTL: StickerSheetStory = {
  ...StickerSheetOptionsTemplate,
  name: 'Sticker Sheet - Options (RTL)',
  parameters: { textDirection: 'rtl' },
}
