import React, { useState } from 'react'
import type { Selection } from '@react-types/shared'
import type { Meta, StoryObj } from 'storybook'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import isChromatic from 'chromatic'
import { Card } from '~components/Card'
import { InlineNotification } from '~components/Notification'
import { TextField } from '~components/TextField'
import { FilterMultiSelect, getSelectedOptionLabels } from '..'
import { mockItems, mockManyItems } from './MockData'

const IS_CHROMATIC = isChromatic()

const meta = {
  title: 'Components/FilterMultiSelect',
  component: FilterMultiSelect,
  parameters: {
    docs: {
      source: { type: 'auto' },
    },
  },
  args: {
    label: 'Engineer',
    items: mockItems,
    selectedKeys: new Set(['id-fe']),
    trigger: (): JSX.Element => (
      <FilterMultiSelect.TriggerButton selectedOptionLabels={['Front-End']} label="Engineer" />
    ),
    children: (): JSX.Element => (
      <>
        <FilterMultiSelect.SearchInput />
        <FilterMultiSelect.ListBox>
          {({ allItems, hasNoItems }): JSX.Element | JSX.Element[] => {
            if (hasNoItems) {
              return <FilterMultiSelect.NoResults>No results found.</FilterMultiSelect.NoResults>
            }

            return allItems.map((item) => <FilterMultiSelect.Option key={item.key} item={item} />)
          }}
        </FilterMultiSelect.ListBox>
        <FilterMultiSelect.MenuFooter>
          <FilterMultiSelect.SelectAllButton />
          <FilterMultiSelect.ClearButton />
        </FilterMultiSelect.MenuFooter>
      </>
    ),
  },
} satisfies any

export default meta

type Story = StoryObj<typeof meta>

const FilterMultiSelectTemplate: Story = {
  render: (args) => {
    const [selectedKeys, setSelectedKeys] = useState<Selection | undefined>(args.selectedKeys)

    return (
      <FilterMultiSelect
        {...args}
        onSelectionChange={setSelectedKeys}
        selectedKeys={selectedKeys}
        trigger={(): JSX.Element => (
          <FilterMultiSelect.TriggerButton
            selectedOptionLabels={getSelectedOptionLabels(selectedKeys, args.items)}
            label={args.label}
          />
        )}
      />
    )
  },
}

export const Playground: Story = {
  ...FilterMultiSelectTemplate,
}

export const Loading: Story = {
  args: {
    isLoading: true,
    isOpen: IS_CHROMATIC || undefined,
    loadingSkeleton: <FilterMultiSelect.MenuLoadingSkeleton />,
  },
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
}

export const TruncatedLabels: Story = {
  render: (args) => {
    const [selectedKeys, setSelectedKeys] = useState<Selection | undefined>(args.selectedKeys)
    const [characterLimit, setCharacterLimit] = useState<number>(50)

    const handleCharacterLimitChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
      setCharacterLimit(+e.target.value)

    return (
      <>
        <TextField
          labelText="Character limit"
          onChange={handleCharacterLimitChange}
          value={characterLimit}
          classNameOverride="mb-24"
        />
        <FilterMultiSelect
          {...args}
          onSelectionChange={setSelectedKeys}
          selectedKeys={selectedKeys}
          trigger={(): JSX.Element => (
            <FilterMultiSelect.TriggerButton
              selectedOptionLabels={getSelectedOptionLabels(selectedKeys, mockItems)}
              label={args.label}
              labelCharacterLimitBeforeTruncate={characterLimit}
            />
          )}
        />
      </>
    )
  },
}

export const WithNoScrollbar: Story = {
  ...FilterMultiSelectTemplate,
  args: {
    items: mockItems.slice(0, 3),
  },
}

export const WithSections: Story = {
  ...FilterMultiSelectTemplate,
  args: {
    isOpen: IS_CHROMATIC || undefined,
    children: (): JSX.Element => (
      <>
        <FilterMultiSelect.SearchInput />
        <FilterMultiSelect.ListBox>
          {({ selectedItems, unselectedItems, disabledItems, hasNoItems }): JSX.Element => (
            <>
              {hasNoItems && (
                <FilterMultiSelect.NoResults>No results found.</FilterMultiSelect.NoResults>
              )}
              <FilterMultiSelect.ListBoxSection items={selectedItems} sectionName="Selected items">
                {(item): JSX.Element => <FilterMultiSelect.Option key={item.key} item={item} />}
              </FilterMultiSelect.ListBoxSection>

              {unselectedItems.length > 0 && selectedItems.length > 0 && (
                <FilterMultiSelect.SectionDivider />
              )}
              <FilterMultiSelect.ListBoxSection
                items={unselectedItems}
                sectionName="Unselected items"
              >
                {(item): JSX.Element => <FilterMultiSelect.Option key={item.key} item={item} />}
              </FilterMultiSelect.ListBoxSection>

              {disabledItems.length > 0 &&
                (selectedItems.length > 0 || unselectedItems.length > 0) && (
                  <FilterMultiSelect.SectionDivider />
                )}
              <FilterMultiSelect.ListBoxSection items={disabledItems} sectionName="Disabled items">
                {(item): JSX.Element => <FilterMultiSelect.Option key={item.key} item={item} />}
              </FilterMultiSelect.ListBoxSection>
            </>
          )}
        </FilterMultiSelect.ListBox>
        <FilterMultiSelect.MenuFooter>
          <FilterMultiSelect.SelectAllButton />
          <FilterMultiSelect.ClearButton />
        </FilterMultiSelect.MenuFooter>
      </>
    ),
  },
  parameters: {
    chromatic: { disable: false },
  },
}

export const WithSectionHeaders: Story = {
  ...FilterMultiSelectTemplate,
  args: {
    isOpen: IS_CHROMATIC || undefined,
    items: mockManyItems,
    children: (): JSX.Element => (
      <>
        <FilterMultiSelect.SearchInput />
        <FilterMultiSelect.ListBox>
          {({ selectedItems, unselectedItems, disabledItems, hasNoItems }): JSX.Element =>
            hasNoItems ? (
              <FilterMultiSelect.NoResults>No results found.</FilterMultiSelect.NoResults>
            ) : (
              <>
                {selectedItems.length > 0 && (
                  <FilterMultiSelect.ListBoxSection
                    items={selectedItems}
                    sectionHeader="Selected items"
                  >
                    {(item): JSX.Element => <FilterMultiSelect.Option key={item.key} item={item} />}
                  </FilterMultiSelect.ListBoxSection>
                )}

                {unselectedItems.length > 0 && (
                  <FilterMultiSelect.ListBoxSection
                    items={unselectedItems}
                    sectionHeader="Unselected items"
                  >
                    {(item): JSX.Element => <FilterMultiSelect.Option key={item.key} item={item} />}
                  </FilterMultiSelect.ListBoxSection>
                )}

                {disabledItems.length > 0 && (
                  <FilterMultiSelect.ListBoxSection
                    items={disabledItems}
                    sectionHeader="Disabled items"
                  >
                    {(item): JSX.Element => <FilterMultiSelect.Option key={item.key} item={item} />}
                  </FilterMultiSelect.ListBoxSection>
                )}
              </>
            )
          }
        </FilterMultiSelect.ListBox>
        <FilterMultiSelect.MenuFooter>
          <FilterMultiSelect.SelectAllButton />
          <FilterMultiSelect.ClearButton />
        </FilterMultiSelect.MenuFooter>
      </>
    ),
  },
  parameters: {
    chromatic: { disable: false },
  },
}

export const WithSectionNotification: Story = {
  ...FilterMultiSelectTemplate,
  args: {
    isOpen: IS_CHROMATIC || undefined,
    children: (): JSX.Element => (
      <>
        <FilterMultiSelect.SearchInput />
        <FilterMultiSelect.ListBox>
          {({ selectedItems, unselectedItems, disabledItems, hasNoItems }): JSX.Element => (
            <>
              {hasNoItems ? (
                <FilterMultiSelect.NoResults>No results found.</FilterMultiSelect.NoResults>
              ) : (
                <>
                  {selectedItems.length > 0 && (
                    <FilterMultiSelect.ListBoxSection
                      items={selectedItems}
                      sectionHeader="Selected items"
                    >
                      {(item): JSX.Element => (
                        <FilterMultiSelect.Option key={item.key} item={item} />
                      )}
                    </FilterMultiSelect.ListBoxSection>
                  )}

                  {unselectedItems.length > 0 && (
                    <FilterMultiSelect.ListBoxSection
                      items={unselectedItems}
                      sectionHeader="Unselected items"
                    >
                      {(item): JSX.Element => (
                        <FilterMultiSelect.Option key={item.key} item={item} />
                      )}
                    </FilterMultiSelect.ListBoxSection>
                  )}

                  {disabledItems.length > 0 && (
                    <FilterMultiSelect.ListBoxSection
                      items={disabledItems}
                      sectionHeader={
                        <>
                          <span className="mb-6">Disabled items</span>
                          <InlineNotification
                            variant="cautionary"
                            persistent
                            noBottomMargin
                            headingProps={{
                              tag: 'span',
                              variant: 'heading-5',
                              children: 'Confidentiality protection',
                            }}
                          >
                            Results for these filters are hidden to protect identities of
                            individuals and small groups
                          </InlineNotification>
                        </>
                      }
                    >
                      {(item): JSX.Element => (
                        <FilterMultiSelect.Option key={item.key} item={item} />
                      )}
                    </FilterMultiSelect.ListBoxSection>
                  )}
                </>
              )}
            </>
          )}
        </FilterMultiSelect.ListBox>
        <FilterMultiSelect.MenuFooter>
          <FilterMultiSelect.SelectAllButton />
          <FilterMultiSelect.ClearButton />
        </FilterMultiSelect.MenuFooter>
      </>
    ),
  },
  parameters: {
    chromatic: { disable: false },
  },
}

const sourceCode = `
  <FilterMultiSelect
    {...filterMultiSelectProps}
    customMenuPopup={(props): JSX.Element => (
      // This will replace the default MenuPopup with a custom one. The rest of the component should still be implemented as the FilterMultiSelect pattern.
      <FilterMultiSelect.ResponsiveMenuPopup {...props} />
    )}
  >
    {/* FilterMultiSelect children */}
  </FilterMultiSelect>
`

export const WithContentBelow: Story = {
  ...FilterMultiSelectTemplate,
  decorators: [
    (Story) => (
      <div>
        <Story />
        <Card classNameOverride="mt-24 p-12" isElevated>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis libero dolore
            pariatur enim voluptates aperiam, delectus, harum cum earum quibusdam quos porro
            explicabo quisquam sapiente cupiditate quae hic, minus nam.
          </p>
        </Card>
      </div>
    ),
  ],
  parameters: {
    chromatic: {
      disable: false,
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement.parentElement!)
    const triggerButton = await canvas.findByRole('button', {
      name: /Engineer/i,
    })
    await step('Trigger opens the FilterMultiSelect dialog', async () => {
      await userEvent.click(triggerButton)
      await waitFor(() => expect(canvas.getByRole('option', { name: /Front-End/i })).toBeVisible())
    })
  },
}

export const AboveIfAvailable: Story = {
  ...WithSectionNotification,
  name: 'With customMenuPopup and vertical placement',
  parameters: {
    viewport: {
      viewports: {
        LimitedViewportAutoPlace: {
          name: 'Limited vertical space',
          styles: {
            width: '1024px',
            height: '650px',
          },
        },
      },
      defaultViewport: 'LimitedViewportAutoPlace',
    },
    docs: { source: { code: sourceCode } },
  },
  args: {
    customMenuPopup: (props): JSX.Element => <FilterMultiSelect.ResponsiveMenuPopup {...props} />,
  },
  decorators: [
    (Story) => (
      <div>
        <div style={{ height: '80vh', maxHeight: '500px' }}>Content above</div>
        <Story />
      </div>
    ),
  ],
}

export const ShouldResize: Story = {
  ...AboveIfAvailable,
  name: 'With customMenuPopup, vertical placement and resized popup',
  parameters: {
    chromatic: {
      disable: false,
    },
    viewport: {
      viewports: {
        LimitedViewportAutoPlace: {
          name: 'Limited vertical space',
          styles: {
            width: '1024px',
            height: '450px',
          },
        },
      },
      defaultViewport: 'LimitedViewportAutoPlace',
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement.parentElement!)
    const triggerButton = await canvas.findByRole('button', {
      name: /Engineer/i,
    })
    await step('Trigger opens the FilterMultiSelect dialog', async () => {
      await userEvent.click(triggerButton)
      await waitFor(() => expect(canvas.getByRole('dialog')).toBeVisible())
    })
  },
}
