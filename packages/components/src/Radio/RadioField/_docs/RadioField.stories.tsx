import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { RadioField } from "../index"

const meta = {
  title: "Components/Radio controls/RadioField",
  component: RadioField,
  args: {
    labelText: "Radio label",
    name: "radio",
    value: "radio-value",
    selectedStatus: false,
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
