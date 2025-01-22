import React, { useState } from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { renderTriggerControls } from '~components/Filter/_docs/controls/renderTriggerControls'
import { Well } from '~components/Well'
import { FilterButton } from '../../FilterButton'
import { FilterSelect } from '../FilterSelect'
import { type SelectOption } from '../types'
import { groupedMockItems, singleMockItems } from './mockData'

const meta = {
  title: 'Components/FilterSelect',
  component: FilterSelect,
  argTypes: {
    ...renderTriggerControls,
    isOpen: { control: false },
    setIsOpen: { control: false },
    items: {
      options: ['Single', 'Grouped'],
      control: { type: 'radio' },
      mapping: {
        Single: singleMockItems,
        Grouped: groupedMockItems,
      },
    },
  },
  args: {
    label: 'Label',
    isOpen: false,
    items: singleMockItems,
    renderTrigger: (triggerProps): JSX.Element => <FilterButton {...triggerProps} />,
    setIsOpen: fn(),
  },
  parameters: {
    actions: {
      argTypesRegex: '^on.*',
    },
  },
} satisfies Meta<typeof FilterSelect>

export default meta

type Story = StoryObj<typeof meta>

const FilterSelectTemplate: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState<boolean>(args.isOpen)
    return <FilterSelect {...args} isOpen={isOpen} setIsOpen={setIsOpen} />
  },
}

export const Playground: Story = {
  ...FilterSelectTemplate,
  args: {
    label: 'Coffee',
    /* @ts-expect-error: Storybook controls key; see argTypes in default export */
    items: 'Single',
    /* @ts-expect-error: Storybook controls key; see argTypes in default export */
    renderTrigger: 'Filter Button',
  },
}

/**
 * Extend the option type to have additional properties to use for rendering.
 */
export const AdditionalProperties: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
      <FilterSelect<SelectOption & { isFruit: boolean }>
        {...args}
        label="Custom"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        items={[
          { label: 'Bubblegum', value: 'bubblegum', isFruit: false },
          { label: 'Strawberry', value: 'strawberry', isFruit: true },
          { label: 'Chocolate', value: 'chocolate', isFruit: false },
          { label: 'Apple', value: 'apple', isFruit: true },
          { label: 'Lemon', value: 'lemon', isFruit: true },
        ]}
      >
        {({ items }): JSX.Element[] =>
          items.map((item) =>
            item.type === 'item' ? (
              <FilterSelect.Option
                key={item.key}
                item={{
                  ...item,
                  rendered: item.value?.isFruit ? `${item.rendered} (Fruit)` : item.rendered,
                }}
              />
            ) : (
              <FilterSelect.ItemDefaultRender key={item.key} item={item} />
            ),
          )
        }
      </FilterSelect>
    )
  },
  name: 'Additional option properties',
}

/**
 * Extend the option type to have additional properties to use for rendering.
 */
export const FilterSelectBelowPageContent: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
      <div>
        <Well color="gray" style={{ height: '1500px' }}>
          Page content above the FilterSelect
        </Well>
        <FilterSelect
          label="Label"
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          renderTrigger={(triggerProps) => <FilterButton {...triggerProps} />}
          items={groupedMockItems}
        >
          {({ items }): JSX.Element[] =>
            items.map((item) => {
              if (item.type === 'item') {
                return (
                  <FilterSelect.Option
                    key={item.key}
                    item={{
                      ...item,
                    }}
                  />
                )
              }
              return <FilterSelect.ItemDefaultRender key={item.key} item={item} />
            })
          }
        </FilterSelect>
      </div>
    )
  },
  name: 'FilterSelect below page content',
}
