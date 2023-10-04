import React, { useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import { CheckboxField, CheckboxFieldProps } from "../index"

const meta = {
  title: "Components/Checkbox controls/CheckboxField",
  component: CheckboxField,
  args: {
    labelText: "Checkbox",
    checkedStatus: "off",
  },
} satisfies Meta<typeof CheckboxField>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ onCheck, checkedStatus, ...props }) => {
    const [status, setStatus] =
      useState<CheckboxFieldProps["checkedStatus"]>(checkedStatus)

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
      if (status === "off") {
        setStatus("mixed")
      } else if (status === "mixed") {
        setStatus("on")
      } else if (status === "on") {
        setStatus("off")
      }
      onCheck?.(e)
    }

    React.useEffect(() => {
      setStatus(checkedStatus)
    }, [checkedStatus])

    return (
      <CheckboxField {...props} checkedStatus={status} onCheck={handleChange} />
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

export const NoBottomMargin: Story = {
  render: args => (
    <div className="flex gap-16">
      <div>
        <CheckboxField {...args} labelText="Default" />
        <CheckboxField {...args} labelText="Default" />
      </div>
      <div>
        <CheckboxField {...args} labelText="NoBottomMargin" noBottomMargin />
        <CheckboxField {...args} labelText="NoBottomMargin" noBottomMargin />
      </div>
    </div>
  ),
}
