import React, { useState, Key } from "react"
import { ComponentMeta, ComponentStory, Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { Select } from "../src/Select/Select"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import { getSelectedOptionLabel } from "../src/Select/utils"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { items } from "./MockData"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.select}/Select New`,
  component: Select,
  parameters: {
    actions: {
      argTypesRegex: "^on.*",
    },
    docs: {
      source: { type: "code" },
      description: {
        component: 'import { Select } from "@kaizen/select".',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=22814%3A96966"
    ),
  },
  decorators: [withDesign],
} as ComponentMeta<typeof Select>

export const DefaultStory: ComponentStory<typeof Select> = props => {
  const [selectedKey, setSelectedKey] = useState<Key | null>("id-fe")

  const handleSelectionChange = (key: Key) => setSelectedKey(key)

  return (
    <>
      <Select
        {...props}
        onSelectionChange={handleSelectionChange}
        selectedKey={selectedKey}
        trigger={() => (
          <Select.TriggerButton
            selectedOptionLabel={getSelectedOptionLabel(selectedKey, items)}
          />
        )}
      >
        {() => (
          <Select.ListBox>
            {({ allItems }) =>
              allItems.map(item => <Select.Option key={item.key} item={item} />)
            }
          </Select.ListBox>
        )}
      </Select>
    </>
  )
}

DefaultStory.storyName = "Select"
DefaultStory.args = { label: "label", id: "single-select", items }
DefaultStory.parameters = {
  chromatic: { disable: false },
  docs: { source: { type: "code" } },
}

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <>
    <StoryWrapper isReversed={isReversed}>
      <StoryWrapper.RowHeader headings={["Base"]} />
      <StoryWrapper.Row rowTitle="Default">
        <Select
          id="select-default"
          label="label"
          onSelectionChange={() => undefined}
          items={items}
          trigger={() => <Select.TriggerButton selectedOptionLabel={null} />}
        >
          {() => (
            <Select.ListBox>
              {({ allItems }) =>
                allItems.map(item => (
                  <Select.Option key={item.key} item={item} />
                ))
              }
            </Select.ListBox>
          )}
        </Select>
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Selected">
        <Select
          id="select-selected"
          label="label"
          onSelectionChange={() => undefined}
          items={items}
          trigger={() => (
            <Select.TriggerButton
              selectedOptionLabel={getSelectedOptionLabel("id-fe", items)}
            />
          )}
        >
          {() => (
            <Select.ListBox>
              {({ allItems }) =>
                allItems.map(item => (
                  <Select.Option key={item.key} item={item} />
                ))
              }
            </Select.ListBox>
          )}
        </Select>
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Disabled">
        <Select
          isDisabled
          id="select-disabled"
          label="label"
          onSelectionChange={() => undefined}
          items={items}
          trigger={() => (
            <Select.TriggerButton
              selectedOptionLabel={getSelectedOptionLabel("id-fe", items)}
            />
          )}
        >
          {() => (
            <Select.ListBox>
              {({ allItems }) =>
                allItems.map(item => (
                  <Select.Option key={item.key} item={item} />
                ))
              }
            </Select.ListBox>
          )}
        </Select>
      </StoryWrapper.Row>
    </StoryWrapper>
  </>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}
