import React, { ChangeEventHandler, useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import {
  CheckboxField,
  CheckboxFieldProps,
} from "~components/Checkbox/CheckboxField"
import { CheckboxGroup } from "../index"

const meta = {
  title: "Components/Checkbox controls/CheckboxGroup",
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
    const [checkedStatus, setCheckedStatus] = useState<
      Record<string, CheckboxFieldProps["checkedStatus"]>
    >({
      one: "off",
      two: "on",
      three: "mixed",
    })

    const onCheckHandler =
      (id: string): ChangeEventHandler<HTMLInputElement> =>
      () => {
        if (checkedStatus[id] === "off") {
          setCheckedStatus({
            ...checkedStatus,
            [id]: "mixed",
          })
        } else if (checkedStatus[id] === "mixed") {
          setCheckedStatus({
            ...checkedStatus,
            [id]: "on",
          })
        } else if (checkedStatus[id] === "on") {
          setCheckedStatus({
            ...checkedStatus,
            [id]: "off",
          })
        }
      }

    return (
      <CheckboxGroup {...args}>
        <CheckboxField
          labelText="Checkbox one"
          checkedStatus={checkedStatus["one"]}
          onCheck={onCheckHandler("one")}
        />
        <CheckboxField
          labelText="Checkbox two"
          checkedStatus={checkedStatus["two"]}
          onCheck={onCheckHandler("two")}
        />
        <CheckboxField
          labelText="Checkbox three"
          checkedStatus={checkedStatus["three"]}
          onCheck={onCheckHandler("three")}
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
    <div className="kz-flex kz-gap-16">
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
