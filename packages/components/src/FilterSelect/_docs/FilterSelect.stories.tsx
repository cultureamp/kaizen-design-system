import React, { useState } from "react"
import { Meta, StoryFn } from "@storybook/react"
import { renderTriggerControls } from "~components/Filter/_docs/controls/renderTriggerControls"
import { FilterButton } from "../../FilterButton"
import { FilterSelect } from "../FilterSelect"
import { SelectOption } from "../types"
import { groupedMockItems, singleMockItems } from "./mockData"

export default {
  title: "Components/Filter Select",
  component: FilterSelect,
  argTypes: {
    isOpen: { control: "disabled" },
    setIsOpen: { control: "disabled" },
    renderTrigger: renderTriggerControls,
    items: {
      options: ["Single", "Grouped"],
      control: { type: "radio" },
      mapping: {
        Single: singleMockItems,
        Grouped: groupedMockItems,
      },
    },
  },
  parameters: {
    actions: {
      argTypesRegex: "^on.*",
    },
  },
} satisfies Meta<typeof FilterSelect>

export const Playground: StoryFn<typeof FilterSelect> = args => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return <FilterSelect {...args} isOpen={isOpen} setIsOpen={setIsOpen} />
}
Playground.storyName = "Filter Select"
Playground.args = {
  label: "Coffee",
  /* @ts-expect-error: Storybook controls key; see argTypes in default export */
  items: "Single",
  /* @ts-expect-error: Storybook controls key; see argTypes in default export */
  renderTrigger: "Filter Button",
}

/**
 * Extend the option type to have additional properties to use for rendering.
 */
export const AdditionalProperties: StoryFn = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <FilterSelect<SelectOption & { isFruit: boolean }>
      label="Custom"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      renderTrigger={(triggerProps): JSX.Element => (
        <FilterButton {...triggerProps} />
      )}
      items={[
        { label: "Bubblegum", value: "bubblegum", isFruit: false },
        { label: "Strawberry", value: "strawberry", isFruit: true },
        { label: "Chocolate", value: "chocolate", isFruit: false },
        { label: "Apple", value: "apple", isFruit: true },
        { label: "Lemon", value: "lemon", isFruit: true },
      ]}
    >
      {({ items }): JSX.Element[] =>
        items.map(item =>
          item.type === "item" ? (
            <FilterSelect.Option
              key={item.key}
              item={{
                ...item,
                rendered: item.value?.isFruit
                  ? `${item.rendered} (Fruit)`
                  : item.rendered,
              }}
            />
          ) : (
            <FilterSelect.ItemDefaultRender key={item.key} item={item} />
          )
        )
      }
    </FilterSelect>
  )
}
AdditionalProperties.storyName = "Additional option properties"
