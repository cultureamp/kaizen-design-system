import React from 'react'
import { type Meta } from 'storybook'
import { Avatar } from '~components/Avatar'
import { Icon } from '~components/Icon'
import { Text } from '~components/Text'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { SingleSelect } from '../index'
import { groupedMockItems, singleMockItems } from './mockData'

export default {
  title: 'Components/SingleSelect/SingleSelect (alpha)',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies any

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => {
    const [filterText, setFilterText] = React.useState('')
    return (
      <StickerSheet isReversed={isReversed} title="SingleSelect" headers={['Combobox', 'Select']}>
        <StickerSheet.Row>
          <SingleSelect label="Coffee" isComboBox description="Default">
            {singleMockItems.map((item) => (
              <SingleSelect.Item key={item.key}>{item.label}</SingleSelect.Item>
            ))}
          </SingleSelect>

          <SingleSelect label="Coffee" description="Default">
            {singleMockItems.map((item) => (
              <SingleSelect.Item key={item.key}>{item.label}</SingleSelect.Item>
            ))}
          </SingleSelect>

          <SingleSelect
            label="Coffee"
            isComboBox
            description="Manual filter"
            items={singleMockItems.filter((item) =>
              item.label.toLowerCase().includes(filterText.toLowerCase()),
            )}
            onInputChange={setFilterText}
          >
            {(item) => (
              <SingleSelect.Item key={item.key} textValue={item.label}>
                {item.label}
              </SingleSelect.Item>
            )}
          </SingleSelect>

          <SingleSelect label="Coffee" description="Render function" items={singleMockItems}>
            {(item) => (
              <SingleSelect.Item key={item.key} textValue={item.label}>
                {item.label}
              </SingleSelect.Item>
            )}
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
          <SingleSelect
            label="Coffee"
            isComboBox
            isDisabled
            description="disabled"
            defaultSelectedKey={'magic'}
          >
            {singleMockItems.map((item) => (
              <SingleSelect.Item key={item.key}>{item.label}</SingleSelect.Item>
            ))}
          </SingleSelect>

          <SingleSelect
            label="Coffee"
            isDisabled
            description="disabled"
            defaultSelectedKey={'magic'}
          >
            {singleMockItems.map((item) => (
              <SingleSelect.Item key={item.key}>{item.label}</SingleSelect.Item>
            ))}
          </SingleSelect>
        </StickerSheet.Row>

        <StickerSheet.Row>
          <SingleSelect
            label="Coffee"
            isComboBox
            isReadOnly
            description="read only"
            defaultSelectedKey={'magic'}
          >
            {singleMockItems.map((item) => (
              <SingleSelect.Item key={item.key}>{item.label}</SingleSelect.Item>
            ))}
          </SingleSelect>

          <SingleSelect
            label="Coffee"
            isReadOnly
            description="read only"
            defaultSelectedKey={'magic'}
          >
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
          <SingleSelect label="Coffee" isComboBox description="Checked items">
            {singleMockItems.map((item) => (
              <SingleSelect.Item selectedIcon="check" key={item.key}>
                {item.label}
              </SingleSelect.Item>
            ))}
          </SingleSelect>

          <SingleSelect label="Coffee" description="Radio items">
            {singleMockItems.map((item) => (
              <SingleSelect.Item selectedIcon="radio" key={item.key}>
                {item.label}
              </SingleSelect.Item>
            ))}
          </SingleSelect>
        </StickerSheet.Row>

        <StickerSheet.Row>
          <SingleSelect label="Coffee" isComboBox description="Radio items start">
            {singleMockItems.map((item) => (
              <SingleSelect.Item selectedIcon="radio" selectedPosition="start" key={item.key}>
                {item.label}
              </SingleSelect.Item>
            ))}
          </SingleSelect>

          <SingleSelect label="Coffee" description="Check items start">
            {singleMockItems.map((item) => (
              <SingleSelect.Item selectedIcon="check" selectedPosition="start" key={item.key}>
                {item.label}
              </SingleSelect.Item>
            ))}
          </SingleSelect>
        </StickerSheet.Row>

        <StickerSheet.Row>
          <SingleSelect label="Coffee" isComboBox description="Icon at start inline text">
            {singleMockItems.map((item) => (
              <SingleSelect.Item
                key={item.key}
                textValue={item.label}
                className="flex flex-row items-center"
              >
                <Icon name="favorite" isPresentational />
                <span style={{ paddingRight: 12 }} />
                <Text
                  variant="body"
                  style={{
                    whiteSpace: 'nowrap',
                    minWidth: 0,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    marginRight: 8,
                    flexShrink: 0,
                  }}
                >
                  {item.label}
                </Text>
                <Text
                  variant="body"
                  style={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    minWidth: 0,
                    flexShrink: 20,
                  }}
                >
                  Supporting text
                </Text>
              </SingleSelect.Item>
            ))}
          </SingleSelect>

          <SingleSelect label="Coffee" description="Radio and multiline">
            {singleMockItems.map((item) => (
              <SingleSelect.Item
                selectedIcon="radio"
                key={item.key}
                textValue={item.label}
                className="flex flex-col"
              >
                <Text
                  variant="body"
                  style={{
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}
                >
                  {item.label}
                </Text>
                <Text
                  variant="body"
                  style={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: 'block',
                  }}
                >
                  Supporting text
                </Text>
              </SingleSelect.Item>
            ))}
          </SingleSelect>
        </StickerSheet.Row>

        <StickerSheet.Row>
          <SingleSelect label="Coffee" isComboBox description="Avatar and inline">
            {singleMockItems.map((item) => (
              <SingleSelect.Item
                key={item.key}
                textValue={item.label}
                className="flex flex-row items-center"
              >
                <div style={{ flexShrink: 0 }}>
                  <Avatar fullName="Senior Popsicle" size="small" />
                </div>
                <span style={{ paddingRight: 12 }} />
                <Text
                  variant="body"
                  style={{
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                    marginRight: 8,
                  }}
                >
                  {item.label}
                </Text>

                <Text
                  variant="body"
                  style={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: 'block',
                  }}
                >
                  Supporting text
                </Text>
              </SingleSelect.Item>
            ))}
          </SingleSelect>

          <SingleSelect label="Coffee" description="Avatar and multiline text">
            {singleMockItems.map((item) => (
              <SingleSelect.Item
                key={item.key}
                textValue={item.label}
                className="flex flex-row items-center gap-12"
              >
                <Avatar fullName="Senior Popsicle" size="medium" />

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {item.label}
                  <Text variant="body">Supporting text</Text>
                </div>
              </SingleSelect.Item>
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

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (RTL)',
  parameters: {
    /** @note: Only required if template has parameters, otherwise this spread can be removed */
    ...StickerSheetTemplate.parameters,
    textDirection: 'rtl',
  },
}
