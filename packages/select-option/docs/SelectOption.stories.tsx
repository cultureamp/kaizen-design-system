import React, { useState } from "react"
import { ComponentMeta, Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { Item } from "@react-stately/collections"
import { Selection } from "@react-types/shared"
import { CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { SelectOption } from "../index"
import { SelectOption as SelectOptionReactAria } from "../src/ReactAriaSelectOption/SelectOption"
import { ItemType, ValueType } from "../src/type"
import { Option } from "../src/ReactAriaSelectOption/Option"

export default {
  title: `${CATEGORIES.components}/Select Option`,
  component: SelectOption,
  parameters: {
    docs: {
      description: {
        component: 'import { SelectOption } from "@kaizen/select-option".',
      },
    },
    ...figmaEmbed(
      "REPLACE_THIS_WITH_FIGMA_URL"
    ) /** @todo: Replace with Figma frame url */,
  },
  decorators: [withDesign],
} as ComponentMeta<typeof SelectOption>

export const DefaultKaizenSiteDemo = args => (
  <SelectOption
    trigger={
      <SelectOption.Trigger>
        {context => (
          <button onClick={() => context.setOpen(c => !c)}>click me</button>
        )}
      </SelectOption.Trigger>
    }
  >
    <SelectOption.ListBox>
      <SelectOption.Option>First</SelectOption.Option>
      <SelectOption.Option>Second</SelectOption.Option>
      <SelectOption.Option>Third</SelectOption.Option>
    </SelectOption.ListBox>
  </SelectOption>
)
DefaultKaizenSiteDemo.storyName = "Default (Kaizen Site Demo)"

const items: ItemType[] = [
  { label: "Front-End", value: "id-fe" },
  { label: "Back-End", value: "id-be" },
  { label: "Site reliability", value: "id-sre" },
]

const getLabels = (keys?: Selection) => {
  if (!keys) {
    return ""
  }

  if (keys === "all") {
    return items.map(item => item.label).join(", ")
  }

  return Array.from(keys)
    .map(key => items.find(item => item.value === key)?.label)
    .filter(item => item)
    .join(", ")
}

const label = "Engineer"

export const ReactAriaDemo = args => {
  const [selectedKeys, setSelectedKeys] = useState<Selection>()

  const handleSelectionChange = (keys: Selection) => {
    keys && setSelectedKeys(keys)
  }
  return (
    <SelectOptionReactAria
      defaultOpen={true}
      label="Engineer"
      items={items}
      onSelectionChange={handleSelectionChange}
      selectionMode={"multiple"}
      trigger={menuCtx => (
        <button
          {...menuCtx.buttonProps}
          ref={menuCtx.buttonRef}
          style={{ height: 30, fontSize: 14 }}
        >
          {`${label}: ${getLabels(selectedKeys)}`}
          <span aria-hidden="true" style={{ paddingLeft: 5 }}>
            ▼
          </span>
        </button>
      )}
    >
      {ctx => (
        <>
          <input
            type="search"
            placeholder="Search...."
            onChange={ctx.handleSearch}
          />
          <ul
            {...ctx.listBoxProps}
            ref={ctx.listRef}
            style={{
              padding: 0,
              margin: "5px 0",
              listStyle: "none",
              border: "1px solid gray",
              maxWidth: 250,
            }}
          >
            {Array.from(ctx.selectionState.collection).map(item => (
              <Option key={item.key} item={item} state={ctx.selectionState} />
            ))}
          </ul>
          <button
            onClick={() => ctx.selectionState.selectionManager.selectAll()}
          >
            Select All
          </button>
          <button
            onClick={() => ctx.selectionState.selectionManager.clearSelection()}
          >
            Clear
          </button>
        </>
      )}
    </SelectOptionReactAria>
  )
}
ReactAriaDemo.storyName = "React-Aria Demo"

// const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
//   isReversed,
// }) => (
//   <StoryWrapper isReversed={isReversed}>
//     <StoryWrapper.RowHeader headings={["COLUMN 1", "COLUMN 2"]} />
//     <StoryWrapper.Row rowTitle="ROW 1">
//       <div>hrehrhe</div>
//     </StoryWrapper.Row>
//     <StoryWrapper.Row rowTitle="ROW 2">
//       <div>hrehrhe</div>
//     </StoryWrapper.Row>
//   </StoryWrapper>
// )

// export const StickerSheetDefault = StickerSheetTemplate.bind({})
// StickerSheetDefault.storyName = "Sticker Sheet (Default)"
// StickerSheetDefault.parameters = {
//   chromatic: { disable: false },
//   controls: { disable: true },
// }

// export const StickerSheetReversed = StickerSheetTemplate.bind({})
// StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"
// StickerSheetReversed.args = { isReversed: true }
// StickerSheetReversed.parameters = {
//   chromatic: { disable: false },
//   backgrounds: { default: "Purple 700" },
//   controls: { disable: true },
// }

// /** @todo: Add extra stories to showcase props which don't appear in sticker sheets */
