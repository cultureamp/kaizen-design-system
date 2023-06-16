import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { FilterButton } from "../FilterButton"

const meta = {
  title: "Components/Filter Base/Filter Buttons/Filter Button",
  component: FilterButton,
  args: {
    label: "Label",
  },
} satisfies Meta<typeof FilterButton>

export default meta

export const Playground: StoryObj<typeof meta> = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

/**
 * A string or JSX.Element (most common for values with dom formatting).
 */
export const SelectedValue: StoryObj<typeof meta> = {
  render: args => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <FilterButton {...args} selectedValue="Pancakes" />
      <FilterButton
        {...args}
        selectedValue={
          <span>
            <span>3 Apr 2023</span> - <span>1 May 2023</span>
          </span>
        }
      />
    </div>
  ),
}

/**
 * Controls the open state (chevron changes direction).
 */
export const IsOpen: StoryObj<typeof meta> = {
  render: args => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <FilterButton {...args} />
      <FilterButton {...args} isOpen />
    </div>
  ),
}
