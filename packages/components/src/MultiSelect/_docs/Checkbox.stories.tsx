import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Checkbox, CheckedStatus } from "../subcomponents"

const meta = {
  title: "Components/MultiSelect/Checkbox",
  component: Checkbox,
  args: {
    checkedStatus: "checked",
    readOnly: true,
  },
} satisfies Meta<typeof Checkbox>

export default meta

export const Playground: StoryObj<typeof meta> = {
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

export const Interactive: StoryObj<typeof meta> = {
  render: () => {
    const [status, setStatus] = React.useState<CheckedStatus>("unchecked")

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
      if (status === "unchecked") {
        setStatus("indeterminate")
      } else if (status === "indeterminate") {
        setStatus("checked")
      } else if (status === "checked") {
        setStatus("unchecked")
      }
    }

    return <Checkbox onChange={handleChange} checkedStatus={status} />
  },
  parameters: {
    controls: { disable: true },
  },
}
