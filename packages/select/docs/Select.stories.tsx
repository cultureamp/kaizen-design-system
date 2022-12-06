import React from "react"
import { ComponentMeta, ComponentStory, Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import { Select } from "../src/Select/Select"
import { singleMockItems } from "./MockData"

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

export const DefaultStory: ComponentStory<typeof Select> = props => (
  <Select {...props} />
)

DefaultStory.storyName = "Select"
DefaultStory.args = {
  label: "label",
  id: "single-select",
  items: singleMockItems,
  isFullWidth: false,
  description: "This is a description",
  isDisabled: false,
  placeholder: "Placeholder",
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
          items={singleMockItems}
          description="This is a description"
          placeholder="Placeholder"
        />
        <Select
          id="select-selected"
          label="label"
          onSelectionChange={() => undefined}
          items={singleMockItems}
          description="This is a description"
          selectedKey={"id-sre"}
          trigger={triggerProps => (
            <Select.TriggerButton
              {...triggerProps}
              classNameOverride="story__button-selected"
            />
          )}
        />
        <Select
          id="select-hovered"
          label="label"
          onSelectionChange={() => undefined}
          items={singleMockItems}
          description="This is a description"
          selectedKey={null}
          placeholder="Placeholder"
          trigger={triggerProps => (
            <Select.TriggerButton
              {...triggerProps}
              classNameOverride="story__button-hover"
            />
          )}
        ></Select>
        <Select
          id="select-focused"
          label="label"
          onSelectionChange={() => undefined}
          items={singleMockItems}
          description="This is a description"
          selectedKey={null}
          placeholder="Placeholder"
          trigger={triggerProps => (
            <Select.TriggerButton
              {...triggerProps}
              classNameOverride="story__button-focus"
            />
          )}
        ></Select>
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Full Width">
        <Select
          id="select-full-width"
          label="label"
          onSelectionChange={() => undefined}
          items={singleMockItems}
          description="This is a description"
          placeholder="Placeholder"
          isFullWidth
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Custom Width (50%)">
        <div style={{ width: "50%" }}>
          <Select
            id="select-custom-width"
            label="label"
            onSelectionChange={() => undefined}
            items={singleMockItems}
            description="This is a description"
            isFullWidth
            placeholder="Placeholder"
          />
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
            items={singleMockItems}
            description="This is a description"
            placeholder="Placeholder"
            isOpen
          />
          <Select
            id="select-dropdown-selected"
            label="label"
            onSelectionChange={() => undefined}
            items={singleMockItems}
            description="This is a description"
            selectedKey={"id-sre"}
            isOpen
          />
          <Select
            id="select-dropdown-hovered"
            label="label"
            onSelectionChange={() => undefined}
            items={singleMockItems}
            description="This is a description"
            selectedKey={null}
            placeholder="Placeholder"
            isOpen
            trigger={triggerProps => <Select.TriggerButton {...triggerProps} />}
          >
            {({ items, state }) =>
              items.map(item => (
                <Select.Option
                  key={item.key}
                  item={item}
                  state={state}
                  classNameOverride={
                    item.key === "id-sre" ? "story__option-hover" : undefined
                  }
                />
              ))
            }
          </Select>
          <Select
            id="select-dropdown-focused"
            label="label"
            onSelectionChange={() => undefined}
            items={singleMockItems}
            description="This is a description"
            selectedKey={null}
            isOpen
            placeholder="Placeholder"
            trigger={triggerProps => <Select.TriggerButton {...triggerProps} />}
          >
            {({ items, state }) =>
              items.map(item => (
                <Select.Option
                  key={item.key}
                  item={item}
                  state={state}
                  classNameOverride={
                    item.key === "id-sre" ? "story__option-focus" : undefined
                  }
                />
              ))
            }
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
          items={singleMockItems}
          description="This is a description"
          placeholder="Placeholder"
          isFullWidth
          isOpen
        />
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
