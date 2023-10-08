import React, { useEffect, useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import { CheckboxFieldProps } from "@kaizen/draft-form"
import { Checkbox } from "../index"

const meta = {
  title: "Components/Checkbox controls/Checkbox",
  component: Checkbox,
  args: {
    checkedStatus: "off",
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // Built with no label on purpose, to be used within `RadioField` where label is present
            id: "label",
            enabled: false,
          },
        ],
      },
    },
  },
} satisfies Meta<typeof Checkbox>

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

    useEffect(() => {
      setStatus(checkedStatus)
    }, [checkedStatus])

    return <Checkbox {...props} checkedStatus={status} onCheck={handleChange} />
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}
