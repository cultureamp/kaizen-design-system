import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { classNameOverrideArgType } from "../../../../../storybook/argTypes"
import { MultiSelect } from "../index"

const meta = {
  title: "Components/MultiSelect",
  component: MultiSelect,
  argTypes: {
    ...classNameOverrideArgType,
  },
} satisfies Meta<typeof MultiSelect>

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
}
