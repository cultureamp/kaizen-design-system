import React, { useState, Key } from "react"
import { ComponentMeta, ComponentStory, Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import { Select } from "../src/Select/Select"
import { getSelectedOptionLabel } from "../src/Select/utils/getSelectedOptionLabel"
import { singleItems } from "./MockData"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.select}/Select`,
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
  const [selectedKey, setSelectedKey] = useState<Key | null>()
  const [isOpen, setIsOpen] = useState<boolean>()

  const handleSelectionChange = (key: Key) => {
    setSelectedKey(key)
    setIsOpen(!isOpen)
  }
  const handleOpenChange = () => setIsOpen(!isOpen)

  return (
    <Select
      {...props}
      isOpen={isOpen}
      onOpenChange={handleOpenChange}
      onSelectionChange={handleSelectionChange}
      selectedKey={selectedKey}
      trigger={
        <Select.TriggerButton
          placeholder="Placeholder"
          selectedOptionLabel={getSelectedOptionLabel(selectedKey, singleItems)}
        />
      }
    >
      <Select.ListBox>
        {items =>
          items.map(item => <Select.Option key={item.key} item={item} />)
        }
      </Select.ListBox>
    </Select>
  )
}

DefaultStory.storyName = "Select"
DefaultStory.args = {
  label: "label",
  id: "single-select",
  items: singleItems,
  isFullWidth: false,
  description: "This is a description",
  isDisabled: false,
}

DefaultStory.parameters = {
  chromatic: { disable: false },
  docs: { source: { type: "code" } },
}

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <>
    <StoryWrapper isReversed={isReversed}>
      <StoryWrapper.RowHeader
        headings={["Base", "Selected", "Hover", "Focus"]}
      />
      <StoryWrapper.Row rowTitle="Default">
        <Select
          id="select-default"
          label="label"
          onSelectionChange={() => undefined}
          items={singleItems}
          description="This is a description"
          trigger={
            <Select.TriggerButton
              placeholder="Placeholder"
              selectedOptionLabel={null}
            />
          }
        >
          <Select.ListBox>
            {items =>
              items.map(item => <Select.Option key={item.key} item={item} />)
            }
          </Select.ListBox>
        </Select>
        <Select
          id="select-selected"
          label="label"
          onSelectionChange={() => undefined}
          items={singleItems}
          description="This is a description"
          selectedKey={"id-sre"}
          trigger={
            <Select.TriggerButton
              placeholder="Placeholder"
              selectedOptionLabel={getSelectedOptionLabel(
                "id-sre",
                singleItems
              )}
            />
          }
        >
          <Select.ListBox>
            {items =>
              items.map(item => <Select.Option key={item.key} item={item} />)
            }
          </Select.ListBox>
        </Select>
        <Select
          id="select-hovered"
          label="label"
          onSelectionChange={() => undefined}
          items={singleItems}
          description="This is a description"
          selectedKey={null}
          trigger={
            <Select.TriggerButton
              classNameOverride="story__button-hover"
              placeholder="Placeholder"
              selectedOptionLabel={null}
            />
          }
        >
          <Select.ListBox>
            {items =>
              items.map(item => <Select.Option key={item.key} item={item} />)
            }
          </Select.ListBox>
        </Select>
        <Select
          id="select-focused"
          label="label"
          onSelectionChange={() => undefined}
          items={singleItems}
          description="This is a description"
          selectedKey={null}
          trigger={
            <Select.TriggerButton
              classNameOverride="story__button-focus"
              placeholder="Placeholder"
              selectedOptionLabel={null}
            />
          }
        >
          <Select.ListBox>
            {items =>
              items.map(item => <Select.Option key={item.key} item={item} />)
            }
          </Select.ListBox>
        </Select>
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Full Width">
        <Select
          id="select-full-width"
          label="label"
          onSelectionChange={() => undefined}
          items={singleItems}
          description="This is a description"
          isFullWidth
          trigger={
            <Select.TriggerButton
              placeholder="Placeholder"
              selectedOptionLabel={null}
            />
          }
        >
          <Select.ListBox>
            {items =>
              items.map(item => <Select.Option key={item.key} item={item} />)
            }
          </Select.ListBox>
        </Select>
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Custom Width (50%)">
        <div style={{ width: "50%" }}>
          <Select
            id="select-custom-width"
            label="label"
            onSelectionChange={() => undefined}
            items={singleItems}
            description="This is a description"
            isFullWidth
            trigger={
              <Select.TriggerButton
                placeholder="Placeholder"
                selectedOptionLabel={null}
              />
            }
          >
            <Select.ListBox>
              {items =>
                items.map(item => <Select.Option key={item.key} item={item} />)
              }
            </Select.ListBox>
          </Select>
        </div>
      </StoryWrapper.Row>
    </StoryWrapper>

    <div style={{ height: "550px", marginTop: "4rem" }}>
      <StoryWrapper isReversed={isReversed}>
        <StoryWrapper.RowHeader
          headings={["Base", "Selected", "Hover", "Focus"]}
        />
        <StoryWrapper.Row rowTitle="Dropdown">
          <Select
            id="select-dropdown-default"
            label="label"
            onSelectionChange={() => undefined}
            items={singleItems}
            description="This is a description"
            isOpen
            trigger={
              <Select.TriggerButton
                placeholder="Placeholder"
                selectedOptionLabel={null}
              />
            }
          >
            <Select.ListBox>
              {items =>
                items.map(item => <Select.Option key={item.key} item={item} />)
              }
            </Select.ListBox>
          </Select>
          <Select
            id="select-dropdown-selected"
            label="label"
            onSelectionChange={() => undefined}
            items={singleItems}
            description="This is a description"
            selectedKey={"id-sre"}
            isOpen
            trigger={
              <Select.TriggerButton
                placeholder="Placeholder"
                selectedOptionLabel={getSelectedOptionLabel(
                  "id-sre",
                  singleItems
                )}
              />
            }
          >
            <Select.ListBox>
              {items =>
                items.map(item => <Select.Option key={item.key} item={item} />)
              }
            </Select.ListBox>
          </Select>
          <Select
            id="select-dropdown-hovered"
            label="label"
            onSelectionChange={() => undefined}
            items={singleItems}
            description="This is a description"
            selectedKey={null}
            isOpen
            trigger={
              <Select.TriggerButton
                placeholder="Placeholder"
                selectedOptionLabel={null}
              />
            }
          >
            <Select.ListBox>
              {items =>
                items.map(item => (
                  <Select.Option
                    key={item.key}
                    item={item}
                    classNameOverride={
                      item.key === "id-sre" ? "story__option-hover" : undefined
                    }
                  />
                ))
              }
            </Select.ListBox>
          </Select>
          <Select
            id="select-dropdown-focused"
            label="label"
            onSelectionChange={() => undefined}
            items={singleItems}
            description="This is a description"
            selectedKey={null}
            isOpen
            trigger={
              <Select.TriggerButton
                placeholder="Placeholder"
                selectedOptionLabel={null}
              />
            }
          >
            <Select.ListBox>
              {items =>
                items.map(item => (
                  <Select.Option
                    key={item.key}
                    item={item}
                    classNameOverride={
                      item.key === "id-sre" ? "story__option-focus" : undefined
                    }
                  />
                ))
              }
            </Select.ListBox>
          </Select>
        </StoryWrapper.Row>
      </StoryWrapper>
    </div>

    <StoryWrapper isReversed={isReversed}>
      <StoryWrapper.Row rowTitle="Dropdown Fullwidth">
        <Select
          id="select-dropdown-default"
          label="label"
          onSelectionChange={() => undefined}
          items={singleItems}
          description="This is a description"
          isFullWidth
          isOpen
          trigger={
            <Select.TriggerButton
              placeholder="Placeholder"
              selectedOptionLabel={null}
            />
          }
        >
          {
            <Select.ListBox>
              {items =>
                items.map(item => <Select.Option key={item.key} item={item} />)
              }
            </Select.ListBox>
          }
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
