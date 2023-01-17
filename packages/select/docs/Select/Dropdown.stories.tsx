import React from "react"
import { Node } from "@react-types/shared"
import { ComponentMeta, Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { StoryWrapper } from "../../../../storybook/components/StoryWrapper"
import { CATEGORIES, SUB_CATEGORIES } from "../../../../storybook/constants"
import { figmaEmbed } from "../../../../storybook/helpers"
import { Select } from "../../src/Select/Select"
import { SingleItemType } from "../../src/types"
import { singleMockItems } from "../MockData"

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
  argTypes: {
    status: {
      options: ["error", "caution"],
      control: {
        type: "select",
      },
    },
    validationMessage: {
      control: "text",
    },
  },
} as ComponentMeta<typeof Select>

const DropdownSheet: Story<{ isReversed: boolean }> = ({ isReversed }) => (
  <>
    <div style={{ marginBottom: "28rem" }}>
      <StoryWrapper isReversed={isReversed}>
        <StoryWrapper.RowHeader
          headings={["Base", "Selected", "Hover", "Focus", "Disabled"]}
        />
        <StoryWrapper.Row rowTitle="Dropdown">
          <Select
            id="select-dropdown-base"
            label="label"
            items={singleMockItems}
            placeholder="Placeholder"
            isOpen
          />
          <Select
            id="select-dropdown-selected"
            label="label"
            items={singleMockItems}
            placeholder="Placeholder"
            selectedKey="id-sre"
            isOpen
          />
          <Select
            id="select-dropdown-hover"
            label="label"
            items={singleMockItems}
            placeholder="Placeholder"
            isOpen
          >
            {(optionsProps): JSX.Element[] =>
              optionsProps.items.map((item: Node<SingleItemType>) => (
                <Select.Option
                  {...optionsProps}
                  key={item.key}
                  item={item}
                  classNameOverride={
                    item.key === "id-sre" ? "story__option-hover" : undefined
                  }
                />
              ))
            }
          </Select>
          <Select
            id="select-dropdown-focus"
            label="label"
            items={singleMockItems}
            placeholder="Placeholder"
            isOpen
          >
            {(optionsProps): JSX.Element[] =>
              optionsProps.items.map((item: Node<SingleItemType>) => (
                <Select.Option
                  {...optionsProps}
                  key={item.key}
                  item={item}
                  classNameOverride={
                    item.key === "id-sre" ? "story__option-focus" : undefined
                  }
                />
              ))
            }
          </Select>
          <Select
            id="select-dropdown-disabled"
            label="label"
            items={singleMockItems}
            placeholder="Placeholder"
            disabledValues={["id-sre"]}
            isOpen
          />
        </StoryWrapper.Row>
      </StoryWrapper>
    </div>

    <StoryWrapper isReversed={isReversed}>
      <StoryWrapper.Row rowTitle="Dropdown Fullwidth">
        <Select
          id="select-dropdown-fullwidth"
          label="label"
          items={singleMockItems}
          description="This is a description"
          placeholder="Placeholder"
          isOpen
          isFullWidth
        />
      </StoryWrapper.Row>
    </StoryWrapper>
  </>
)

export const DropdownStickerSheet = DropdownSheet.bind({})
DropdownStickerSheet.storyName = "Dropdown"
DropdownStickerSheet.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}
