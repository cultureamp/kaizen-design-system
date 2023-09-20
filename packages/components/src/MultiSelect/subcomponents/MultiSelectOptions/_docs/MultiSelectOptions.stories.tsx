import React, { useState } from "react"
import { expect } from "@storybook/jest"
import { Meta, StoryObj } from "@storybook/react"
import { userEvent, within } from "@storybook/testing-library"
import { MultiSelectOptions } from "../index"

const meta = {
  title: "Components/MultiSelect/MultiSelectOptions",
  component: MultiSelectOptions,
  args: {
    id: "id--multi-select-options",
    selectedValues: new Set(["pancakes"]),
    options: [
      {
        label: "Pancakes",
        value: "pancakes",
      },
      {
        label: "Waffle",
        value: "waffle",
      },
      {
        label: "Toastie",
        value: "toastie",
      },
    ],
  },
} satisfies Meta<typeof MultiSelectOptions>

export default meta

type Story = StoryObj<typeof meta>

const MultiSelectOptionsTemplate: Story = {
  render: args => {
    const [selectedValues, setSelectedValues] = useState<Set<React.Key>>(
      args.selectedValues
    )
    return (
      <MultiSelectOptions
        {...args}
        selectedValues={selectedValues}
        onChange={setSelectedValues}
      />
    )
  },
}

export const Playground: Story = {
  ...MultiSelectOptionsTemplate,
  args: {
    id: "id--jaffle",
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const { getByRole, queryAllByRole } = within(canvasElement)

    // console.log(
    //   'document.querySelectorAll("svg")',
    //   document.querySelectorAll("svg")
    // )
    // expect(document.querySelectorAll("svg").length).toBe(1)

    const waffleOption = getByRole("checkbox", { name: "Waffle" })
    await step("click waffle", async () => {
      await userEvent.click(waffleOption)
    })

    await step("should be checked", async () => {
      // expect(queryAllByRole("presentation", { hidden: true }).length).toBe(1)
      expect(queryAllByRole("presentation", { hidden: true }).length).toBe(2)
    })
  },
}
