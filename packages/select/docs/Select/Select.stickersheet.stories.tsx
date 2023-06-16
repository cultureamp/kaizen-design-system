import React from "react"
import { Node } from "@react-types/shared"
import { Meta, StoryFn } from "@storybook/react"
import { StoryWrapper } from "../../../../storybook/components/StoryWrapper"
import { Select } from "../../src/Select/Select"
import { SingleItemType } from "../../src/types"
import { singleMockItems } from "../MockData"

export default {
  title: "Components/Select",
  component: Select,
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta<typeof Select>

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <>
    <StoryWrapper isReversed={isReversed}>
      <StoryWrapper.RowHeader
        headings={["Base", "Selected", "Hover", "Focus", "Disabled"]}
      />
      <StoryWrapper.Row rowTitle="Default">
        <Select
          id="select-default"
          label="label"
          items={singleMockItems}
          description="This is a description"
          placeholder="Placeholder"
          disabledValues={["id-sre"]}
          isReversed={isReversed}
        />
        <Select
          id="select-selected"
          label="label"
          items={singleMockItems}
          description="This is a description"
          selectedKey="id-sre"
          trigger={(triggerProps): JSX.Element => (
            <Select.TriggerButton
              {...triggerProps}
              classNameOverride="story__button-selected"
            />
          )}
          isReversed={isReversed}
        />
        <Select
          id="select-hovered"
          label="label"
          items={singleMockItems}
          description="This is a description"
          selectedKey={null}
          placeholder="Placeholder"
          trigger={(triggerProps): JSX.Element => (
            <Select.TriggerButton
              {...triggerProps}
              classNameOverride="story__button-hover"
            />
          )}
          isReversed={isReversed}
        />
        <Select
          id="select-focused"
          label="label"
          items={singleMockItems}
          description="This is a description"
          selectedKey={null}
          placeholder="Placeholder"
          trigger={(triggerProps): JSX.Element => (
            <Select.TriggerButton
              {...triggerProps}
              classNameOverride="story__button-focus"
            />
          )}
          isReversed={isReversed}
        />
        <Select
          id="select-focused"
          label="label"
          items={singleMockItems}
          description="This is a description"
          selectedKey={null}
          placeholder="Placeholder"
          isDisabled
          isReversed={isReversed}
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
          isReversed={isReversed}
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
            isReversed={isReversed}
          />
        </div>
      </StoryWrapper.Row>
    </StoryWrapper>

    <StoryWrapper isReversed={isReversed}>
      <StoryWrapper.RowHeader headings={["Error", "Caution"]} />
      <StoryWrapper.Row rowTitle="Validation">
        <Select
          id="select-default"
          label="label"
          items={singleMockItems}
          description="This is a description"
          placeholder="Placeholder"
          status="error"
          validationMessage="This is an error"
          isReversed={isReversed}
        />
        <Select
          id="select-default"
          label="label"
          items={singleMockItems}
          description="This is a description"
          placeholder="Placeholder"
          status="caution"
          validationMessage="This is an error"
          isReversed={isReversed}
        />
      </StoryWrapper.Row>
    </StoryWrapper>

    <StoryWrapper isReversed={isReversed}>
      <StoryWrapper.RowHeader headings={["Truncated"]} />
      <StoryWrapper.Row rowTitle="Long Texts">
        <Select
          id="select-long-truncated"
          label="label"
          items={[
            { label: "Dev-ops", value: "id-devops" },
            { label: "Others", value: "id-others" },
            {
              label:
                "Super long option where the container is fixed width and the selected option goes multiline",
              value: "id-long",
            },
            {
              label: "Metallblasinstrumentenbauermeisterbrief",
              value: "id-long-word",
            },
          ]}
          description="This is a description"
          selectedKey="id-long"
          isReversed={isReversed}
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

export const StickerSheetReversed = StickerSheetTemplate.bind({})
StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"
StickerSheetReversed.args = { isReversed: true }
StickerSheetReversed.parameters = {
  controls: { disable: true },
  backgrounds: { default: "Purple 700" },
  chromatic: { disable: false },
}

const DropdownSheet: StoryFn<{ isReversed: boolean }> = ({ isReversed }) => (
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
DropdownStickerSheet.storyName = "Sticker Sheet Dropdown"
DropdownStickerSheet.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}
