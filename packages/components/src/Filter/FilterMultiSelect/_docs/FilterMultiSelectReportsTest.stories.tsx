import React, { useMemo } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { FormattedMessage } from 'react-intl'
import { Link } from '~components/Link'
import { InlineNotification } from '~components/Notification'
import { Text } from '~components/Text'
import { FilterMultiSelect, type ItemType, type MultiSelectItem } from '..'
import { mockItems, mockManyItems } from './MockData'

const meta = {
  title: 'Components/FilterMultiSelect/reports-reproduction',
  component: FilterMultiSelect,
  parameters: {
    docs: {
      source: { type: 'code' },
    },
  },
  args: {
    label: 'Engineer',
    items: mockItems,
    selectedKeys: new Set(['id-fe']),
    trigger: (): JSX.Element => (
      <FilterMultiSelect.TriggerButton selectedOptionLabels={['']} label="Engineer" />
    ),
  },
} satisfies Meta<typeof FilterMultiSelect>

export default meta

type Story = StoryObj<typeof meta>

// NOTE: Below is the code to replicate the reports MenuPopup children

type PopoverListProps = {
  allItems: MultiSelectItem[]
  selectedItems: MultiSelectItem[]
  unselectedItems: MultiSelectItem[]
  hasNoItems: boolean
  confidentialItems: ItemType[]
  nonConfidentialItems: ItemType[]
}

const ConfidentialText = ({ item }: { item: MultiSelectItem }): JSX.Element => {
  return (
    <span className="text-red-600">
      {item.rendered}*<span className="sr-only"> Confidentiality protected</span>
    </span>
  )
}

const ReportsPopoverList = ({
  allItems,
  selectedItems,
  unselectedItems,
  hasNoItems,
  confidentialItems,
  nonConfidentialItems,
}: PopoverListProps): JSX.Element => {
  const confidentialMultiSelectItems: MultiSelectItem[] = useMemo(
    () =>
      allItems.filter((allItem) =>
        confidentialItems.some((item) => item.value === allItem.value?.value),
      ),
    [allItems, confidentialItems],
  )

  const nonConfidentialMultiSelectItems: MultiSelectItem[] = useMemo(
    () =>
      allItems.filter((allItem) =>
        nonConfidentialItems.some((item) => item.value === allItem.value?.value),
      ),
    [allItems, nonConfidentialItems],
  )

  const getFilteredByItems = (
    items: MultiSelectItem[],
    filterByItems: MultiSelectItem[],
  ): MultiSelectItem[] => {
    return items.filter((item) =>
      filterByItems.map((filteredItem) => filteredItem.value?.value).includes(item.value?.value),
    )
  }

  const unselectedConfidentialItems: MultiSelectItem[] = useMemo(
    () => getFilteredByItems(confidentialMultiSelectItems, unselectedItems),
    [confidentialMultiSelectItems, unselectedItems],
  )

  const unselectedNonConfidentialItems: MultiSelectItem[] = useMemo(
    () => getFilteredByItems(nonConfidentialMultiSelectItems, unselectedItems),
    [nonConfidentialMultiSelectItems, unselectedItems],
  )

  if (!hasNoItems) {
    return (
      <>
        {selectedItems.length > 0 && (
          <FilterMultiSelect.ListBoxSection
            items={selectedItems}
            sectionName={'Selected items'}
            sectionHeader={
              <InlineNotification
                variant="informative"
                persistent
                noBottomMargin
                headingProps={{
                  tag: 'span',
                  variant: 'heading-6',
                  children: 'Selected items',
                }}
              >
                <FormattedMessage
                  id="reports.filters.demographic_filters.popover.notification.content"
                  defaultMessage="Results for these filters are hidden to protect identities of individuals and small groups."
                />{' '}
                <Link href="https://support.cultureamp.com/en/articles/7048386-confidentiality-protections-in-reporting">
                  <span className="sr-only">
                    <FormattedMessage
                      id="reports.filters.demographic_filters.popover.notification.anchor.sr_only"
                      defaultMessage="Learn more about confidentiality protection"
                    />
                  </span>
                  <span className="not-sr-only">
                    <FormattedMessage
                      id="reports.filters.demographic_filters.popover.notification.anchor"
                      defaultMessage="Learn more"
                    />
                  </span>
                </Link>
              </InlineNotification>
            }
          >
            {(item) => (
              <FilterMultiSelect.Option
                classNameOverride="[&>span:first-child]:box-content"
                key={item.key}
                item={{
                  ...item,
                  rendered: confidentialMultiSelectItems.some(
                    (confidentialItem) => confidentialItem.value?.value === item.value?.value,
                  ) ? (
                    <ConfidentialText item={item} />
                  ) : (
                    <span>{item.rendered}</span>
                  ),
                }}
              />
            )}
          </FilterMultiSelect.ListBoxSection>
        )}

        {selectedItems.length > 0 && unselectedNonConfidentialItems.length > 0 && (
          <FilterMultiSelect.SectionDivider />
        )}

        {nonConfidentialMultiSelectItems.length > 0 && (
          <FilterMultiSelect.ListBoxSection
            items={unselectedNonConfidentialItems}
            sectionName={'Non-confidential items'}
            sectionHeader={
              <InlineNotification
                variant="informative"
                persistent
                noBottomMargin
                headingProps={{
                  tag: 'span',
                  variant: 'heading-6',
                  children: 'Selected items',
                }}
              >
                Non-confidential items
              </InlineNotification>
            }
          >
            {(item) => (
              <FilterMultiSelect.Option
                classNameOverride="[&>span:first-child]:box-content"
                key={item.key}
                item={item}
              />
            )}
          </FilterMultiSelect.ListBoxSection>
        )}

        {confidentialMultiSelectItems.length > 0 && <FilterMultiSelect.SectionDivider />}

        {/* NOTE: This is the mocked content from the sectionHeader below */}
        <li role="presentation">
          <InlineNotification
            type="security"
            persistent
            noBottomMargin
            headingProps={{
              tag: 'span',
              variant: 'heading-6',
              children: 'Confidentiality protection',
            }}
          >
            <div>
              Results for these filters are hidden to protect identities of individuals and small
              groups.{' '}
              <Link href="https://support.cultureamp.com/en/articles/7048386-confidentiality-protections-in-reporting">
                <span className="sr-only">Learn more about confidentiality protection</span>
                <span className="not-sr-only">Learn more</span>
              </Link>
            </div>
          </InlineNotification>
        </li>

        {confidentialMultiSelectItems.length > 0 && (
          <FilterMultiSelect.ListBoxSection
            items={[...unselectedConfidentialItems, ...unselectedNonConfidentialItems]}
            sectionName={'Unselected confidential items'}
            // NOTE: this section seems to be the culprit of the scroll bug on chrome and safari
            // sectionHeader={
            //   <InlineNotification
            //     type="security"
            //     persistent
            //     noBottomMargin
            //     headingProps={{
            //       tag: 'span',
            //       variant: 'heading-6',
            //       children: 'Confidentiality protection',
            //     }}
            //   >
            //     <>
            //       Results for these filters are hidden to protect identities of individuals and
            //       small groups.{' '}
            //       <Link href="https://support.cultureamp.com/en/articles/7048386-confidentiality-protections-in-reporting">
            //         <span className="sr-only">Learn more about confidentiality protection</span>
            //         <span className="not-sr-only">Learn more</span>
            //       </Link>
            //     </>
            //   </InlineNotification>
            // }
          >
            {(item) => (
              <FilterMultiSelect.Option
                classNameOverride="[&>span:first-child]:box-content"
                key={item.key}
                item={{
                  ...item,
                  rendered: <ConfidentialText item={item} />,
                }}
              />
            )}
          </FilterMultiSelect.ListBoxSection>
        )}
        {confidentialMultiSelectItems.length > 0 && <FilterMultiSelect.SectionDivider />}
      </>
    )
  }

  return (
    <FilterMultiSelect.NoResults>
      <FormattedMessage
        id="reports.filters.demographic_filters.popover.no_results_found"
        defaultMessage="No results found."
      />
    </FilterMultiSelect.NoResults>
  )
}

type ReportsPopoverProps = {
  confidentialItems: ItemType[]
  nonConfidentialItems: ItemType[]
}

const MANY_OPTIONS_THRESHOLD = 6

const ReportsPopover = ({
  confidentialItems,
  nonConfidentialItems,
}: ReportsPopoverProps): JSX.Element => (
  <>
    <FilterMultiSelect.SearchInput />

    {confidentialItems.length + nonConfidentialItems.length > MANY_OPTIONS_THRESHOLD && (
      <div className="px-[1.125rem] pt-[1.125rem]">
        <Text variant="extra-small" color="dark-reduced-opacity">
          There are a lot of options. Narrow them down by searching for a precise term.
        </Text>
      </div>
    )}

    <FilterMultiSelect.ListBox>
      {({ allItems, selectedItems, unselectedItems, hasNoItems }) => {
        return (
          <ReportsPopoverList
            allItems={allItems}
            selectedItems={selectedItems}
            unselectedItems={unselectedItems}
            hasNoItems={hasNoItems}
            confidentialItems={confidentialItems}
            nonConfidentialItems={nonConfidentialItems}
          />
        )
      }}
    </FilterMultiSelect.ListBox>

    <FilterMultiSelect.MenuFooter>
      <FilterMultiSelect.SelectAllButton />
      <FilterMultiSelect.ClearButton />
    </FilterMultiSelect.MenuFooter>
  </>
)

export const ReportsLikePopover: Story = {
  args: {
    items: mockManyItems,
    floatingConfig: {
      shouldFlip: true,
      shouldResize: true,
    },
    children: () => (
      <ReportsPopover confidentialItems={mockManyItems} nonConfidentialItems={mockManyItems} />
    ),
  },
  decorators: [
    (Story) => (
      <div>
        <div style={{ height: '80vh', background: 'rebeccapurple' }}>content</div>
        <Story />
        <div style={{ height: '80vh', background: 'blue' }}>content 2</div>
      </div>
    ),
  ],
}
