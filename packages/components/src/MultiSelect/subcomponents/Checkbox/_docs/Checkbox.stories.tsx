import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Checkbox, CheckedStatus } from "../index"

const meta = {
  title: "Staging/Multi Select/Checkbox",
  component: Checkbox,
  args: {
    checkedStatus: "unchecked",
    readOnly: false,
    "aria-label": "Checkbox label",
  },
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ readOnly, onChange, checkedStatus, ...args }) => {
    const [status, setStatus] = React.useState<CheckedStatus>(checkedStatus)

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
      if (status === "unchecked") {
        setStatus("indeterminate")
      } else if (status === "indeterminate") {
        setStatus("checked")
      } else if (status === "checked") {
        setStatus("unchecked")
      }
      onChange?.(e)
    }

    React.useEffect(() => {
      setStatus(checkedStatus)
    }, [checkedStatus])

    const props = readOnly
      ? { ...args, readOnly }
      : { ...args, onChange: handleChange }

    return <Checkbox {...props} checkedStatus={status} />
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

export const Interactive: Story = {
  render: Playground.render,
  args: {
    readOnly: undefined,
  },
  parameters: {
    controls: { disable: true },
  },
}
