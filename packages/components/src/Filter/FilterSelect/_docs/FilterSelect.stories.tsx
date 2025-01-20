import React, { useState } from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { renderTriggerControls } from '~components/Filter/_docs/controls/renderTriggerControls'
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
export const TestPageWithFilterSelect: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
      <div>
        <div style={{ color: 'coral', display: 'block', height: '1500px' }}>Content</div>
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
      </div>
    )
  },
  name: 'Additional option properties',
}
