import React, { useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import {
  CheckboxField,
  CheckboxFieldProps,
} from "~components/Checkbox/CheckboxField"
import { CheckboxGroup } from "../index"

const meta = {
  title: "KAIO-Staging/Checkbox controls/CheckboxGroup",
  component: CheckboxGroup,
  args: {
    labelText: "Label",
    children: (
      <>
        <CheckboxField labelText="Checkbox one" />
        <CheckboxField labelText="Checkbox two" />
        <CheckboxField labelText="Checkbox three" />
      </>
    ),
  },
} satisfies Meta<typeof CheckboxGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => {
    const [checkedStatus, setCheckedStatus] =
      useState<CheckboxFieldProps["checkedStatus"]>("mixed")

    const onCheckHandler = (): void => {
      const newStatus = checkedStatus === "on" ? "off" : "on"
      setCheckedStatus(newStatus)
    }

    return (
      <CheckboxGroup {...args}>
        <CheckboxField
          labelText="Checkbox one"
          checkedStatus={checkedStatus}
          onCheck={onCheckHandler}
        />
        <CheckboxField
          labelText="Checkbox two"
          checkedStatus={checkedStatus}
          onCheck={onCheckHandler}
        />
        <CheckboxField
          labelText="Checkbox three"
          checkedStatus={checkedStatus}
          onCheck={onCheckHandler}
        />
      </CheckboxGroup>
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
        <CheckboxGroup {...args} labelText="Default" />
        New line of text
      </div>
      <div>
        <CheckboxGroup {...args} labelText="NoBottomMargin" noBottomMargin />
        New line of text
      </div>
    </div>
  ),
}
