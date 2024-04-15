import React, { useState } from "react"
import { StoryObj } from "@storybook/react"
import { expect, userEvent, within } from "@storybook/test"
import {
  FilterButton,
  FilterButtonProps,
} from "~components/Filter/FilterButton"
import { FilterDatePicker } from "./FilterDatePicker"

export default {
  title: "Tier 2/Filter Date Picker/Tests",
  component: FilterDatePicker,
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // Pseudo states of FilterButton do not meet contrast ratios, however
            // given this test is functional, we can ignore this rule.
            id: "color-contrast",
            enabled: false,
          },
        ],
      },
    },
  },
}

type Story = StoryObj<typeof FilterDatePicker>

const TestBase: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [date, setDate] = useState<Date | undefined>()

    return (
      <FilterDatePicker
        id="filter-dp--test"
        label="Date"
        locale="en-AU"
        renderTrigger={(triggerButtonProps: FilterButtonProps): JSX.Element => (
          <FilterButton {...triggerButtonProps} />
        )}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedDate={date}
        onDateChange={setDate}
      />
    )
  },
}

export const SubmitInputViaEnterKey: Story = {
  ...TestBase,
  play: async ({ canvasElement, step }) => {
    const { getByRole, getByLabelText, queryByRole } = within(canvasElement)

    await step("Open popover", async () => {
      await userEvent.click(getByRole("button", { name: "Date" }))
    })

    await step("Type value and press Enter key", async () => {
      const inputDate = getByLabelText("Date", { selector: "input" })
      await userEvent.click(inputDate)
      await userEvent.type(inputDate, "03/05/2022")
      await userEvent.keyboard("{Enter}")
    })

    await step("Ensure the popover didn't re-open", async () => {
      expect(queryByRole("dialog")).not.toBeInTheDocument()
    })
  },
}
