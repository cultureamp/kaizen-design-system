import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Checkbox } from "../index"
import styles from "./Checkbox.stories.module.scss"

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {
    checkedStatus: "checked",
  },
} satisfies Meta<typeof Checkbox>

export default meta

/**
 * @todo: Main Description goes here
 */
export const Playground: StoryObj<typeof meta> = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
  render: args => {
    const [status, setStatus] = React.useState(args.checkedStatus)

    const handleClick = e => {
      if (status === "unchecked") {
        setStatus("indeterminate")
      } else if (status === "indeterminate") {
        setStatus("checked")
      } else if (status === "checked") {
        setStatus("unchecked")
      }
      args.onClick?.(e)
    }

    return (
      <Checkbox
        {...args}
        onClick={handleClick}
        checkedStatus={status}
        // classNameOverride={styles.test}
      />
    )
  },
  // args: {
  //   onChange: undefined,
  // },
}
