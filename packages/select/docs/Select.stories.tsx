import React from "react"
import { useSelectState } from "@react-stately/select"
import { ComponentMeta, ComponentStory, Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import { Select, selectChildren } from "../src/Select/Select"
import overlayStyles from "../src/Select/components/Overlay/Overlay.module.scss"
import { SelectContext } from "../src/Select/context/SelectContext"
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
  defaultOpen: false,
}

DefaultStory.parameters = {
  chromatic: { disable: false },
  docs: { source: { type: "code" } },
}

type MockListBoxProps = {
  optionClassName?: string
  selectedKey?: React.Key | null
  isFullWidth?: boolean
}

const MockListBox: React.VFC<MockListBoxProps> = ({
  optionClassName,
  selectedKey,
  isFullWidth,
}) => {
  /**
   * The state will be created within the Select component - this is for storybook demo only.
  You will not need to pass the state into the ListBox or the Option. */
  const mockState = useSelectState({
    selectedKey: selectedKey ?? undefined,
    items: singleMockItems,
    children: selectChildren,
  })

  return (
    <SelectContext.Provider value={{ state: mockState }}>
      <div
        className={overlayStyles.menuPopup}
        style={{ position: "relative", width: !isFullWidth ? "180px" : "100%" }}
      >
        <Select.ListBox menuProps={{}}>
          {Array.from(mockState.collection).map(item => (
            <Select.Option
              key={item.key}
              item={item}
              classNameOverride={
                item.key === "id-sre" ? `${optionClassName}` : undefined
              }
            />
          ))}
        </Select.ListBox>
      </div>
    </SelectContext.Provider>
  )
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
          items={singleMockItems}
          description="This is a description"
          placeholder="Placeholder"
        />
        <Select
          id="select-selected"
          label="label"
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
        />
        <Select
          id="select-focused"
          label="label"
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
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Full Width">
        <Select
          id="select-full-width"
          label="label"
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
            items={singleMockItems}
            description="This is a description"
            isFullWidth
            placeholder="Placeholder"
          />
        </div>
      </StoryWrapper.Row>
    </StoryWrapper>

    <div style={{ height: "550px", marginTop: "12rem" }}>
      <StoryWrapper isReversed={isReversed}>
        <StoryWrapper.RowHeader
          headings={["Base", "Selected", "Hover", "Focus"]}
        />
        <StoryWrapper.Row rowTitle="Dropdown">
          <MockListBox />
          <MockListBox selectedKey="id-sre" />
          <MockListBox optionClassName="story__option-hover" />
          <MockListBox optionClassName="story__option-focus" />
        </StoryWrapper.Row>
      </StoryWrapper>
    </div>

    <StoryWrapper isReversed={isReversed}>
      <StoryWrapper.Row rowTitle="Dropdown Fullwidth">
        <MockListBox isFullWidth />
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
