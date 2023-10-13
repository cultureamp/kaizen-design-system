import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { RadioField } from "../index"

const meta = {
  title: "Components/Radio controls/RadioField",
  component: RadioField,
  args: {
    labelText: "Radio label",
    name: "radio-group",
    value: "radio-value",
    selectedStatus: false,
  },
  argTypes: {
    name: {
      description:
        "Unique identifier for the group this RadioField belongs to. Required for keyboard navigation of the group. See also [Defining a radio group](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#defining_a_radio_group) on MDN. E.g. the question ID for which this is one possible answer to.",
      table: { type: { summary: "string" } },
    },
    value: {
      description:
        "The value for this form field when this radio button is selected.",
      table: { type: { summary: "string" } },
    },
  },
} satisfies Meta<typeof RadioField>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ onClick, selectedStatus, ...props }) => {
    const [status, setStatus] = React.useState<boolean | undefined>(
      selectedStatus
    )

    const handleClick: React.MouseEventHandler<HTMLInputElement> = e => {
      setStatus(!status)
      onClick?.(e)
    }

    React.useEffect(() => {
      setStatus(selectedStatus)
    }, [selectedStatus])

    return (
      <RadioField {...props} selectedStatus={status} onClick={handleClick} />
    )
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}
